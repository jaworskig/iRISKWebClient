 
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

    storeLayoutBuffred: function () {
        iRISKClient.App.LayoutProvider.storeLayoutBuffred();
    },


    storeLayout: function() {
        iRISKClient.App.LayoutProvider.storeLayout();
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
