Ext.define('iRISKClient.view.dashboards.DashBoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',

    counter: 1,

    listen: {
        global: {
            showfullscreen: 'onShowFullScreen',
            closefullscreen: 'onCloseFullScreen'
        }
    },
     
    onShowFullScreen: function (xtype, partConfig) {
        var me = this,
            view = me.getView(),
            tabBar = view.getTabBar(),
            tab;

        tab = view.add({
            reference: 'fullscreentab',
          //  layout: 'fit',
          //  align: 'stretch',
            title: 'Fullscreen'
        });

        view.setActiveTab(tab);

        tabBar.hide();

        tab.add({
            xtype: xtype,
            partConfig: partConfig
        });
    },

    onCloseFullScreen: function () {
        var me = this,
            view = me.getView(),
            tabBar = view.getTabBar(),
            tab = me.lookupReference('fullscreentab');

        tab.close();

        tabBar.show();
    },


    onAddDashboard: function (sender) {
        //debugger;
        var view = this.getView();
        this.counter++;
        var wrkSpace = view.up('container').lookupReference('centerPanel');
        //debugger;

        var tab = wrkSpace.add({
            title: 'Tab ' + this.counter,
            xtype: 'dashboard',
            //stateId: 'dasboard_' + this.counter,
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
                            xtype: 'livepricesnew'
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


        wrkSpace.setActiveTab(tab);

        //wrkSpace.doLayout(); EXTJS6

    }
});