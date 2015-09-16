Ext.define('iRISKClient.view.reports.FoldersTreeList', {
    extend: 'Ext.container.Container',
    xtype: 'reportsFoldersTreeList',
    controller: 'reportsTreeListController',
    requires: [
      'Ext.tree.*',
      'Ext.data.*',
      'Ext.layout.container.HBox',
      'iRISKClient.Application.GlobalSettings'
    ],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    //height: 300,
    //width: 450,

    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            items: [{
                reference: 'reportsFldrTreLst',
                xtype: 'treepanel',
                width: 240,
                store: new Ext.data.TreeStore({
                    proxy: {
                        type: 'ajax',
                        url: iRISKClient.Application.GlobalSettings.HostUrl + 'FavoriteExplorer/RepportsFolderData'
                    },
                    root: {
                        text: 'My Reports',
                        id: '0',
                        expanded: true
                    }

                }),
                listeners: {
                    itemclick: 'onFolderClick',
                    afterrender: function () {
                        var record = this.store.getNodeById('0');
                        this.getSelectionModel().select(record);

                    }
                }
            },
                {
                    reference: 'reportsTreeList',
                    xtype: 'reportsGroupGrid'
                }

            ]
        });

        this.callParent();
    }

    //listeners: {
    //    afterrender: function () {
    //        debugger;
    //        var record = this.store.getNodeById('0');
    //        this.getSelectionModel().select(record)
    //    }
    //}

});
