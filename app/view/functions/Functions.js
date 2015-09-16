Ext.define('iRISKClient.view.functions.Functions', {
    extend: 'Ext.form.Panel',
    xtype: 'functions',
    title: "Functions",
    layout: 'border',
    region: 'east',
    width: 200,
    split: {
        size: 5
    },
    collapsible: true,
    collapsed: false,
    layout: 'fit',
    requires: [
      'Ext.tree.*',
      'Ext.data.*',
      'Ext.layout.container.HBox',
      'iRISKClient.Application.GlobalSettings'
    ],

    initComponent: function () {
        Ext.apply(this, {
            items: [{
                reference: 'functionTreeList',
                xtype: 'treepanel',
                width: 300,
                height: '100%',
                store: new Ext.data.TreeStore({
                    proxy: {
                        type: 'ajax',
                        url: iRISKClient.Application.GlobalSettings.HostUrl + 'Formula/FunctionListData'
                    }
                }),
                rootVisible: false,
                viewConfig: {
                    plugins: {
                        ptype: 'treeviewdragdrop',
                        ddGroup: 'formulaEditorDragAndDrop',
                        enableDrop: false
                    }
                }
            }]
        }); 
        this.callParent();
    }

});
