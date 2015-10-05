Ext.define('iRISKClient.App.LayoutProvider', {
    singleton: true,

    constructor: function (config) {
        this.initConfig(config);
    },


    storeLayoutBuffredTimer: null,

    storeLayoutBuffred: function () {
        //console.log("storeLayoutBuffred");
        window.clearTimeout(storeLayoutBuffredTimer);
        storeLayoutBuffredTimer = setTimeout(function () { iRISKClient.App.LayoutProvider.storeLayout() }, 5000);
    },

    storeLayout: function () {
        var me = this,
            mainView = me.getMainView(),
            dashboard = mainView.down('iriskdashboard'),
            controller = dashboard.getController(),
            tabs = controller.getTabs(),
            dashboards = [],
            layout, i, tab, items, jsLayout, oldWorkspace;

        console.log("Storing layout");

        layout = localStorage.StoredLayout;
        if(layout){
            layout = Ext.decode(layout);
        }
        else {
            layout = {
                workspaces: []
            }
        }

        if (this.initLoad)
            return;

        var myMask = new Ext.LoadMask({
            msg: 'Storing layout, Please wait...',
            target: mainView
        });

        myMask.show();

        // Loop though the dashboard tabs
        for(var key in tabs){
            tab = tabs[key];

            var dashboard = {
                columnWidths: [],
                columns: []
            };

            var columns = tab.query('dashboard-column');

            // Loop though all the items in the dashboard columns
            for(i = 0; i < columns.length; i++){

                var column = columns[i],
                    columnItems = [];

                // Loop though all the items in the dashboard column
                column.items.each(function(columnItem){

                    var dashboardColumnState = columnItem.getState(),
                        state = {
                            height: dashboardColumnState.height
                        },
                        valueType = me.storeConteiner(columnItem, state);

                    columnItems.push({
                        type: columnItem._partConfig.type,
                        value: valueType,
                        title: columnItem._partConfig.title,
                        state: state
                    });


                });

                dashboard.columns.push(columnItems);
                dashboard.columnWidths.push(tab.columnWidth);
            }

            dashboards.push(dashboard);

        }

        // Remove the old workspace config if already existing
        oldWorkspace = me.findWorkspace(layout);
        if(oldWorkspace){
            Ext.Array.remove(layout.workspaces, oldWorkspace);
        }

        layout.workspaces.push({
            index: Settings.workspace,
            dashboards: dashboards
        });

        jsLayout = Ext.encode(layout);

        localStorage.setItem('StoredLayout', jsLayout);

        Ext.Ajax.request({
            url: Settings.HostUrl + 'Account/SenchaLayoutStoreSave',
            method: 'POST',
            params: {
                layout: jsLayout
            },
            success: function (response, opts) {
                myMask.destroy(true);
            },

            failure: function (response, opts) {
                myMask.destroy(true);
            }

        });

    },

    storeConteiner: function (columnItem, state) {

        if (columnItem.items.items[0].columns) {

            var columns = [];

            columnItem.items.items[0].columns.forEach(function (col) {

                if (col.items) {
                    var cstate = col.getColumnState && col.getColumnState();
                    cstate.dataIndex = col.dataIndex;
                    if (cstate) {
                        columns.push(cstate);
                    }
                }
            });

            state.columns = columns;
        }


        var valueType = columnItem._partConfig.title;

        switch (columnItem._partConfig.type) {

            case 'portfolio_deals':
                {
                    valueType = columnItem._partConfig.portfolioId;
                    break;
                }

            case 'repport':
                {
                    valueType = new Object();
                    var reportGrid = columnItem.items.items[0];

                    valueType.reportId = reportGrid.reportId;
                    columnItem._partConfig.title = reportGrid.reportName;

                    if (valueType.reportId == 0) {
                        valueType.reportGUID = reportGrid.reportGUID;
                        valueType.report_type = reportGrid.report_type;
                        valueType.report_split = reportGrid.report_split;
                        valueType.report_sort = reportGrid.report_sort;
                        valueType.report_groupId = reportGrid.report_groupId;
                    }

                    break;
                }

            case 'chart':
                {
                    valueType = new Object();
                    var stxx = columnItem.items.items[0].stxx;
                    if (stxx != null) {
                        valueType.layout = stxx.exportLayout();
                        valueType.drawings = stxx.serializeDrawings();

                        var series = [];
                        for (var property in stxx.chart.series) {
                            series.push(property);
                        }

                        valueType.series = series;
                        //stxx.chart.series
                    }

                    break;
                }

        }

        return valueType;

    },

    restoreLayout: function () {
        var me = this,
            mainView = me.getMainView();

        var myMask = new Ext.LoadMask({
            msg: 'Restoring layout, Please wait...',
            target: mainView
        });

        myMask.show();

        // TEMPORARY RESTORE LAYOUT FROM LOCAL STORAGE

        var layout = Ext.decode(localStorage.StoredLayout);
        me.restore(layout);

        myMask.destroy(true);

        /*
        Ext.Ajax.request({
            url: Settings.HostUrl + 'Account/SenchaLayoutStoreGet',
            method: "GET",
            success: function (response, opts) {

                var layout = JSON.parse(JSON.parse(response.responseText));

                try {
                    Ext.suspendLayouts();
                    me.restore(layout);
                    Ext.resumeLayouts();
                    myMask.hide();
                } catch (ex) {
                    myMask.hide();
                    Ext.Msg.alert('Restore failed: ', ex);
                }

            },

            failure: function (response, opts) {
                myMask.hide();
                Ext.Msg.alert('Status', response);
            }
        });
        */
    },

    restore: function (layout) {
        var me = this,
            mainView = me.getMainView(),
            workspace = me.findWorkspace(layout),
            index;

        if (workspace) {

            workspace.dashboards.forEach(function (dashboard) {

                index = 0;

                Ext.GlobalEvents.fireEvent('adddashboardtab', null, dashboard.columnWidths);

                dashboard.columns.forEach(function (column) {

                    column.forEach(function (item) {
                        me.restoreContiner(item, index);
                    });

                    index++;

                });


            });

        }
        else {
            // Create the first tab if no layout was saved
            Ext.GlobalEvents.fireEvent('adddashboardtab', 'Tab 1');
        }

        me.initLoad = false;
    },

    findWorkspace: function(layout){
        var layout = layout || {},
            workspaces = layout.workspaces || [],
            length = workspaces.length,
            i = 0, workspace;

        if (layout && layout.workspaces) {
            for (; i < length; i++) {
                workspace = layout.workspaces[i];
                if (workspace.index === Settings.workspace) {
                    return workspace;
                }
            }
        }

        return null;
    },

    restoreContiner: function (item, i) {
        var viewConfig;

        switch (item.type) {

            case 'portfolio_deals':
                {
                    viewConfig = {
                        type: item.type,
                        title: item.title,
                        portfolioId: item.value
                    };

                    break;
                }
            case 'repport':
                {
                    viewConfig = {
                        type: item.type,
                        title: item.title,
                        reportName: item.title,
                        reportId: item.value.reportId,
                        reportGUID: item.value.reportGUID,
                        report_type: item.value.report_type,
                        report_split: item.value.report_split,
                        report_sort: item.value.report_sort,
                        report_groupId: item.value.report_groupId,
                        restoring: true
                    };

                    break;
                }

            case 'chart':
                {
                    viewConfig = {
                        type: item.type,
                        title: item.title,
                        chartIQState: item.value,
                        stateValue: item.state
                    };

                    break;
                }

            default:
                {
                    viewConfig = {
                        type: item.type,
                        title: item.title,
                        stateValue: item.state
                    };
                }

        }

        Ext.GlobalEvents.fireEvent('adddashboardview', viewConfig, false, i, function(view){

            if (item.state) {

                if (item.state.columns) {

                    var grid = view.items.items[0];
                    item.state.columns.forEach(function (col) {
                        grid.columns.forEach(function (gridCol) {
                            if (col.dataIndex == gridCol.dataIndex) {

                                col.id = gridCol.stateId;

                                if (col.hidden)
                                    gridCol.setHidden(true);
                                if (col.width)
                                    gridCol.setWidth(col.width);

                            }
                        });
                    });
                }

                if (item.state.height) {

                    view.setHeight(item.state.height);

                }
            }


        });


    },

    addNewTab: function (worspace) {

        return worspace.add({
            title: 'Tab ',
            xtype: 'dashboard',
            region: 'center',
            parts: {
                repport: {
                    viewTemplate: {
                        items: [{
                            xtype: 'reports'
                        }]
                    }
                },
                liveprices: {
                    viewTemplate: {
                        items: [{
                            xtype: 'liveprices'
                        }]
                    }
                },
                chart: {
                    viewTemplate: {
                        items: [{
                            xtype: 'chartsLive'
                        }]
                    }
                },
                portfolio_deals: {
                    viewTemplate: {
                        items: [{
                            xtype: 'portfolio_deals'
                        }]
                    }
                }
            }
        });
    },

    getMainView: function(){
        return Ext.getCmp('irisk-main-view');
    }
});