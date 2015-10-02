Ext.define('iRISKClient.view.main.MainAppView', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    requires: [
        'Ext.Widget',
        'iRISKClient.LivePricesBuilder.Labels',
        'iRISKClient.LeftArea.Labels',

        'iRISKClient.util.GlobalSettings',
        'iRISKClient.view.main.MainController',
        'iRISKClient.view.leftArea.LeftArea',
        'iRISKClient.view.reports.FoldersTreeList',
        'iRISKClient.view.reports.ReportsTreeListController',
        'iRISKClient.view.reports.GroupedGrid',
        //'iRISKClient.view.portfolio.PortfoliosPanel',
        //'iRISKClient.view.portfolio.PortfoliosExplorer',

        'iRISKClient.view.counterparts.CounterpartsExplorer',
        'iRISKClient.view.rightArea.RigthAreaPanel',
        'iRISKClient.view.dashboards.DashBoard',
        'iRISKClient.view.toolbar.BottomTollbar',
        'iRISKClient.view.dealsLast.DealsLastList',
        'iRISKClient.view.dealsLast.DealsLastEdit',
        'iRISKClient.view.settings.ThemeSwitcherButton',
        'iRISKClient.view.liveprices.LivePricesBuilder',

        'iRISKClient.store.ReportFoldersTree',

        'Ext.layout.container.Border',
        'Ext.dashboard.Dashboard',
        'Ext.plugin.Viewport'
    ],

    layout: {
        type: 'border'
    },
    title: 'iRISK',
    controller: 'main',
    reference: 'mainView',
    xtype: 'app-main',

    stateful: true,
    stateId: 'main',

    items: [
            //Center
            {
                region: 'center',
                xtype: 'tabpanel',
                reference: 'mainArea',
                itemId: 'mainArea',
                stateful: true,
                stateId: 'mainTabPanel',
                items: [
                    {
                        title: '1',
                        xtype: 'workspace',
                        reference: 'workspace_1',
                        stateful: true,
                        stateId: 'workspace_1'
                    },
                    {
                        title: '2'
                    },
                    {
                        title: '3'
                    },
                    {
                        title: '4'
                    },
                    {
                        title: '5'
                    }],
                listeners: {
                    afterrender: function (panel) {
                        var bar = panel.tabBar;

                        bar.insert(0, [{
                            xtype: 'component',
                            html: 'iRISK',
                            //width: 300,
                            //height: 200,
                            padding: 3,
                            style: {
                                color: '#FFFFFF'
                            }
                        }]);

                        bar.add([

                            //{
                            //text: 'Live Prices',
                            //xtype: 'button',
                            //handler: 'showLivePrices'
                            //},
                            {
                                xtype: 'combo',
                                name: 'product-query',
                                autoSelect: true,
                                editable: false,
                                minChars: 0,
                                store: {
                                    type: 'livePricesProductDataStore',
                                    autoLoad: true
                                },
                                displayField: 'name',
                                valueField: 'name',
                                listeners: {
                                    select: function (combo, record, eOpts) {

                                        var dashboard = iRISKClient.view.main.MainController.getActiveDashboard();
                                        var columnIndex = (dashboard.columnWidths != undefined) ? dashboard.columnWidths.length : 0;

                                        dashboard.addView({
                                            type: 'liveprices',
                                            title: 'product:' + record.data.name
                                        }, columnIndex);

                                    }
                                }
                            },

                            {
                                xtype: 'combo',
                               // margin: '0 5 5 5',// (top, right, bottom, left)
                                minChars: 3,
                                queryParam: 'query',
                                queryMode: 'remote',

                                valueField: 'full_name',
                                displayField: 'full_name',

                                store: {
                                    type: 'curve-list'
                                },

                                listeners: {
                                    scope: this,
                                    select: function (item, value) {
                                        //debugger;
                                        //value.data.full_name
                                        var dashboard = iRISKClient.view.main.MainController.getActiveDashboard();
                                        var columnIndex = (dashboard.columnWidths != undefined) ? dashboard.columnWidths.length : 0;

                                        dashboard.addView({
                                            type: 'chart',
                                            title: value.data.full_name
                                        }, columnIndex);

                                    }
                                }
                            },


                        //{
                        //    boxLabel: 'Blink Cells On Updates',
                        //    xtype: 'checkbox',
                        //    checked: false,
                        //    handler: function () {
                        //        blinkCellsOnUpdate = this.getValue();
                        //    }
                        //},


                        {
                            text: 'Store',
                            xtype: 'button',
                            handler: 'storeLayout'//'storeLayout'
                        },
                        //{
                        //    text: 'Restore',
                        //    xtype: 'button',
                        //    handler: 'restoreLayout'
                        //},
                        {
                            xtype: 'component',
                            id: 'feed-status-text',
                            flex: 1,
                            padding: 3,
                            style: {
                                color: '#FFFFFF'
                            }
                        }, {
                            xtype: 'button',
                            html: '#',
                            handler: 'checkWsState',
                            id: 'wsIndicator',
                            listeners: {
                                afterrender: function (button, eOpts) {

                                    iRISKClient.view.main.MainController.checkWsState(button);
                                }
                            }
                        }, {
                            xtype: 'themeSwitcherButton',
                            text: 'Change style'
                        }, {
                            xtype: 'button',
                            iconCls: 'x-tool-img x-tool-gear',
                            handler: 'showSettings'
                        }, {
                            xtype: 'button',
                            html: localStorage.getItem("UserName"),
                            handler: 'showLogout'

                        }]);

                        // debugger;
                        iRISKClient.App.LayoutProvider.restoreLayout();

                    }
                }
            }

    ]


});



Ext.onReady(function () {
    //Ext.lib.Ajax.useDefaultHeader = false;
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
    // Ext.view.AbstractView.updateDelay = 5000;

    var task = Ext.TaskManager.start({
        run: updateClock,
        interval: 10000
    });

});


var lastUpdateCount = 0;
var iRISKServerConnected = true;
var lastServerUpdateCount = 0;

var updateClock = function () {

    if (HubService.lastServerUpdate) {

        var dateNow = Date.now();
        var dateDiff = (dateNow - HubService.lastServerUpdate);

        console.log("dateDiff: " + dateDiff);

        if (dateDiff > 20000) {
            console.log("dateDiff: " + dateDiff);
            iRISKClient.view.main.MainController.setWsState("no connection");
            iRISKServerConnected = false;

            console.log("No connection to server");
        } else {

            if (iRISKServerConnected == false) {
                iRISKClient.view.main.MainController.setWsState("connected");
                iRISKServerConnected = true;

                if (lastServerUpdateCount > HubService.serverUpdateCount) {

                    console.log("lastServerUpdateCount > HubService.serverUpdateCount: " + lastServerUpdateCount + " > " + HubService.serverUpdateCount);

                    lastServerUpdateCount = HubService.serverUpdateCount;
                    iRISKClient.view.main.MainController.reinitializeFeeds();
                }

            } else {
                lastServerUpdateCount = HubService.serverUpdateCount;
            }
        }
    }

};