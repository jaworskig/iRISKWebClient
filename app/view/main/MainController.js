 
var storeLayoutBuffredTimer = null;

Ext.define('iRISKClient.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    // livePriceDialog: null,

    init: function () {
        // livePriceDialog = new iRISKClient.view.liveprices.LivePricesBuilder();

    },

    singleton: true,

    initLoad: true,

    getActiveDashboard: function () {

        var activeWorkspace = iRISKClient.view.main.MainController.lookupReference('mainArea').getActiveTab();

        var mainPanel = activeWorkspace.lookupReference('centerPanel');

        return mainPanel.getActiveTab();
    },


    checkWsState: function (source) {
        //debugger;

        if (source == null) {
            source = Ext.getCmp('wsIndicator');

        }


        if (HubService.socketHub.connection.state == 1) {
            source.setText('Status: connected');
        } else {

            source.setText('Status: not connected');
        }

    },

    setWsState: function (text) {
        //debugger;

        var source = Ext.getCmp('wsIndicator');

        source.setText('Status: ' + text);


    },


    showLivePrices: function () {

        var win = new iRISKClient.view.liveprices.LivePricesBuilder();
        win.show();
        //livePriceDialog.show();
    },

    showSettings: function () {

        var win = new iRISKClient.view.settings.SettingsWindow();
        win.show();

    },

    storeLayoutBuffredTimer: null,

    storeLayoutBuffred: function () {
        //console.log("storeLayoutBuffred");
        window.clearTimeout(storeLayoutBuffredTimer);
        storeLayoutBuffredTimer = setTimeout(function () { iRISKClient.view.main.MainController.storeLayout() }, 5000);
    },

    storeLayout: function () {

        try {

            console.log("Storing layout");

            if (this.initLoad)
                return;



            //var myMask = new Ext.LoadMask({
            //    msg: 'Storing layout, Please wait...',
            //    target: iRISKClient.view.main.MainController.lookupReference('mainArea')
            //});

            //myMask.show();

            var layout = {
                workspaces: []
            };
            //debugger;
            iRISKClient.view.main.MainController.lookupReference('mainArea').items.items.forEach(function (workspace) {

                var mainPanel = workspace.lookupReference('centerPanel');
                if (mainPanel) {

                    var dashboards = [];
                    mainPanel.items.items.forEach(function (activeTabe) {

                        var dashboard = {
                            columnWidths: [],
                            columns: []
                        };

                        activeTabe.items.items.forEach(function (item) {



                            if (item.initialCls == "x-dashboard-column") {
                                var columnItems = [];

                                item.items.items.forEach(function (columnItem) {

                                    var dashboardColumnState = columnItem.getState();

                                    var state = new Object();
                                    state.height = dashboardColumnState.height;
                                    // debugger;

                                    var valueType = iRISKClient.view.main.MainController.storeConteiner(columnItem, state);


                                    columnItems.push({
                                        type: columnItem._partConfig.type,
                                        value: valueType,
                                        title: columnItem._partConfig.title,
                                        state: state
                                    });

                                });


                                dashboard.columns.push(columnItems);

                                //dashboard.items.push({
                                //    type: columnItem._partConfig.type,
                                //    value: valueType,
                                //    title: columnItem._partConfig.title,
                                //    state: state
                                //});

                                dashboard.columnWidths.push(item.columnWidth);
                            }
                        });

                        dashboards.push(dashboard);
                    });


                    layout.workspaces.push({
                        dashboards: dashboards
                    });
                }

            });

            var jsLayout = Ext.JSON.encode(layout);

            localStorage.setItem("StoredLayout", jsLayout);

            Ext.Ajax.request({
                url: iRISKClient.Application.GlobalSettings.HostUrl + 'Account/SenchaLayoutStoreSave',
                method: 'POST',
                params: {
                    layout: jsLayout
                },

                success: function (response, opts) {
                    //   myMask.hide();
                    //   alert("State successfully saved !");
                },

                failure: function (response, opts) {
                    //     myMask.hide();
                    //     alert("State saved error: " + response.status);
                }

            });

        } catch (err) {
            //   myMask.hide();
            alert("State saved error: " + err);
        }


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
        var me = this;

        var myMask = new Ext.LoadMask({
            msg: 'Restoring layout, Please wait...',
            target: iRISKClient.view.main.MainController.lookupReference('mainArea')
        });

        myMask.show();

        Ext.Ajax.request({
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Account/SenchaLayoutStoreGet',
            success: function (response, opts) {

                var layout = JSON.parse(JSON.parse(response.responseText));

                try {
                    me.restore(layout);
                    myMask.hide();
                } catch (ex) {
                    myMask.hide();
                    Ext.Msg.alert('Status', ex);
                }
               
            },

            failure: function (response, opts) {
                myMask.hide();
                Ext.Msg.alert('Status', response);
            }
        });
    },

    restore: function (layout) {

        var wrkIter = 0;
        var me = this;
        if (layout && layout.workspaces) {
            layout.workspaces.forEach(function(workspace) {

                var dshbIter = 0;
                var work = iRISKClient.view.main.MainController.lookupReference('mainArea').items.items[wrkIter++];
                var mainPanel = work.lookupReference('centerPanel');

                workspace.dashboards.forEach(function(dashboard) {

                    var activeTabe = mainPanel.items.items[dshbIter++];

                    if (activeTabe == undefined)
                        activeTabe = me.AddNewTab(mainPanel);

                    if (dashboard.columnWidths.length > 0)
                        activeTabe.columnWidths = dashboard.columnWidths;

                    var i = 0;

                    dashboard.columns.forEach(function(column) {

                        column.forEach(function(item) {

                            var view = null;

                            switch (item.type) {

                            case 'portfolio_deals':
                            {
                                view = activeTabe.addView({
                                    type: item.type,
                                    title: item.title,
                                    portfolioId: item.value
                                }, i);

                                break;
                            }
                            case 'repport':
                            {
                                view = activeTabe.addView({
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
                                }, i);

                                break;
                            }

                            case 'chart':
                            {
                                //valueType = columnItem.items.items[0].stxx.exportLayout();
                                view = activeTabe.addView({
                                    type: item.type,
                                    title: item.title,
                                    chartIQState: item.value,
                                    stateValue: item.state
                                }, i);

                                break;
                            }

                            default:
                            {
                                view = activeTabe.addView({
                                    type: item.type,
                                    title: item.title,
                                    stateValue: item.state
                                }, i);
                            }

                            }


                            // debugger;
                            if (item.state) {


                                if (item.state.columns) {

                                    var grid = view.items.items[0];
                                    item.state.columns.forEach(function(col) {
                                        grid.columns.forEach(function(gridCol) {
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

                                    //var conteiner = view.items.items[0];
                                    view.setHeight(item.state.height);

                                }


                            }


                        });

                        i++;


                    });
                });
            });
        }
        me.initLoad = false;
    },

    AddNewTab: function (worspace) {

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

    showLogout: function () {
        var me = this;
        Ext.Ajax.request({
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Account/LogOff',
            success: function () {
                me.getView().destroy();
                //Ext.widget('login');

                Ext.create({ xtype: 'login' });

            },

            failure: function (response, opts) {
                alert('server-side failure with status code ' + response.status);
            }
        });

    },

    setServerStatus: function (msg) {

    },

    onAddFeed: function () {

        Ext.create('Ext.window.Window', {
            title: 'BX1',
            height: 500,
            width: 700,
            //renderTo: 'windowLayout',
            maximizable: true,
            //constrain: true,
            // layout: 'fit',
            items: {
                xtype: 'reports',
                name: 'BX1'
                //bodyCls: 'content-panel-body'
                // frame: true
            }
        }).show();

    },


    reinitializeFeeds: function () {

        try {
            console.log("Subscribe portfolio feed list");
            HubService.ReSubscribeFeedPortfolio();

            iRISKClient.view.main.MainController.lookupReference('mainArea').items.items.forEach(function (workspace) {

                var mainPanel = workspace.lookupReference('centerPanel');
                if (mainPanel) {

                    mainPanel.items.items.forEach(function (tab) {

                        tab.items.items.forEach(function (item) {

                            if (item.initialCls == "x-dashboard-column") {

                                var columnItem = item.items.items[0];

                                if (columnItem && columnItem.items) {
                                    var conteiner = columnItem.items.items[0];
                                    var feedProducts = conteiner.feedProducts;

                                    if (feedProducts) {

                                        console.log("Subscribe feed list for conteiner id:" + conteiner.id);
                                        HubService.SubscribeFeedArray(feedProducts, conteiner);
                                    }
                                }

                            }

                        });
                    });
                }


            });
        } catch (ex) {
            console.log(ex);
        }
    },


    onAddFeedUrl: function (sender) {

        // var dashboard = this.lookupReference('dashoboard2');
        // var panel = Ext.create('iRISKClient.view.reports.Reports', {
        //   title: 'From Code'
        // });
        // dashboard.add(panel);

        var dashboard = this.lookupReference('Chart0');
        var panel = Ext.create('iRISKClient.view.reports.Charts', {
            title: 'From Code'
        });
        dashboard.add(panel);

    }
});
