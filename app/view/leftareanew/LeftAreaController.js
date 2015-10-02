Ext.define('iRISKClient.view.leftareanew.LeftAreaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.leftareanew',
    mixins: [
        'iRISKClient.mixin.CachedTabs'
    ],

    init: function(view){
        this.initPlacheolderButtons();
    },

    onCollapseClick: function(){
        this.getView().collapse();
    },

    onExpand: function(panel){
        var tabbar = this.lookupReference('tabbar');
        tabbar.show();
    },

    initPlacheolderButtons: function(){
        var me = this,
            view = me.getView(),
            placeHolder = view.getPlaceholder('left'),
            handler = me.onLeftAreaBtnClick

        Ext.suspendLayouts();

        placeHolder.insert(1, {
            xtype: 'button',
            text: 'Portfolios',
            itemType: 'portfoliopanelnew',
            cls: 'btn-vertical-text btn-portfolio',
            handler: handler,
            scope: me
        });

        placeHolder.insert(1, {
            xtype: 'button',
            text: 'Counterparts',
            itemType: 'counterpartsExplorer',
            cls: 'btn-vertical-text btn-counterparts',
            handler: handler,
            scope: me
        });

        placeHolder.insert(1, {
            xtype: 'button',
            text: 'Curves',
            itemType: 'curvesFoldersTreeList',
            cls: 'btn-vertical-text btn-curves',
            handler: handler,
            scope: me
        });

        placeHolder.insert(1, {
            xtype: 'button',
            text: 'Reports',
            itemType: 'reportsFoldersTreeList',
            cls: 'btn-vertical-text btn-report',
            handler: handler,
            scope: me
        });

        Ext.resumeLayouts();
    },

    onLeftAreaBtnClick: function(btn, event){
        var me = this,
            view = me.getView(),
            tabbar = view.down('tabbar'),
            type = btn.itemType,
            tab = tabbar.down('tab[itemType=' + type + ']'),
            collapsed = view.getCollapsed();

        me.onItemChange(tabbar, tab);

        tabbar.hide();

        if(!collapsed){
            event.stopPropagation();
        }
    }
});