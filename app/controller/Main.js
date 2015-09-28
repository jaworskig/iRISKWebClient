Ext.define('iRISKClient.controller.Main', {
    extend: 'Ext.app.Controller',
    listen: {
        global: {
            adddashboardview: 'onAddDashboardView'
        }
    },
    refs: [
        {
            ref: 'mainArea',
            selector: 'app-main #mainArea'
        }
    ],

    onAddDashboardView: function(config, checkPosition){
        var me = this,
            tab = me.getActiveTab(),
            columnIndex;

        if(!checkPosition){
            tab.addView(config);
        }
        else {
            columnIndex = (tab.columnWidths != undefined) ? tab.columnWidths.length : 0;
            tab.addView(config, columnIndex);
        }
    },
    getActiveTab: function(){
        var me = this,
            mainArea = me.getMainArea(),
            workspace = mainArea.getActiveTab(),
            mainPanel = workspace.lookupReference('centerPanel');

        return mainPanel.getActiveTab();
    }
});
