/**
 * @class iRISKClient.view.livereport.LiveReportController
 * @extend Ext.app.ViewController
 * Base view controller for live updates reports such as LivePrices and LivePositions
 */
Ext.define('iRISKClient.view.livereport.LiveReportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.livereport',

    oldValuesMap: {},

    feedUpdates: 0,

    loadStore: function(url){
        var me = this,
            store = this.getStore('livestore');

        store.load({
            url: url,
            callback: me.onStoreLoadSuccess,
            scope: me
        });
    },

    onStoreLoadSuccess: function(records){
        var products = records.map(function (item) {
            return item.get('Name');
        });

        HubService.SubscribeFeedArray(products, this);
    },

    showFeedStatus: function (status) {
        var me = this,
            view = me.getView(),
            cnt = view.ownerCt,
            title;

        if (cnt) {
            title = cnt.getTitle();
            cnt.setTitle(title.split(' (')[0] + ' (' + status + ')');
        }
    },

    colorByDiffRenderer: function(value, metaData, record, rowIndex, colIndex, store, view){
        var me = this,
            key = record.getId() + '-' + rowIndex + '-' + colIndex,
            oldValues = me.oldValuesMap,
            oldValue = oldValues[key],
            cell;

        if (value && oldValue) {
            metaData.tdCls = value < oldValue ? 'cell-value-negative-diff' : 'cell-value-positive-diff';
            if(value != oldValue){
                cell = view.getCell(record, colIndex);
                cell.highlight(value < oldValue ? '#FF0000' : '#00FF00', {duration: 2000, endColor: '#1b1b1b'});
            }
        }

        me.oldValuesMap[key] = value;

        return value;
    },

    colorBySignRenderer: function (value, metaData) {
        metaData.tdCls = value < 0 ? 'cell-value-negative-sign' : 'cell-value-positive-sign';
        return value;
    },

    productRenderer: function(value, metaData, record){
        var product = record.get('Name');
        return product.indexOf('|') < 0 ? 'Total' : product.split('|')[0];
    },

    timeRenderer: function (value, metaData, record) {
        if (value != null && value != 0) {
            var date = new Date(parseInt(value.substr(6)));
            if (Ext.Date.format(date, 'Y-m-d') == Ext.Date.format(new Date(), 'Y-m-d')) {
                return Ext.Date.format(date, 'H:i:s');
            }
            return '';
        }
        return value;
    },

    marketCloseRenderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
        var cls = 'cell-value-yesterday-close',
            field = this.columns[colIndex].dataIndex;

        if (record && record.previousValues && record.previousValues.hasOwnProperty(field)) {
            var prevValue = record.previousValues[field];
            if (prevValue) {
                cls = '';
            }
        }
        if (cls.length > 0) {
            metaData.tdCls = metaData.tdCls + ' ' + cls;
        }
        return value ? value.format(2, 3) : "";
    },

    priceRenderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
        var price = record.get('MarketPrice'),
            mtm = record.get('MTM'),
            lockedDeltaValue = record.get('LockedDeltaValue'),
            LSPrice = null;

        if (rowIndex > 0 && price && mtm && lockedDeltaValue) {
            // TODO Decide when deltavalue is too small
            if (Math.abs(lockedDeltaValue) > 0.000001 && price > 0) {
                LSPrice = price - (mtm / lockedDeltaValue);
            } else {
                LSPrice = 0;
            }
        }
        return !isUndefinedOrNull(LSPrice) ? LSPrice.format(2, 3) : LSPrice;
    }
});