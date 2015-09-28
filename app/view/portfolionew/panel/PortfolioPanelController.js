Ext.define('iRISKClient.view.portfolionew.panel.PortfolioPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.portfoliopanelnew',

    cachedTabs: {},

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
    },

    onItemChange: function(tabbar, tab){
        var me = this,
            view = me.getView(),
            layout = view.getLayout(),
            activeTab = layout.getActiveItem(),
            type = tab.itemType,
            cache = me.cachedTabs,
            newTab = cache[type],
            cachedTab, cachedType;

        Ext.suspendLayouts();

        if(!newTab){
            newTab = Ext.widget(type);
        }

        cachedTab = view.remove(activeTab, false);
        cachedType = cachedTab.getXType();

        view.setActiveItem(newTab);

        me.cachedTabs[cachedType] = cachedTab;

        Ext.resumeLayouts();
    }
});
