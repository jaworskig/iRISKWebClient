Ext.define('iRISKClient.ux.TabReorderer', {
    extend: 'Ext.ux.BoxReorderer',
    alias: 'plugin.irisk-tabreorderer',

    itemSelector: '.' + Ext.baseCSSPrefix + 'tab',

    init: function(tabbar) {
        var me = this;

        me.callParent([tabbar]);
    },

    afterBoxReflow: function() {
        var me = this,
            curIndex = me.curIndex,
            draggedTab = me.dragCmp;

        // Cannot use callParent, this is not called in the scope of this plugin, but that of its Ext.dd.DD object
        Ext.ux.BoxReorderer.prototype.afterBoxReflow.apply(me, arguments);

        me.container.fireEvent('tabpositionchange', draggedTab, curIndex)
    }
});