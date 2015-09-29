Ext.define('iRISKClient.view.curves.FoldersTreeList', {
    extend: 'Ext.container.Container',
    xtype: 'curvesFoldersTreeList',
    controller: 'foldersTreeListController',
    requires: [
      'Ext.tree.*',
      'Ext.data.*',
      'Ext.layout.container.VBox',
      'Ext.layout.container.HBox',
      'iRISKClient.util.GlobalSettings',
      'iRISKClient.view.curves.FoldersTreeListController',
      'iRISKClient.store.CurveFoldersTree'
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    //height: 300,
    //width: 450,

    config: { curveTreeType: "Favorites", curveTreeRoot: "My Curves"},

    initComponent: function () {

        Ext.apply(this, {
            items: [{
                xtype: 'container',
                layout: 'hbox',
                align: 'stretch',
                items: [{
                    reference: 'curveSearchText',
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: '<Search>',
                    enableKeyEvents: true,
                    listeners: {
                        keypress: function(e, eOpts) {
                            if (eOpts.keyCode == 13)
                                this.ownerCt.ownerCt.controller.onSearch();
                        }
                    }
                },
                {
                    reference: 'curveSearchButton',
                    xtype: 'button',
                    iconCls: 'icon-search',
                    listeners: {
                        click: 'onSearch'
                    }
                }]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                align: 'stretch',
                flex: 1,
                items: [{
                    reference: 'curveFldrTreLst',
                    xtype: 'treepanel',
                    width: 240,
                    height: '100%',
                    rootVisible: this.getCurveTreeType() == "Favorites",
                    store: new Ext.data.TreeStore({
                        proxy: {
                            type: 'ajax',
                            url: Settings.HostUrl + (
                                this.getCurveTreeType() == "Favorites"
                                ? 'FavoriteExplorer/CurvesFolderData'
                                : 'PortfolioExplorer/PortfolioTreeData?root=' + this.getCurveTreeRoot()
                            )
                        },
                        root: {
                            text: this.getCurveTreeRoot(),
                            id: '1',
                            expanded: true
                        }
                    }),
                    listeners: {
                        itemclick: 'onitemclick'
                    }
                },
                {
                    reference: 'curveTreeList',
                    xtype: 'grouped-grid',
                    flex: 1,
                    height: '100%'
                }]
            }]
        });
        this.callParent();
    },

    changeRoot: function (root) {
        var store = this.getReferences().curveFldrTreLst.store;
        store.getProxy().setUrl(Settings.HostUrl + 'PortfolioExplorer/PortfolioTreeData?root=' + root);
        store.load({scope: this, callback: function(records, operation, success) {
            //if (success)
                //this.items.items[0].updateSnapshotData(this.items.items[0], root);
        }});
    }
});
