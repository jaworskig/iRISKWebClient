Ext.define('iRISKClient.column.LivePrice', {
    extend: 'Ext.grid.column.Column',
    alias: ['widget.livepricecolumn'],
    requires: ['Ext.Date'],

    producesHTML: false,

    renderMethod: 'colorByDiffRenderer',

    oldValue: null,

    updater: function(cell, value) {
        var el = Ext.get(cell);

        el.down(this.getView().innerSelector, true).innerHTML = this[this.renderMethod](cell, value);
        el.highlight('#00FF00', {duration: 500, endColor: '#FF0000'});

    },

    colorByDiffRenderer: function(cell, value){
        var me = this,
            oldValue = me.oldValue,
            el = Ext.fly(cell);

        if (value && oldValue) {
            if (value < oldValue) {
                el.addCls('cell-value-negative-diff');
            } else if (value > oldValue) {
                el.addCls('cell-value-positive-diff');
            }
        }

        return value;
    },

    colorBySignRenderer: function (cell, value) {
        Ext.fly(cell).addCls(value < 0 ? 'cell-value-negative-sign' : 'cell-value-positive-sign');
        return value;
    }
});