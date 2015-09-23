Ext.define('iRISKClient.view.dashboards.DashBoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',
    listen: {
        global: {
            showfullscreen: 'onShowFullScreen',
            closefullscreen: 'onCloseFullScreen'
        }
    },

    onShowFullScreen: function(xtype, partConfig){
        var me = this,
            view = me.getView(),
            tabBar = view.getTabBar(),
            tab;

        tab = view.add({
            reference: 'fullscreentab',
            layout: 'fit',
            title: 'Fullscreen'
        });

        view.setActiveTab(tab);

        tabBar.hide();

        tab.add({
            xtype: xtype,
            partConfig: partConfig
        });
    },

    onCloseFullScreen: function(){
        var me = this,
            view = me.getView(),
            tabBar = view.getTabBar(),
            tab = me.lookupReference('fullscreentab');

        tab.close();

        tabBar.show();
    }
});