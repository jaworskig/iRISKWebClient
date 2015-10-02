Ext.define('iRISKClient.mixin.CachedTabs', {
    extend: 'Ext.Mixin',
    mixinConfig: {
        id: 'cachedtabs',
        after: {
            destroy: 'destroy'
        }
    },

    cachedTabs: {},

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

        view.setActiveItem(newTab);

        cachedTab = view.remove(activeTab, false);
        cachedType = cachedTab.getXType();

        me.cachedTabs[cachedType] = cachedTab;

        Ext.resumeLayouts();
    },

    destroy: function(){
        var me = this,
            cache = me.cachedTabs;

        for(var tab in cache){
            tab.destroy(true);
        }
    }
});