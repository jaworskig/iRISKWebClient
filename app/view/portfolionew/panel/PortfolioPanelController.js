Ext.define('iRISKClient.view.portfolionew.panel.PortfolioPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.portfoliopanelnew',
    mixins: [
        'iRISKClient.mixin.CachedTabs'
    ],

    init: function(view){
        var me = this,
            viewModel = me.getViewModel(),
            root = viewModel.get('currentRoot'),
            tabbar = view.down('tabbar'),
            menu = me.getMenu();

        tabbar.insert(0,{
            xtype: 'button',
            arrowCls: '',
            menu: menu
        });

        me.fireEvent('portfoliorootchange', root);
    },

    getMenu: function(){
        var me = this,
            viewModel = me.getViewModel(),
            roots = viewModel.get('roots'),
            length = roots.length,
            menu = [],
            i = 0;

        for(; i < length; i++){
            menu.push({
                xtype: 'menuitem',
                text: roots[i],
                handler: me.onMenuItemClick,
                scope: me
            });
        }

        return menu;
    },

    onMenuItemClick: function(btn){
        var root = btn.text;
        this.fireEvent('portfoliorootchange', root);
    }
});
