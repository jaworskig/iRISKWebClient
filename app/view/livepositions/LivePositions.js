var productRenderer = function (value, metaData, record) {
    var product = record.get('Name');
    if (product.indexOf('|') < 0)
        return 'Total';
    else
        return product.split('|')[0];
};

var lsPriceRenderer = function (value, metaData, record, rowIndex, colIndex, store, view) {

    var price = record.get('MarketPrice');
    var mtm = record.get('MTM');
    var lockedDeltaValue = record.get('LockedDeltaValue');
    var LSPrice = null;

    if (rowIndex > 0 && price && mtm && lockedDeltaValue) {
        // TODO Decide when deltavalue is too small
        if (Math.abs(lockedDeltaValue) > 0.000001 && price > 0) {
            LSPrice = price - (mtm / lockedDeltaValue);
        } else {
            LSPrice = 0;
        }
    }
    return !isUndefinedOrNull(LSPrice) ? LSPrice.format(2, 3) : LSPrice;

};

var colorByDiffRenderer = function (value, metaData, record, rowIndex, colIndex, store, view) {

    if (blinkCellsOnUpdate) {
        var field = this.columns[colIndex].dataIndex;
        if (record && record.previousValues && record.previousValues.hasOwnProperty(field)) {
            var prevValue = record.previousValues[field];
            if (value && prevValue) {
                if (value < prevValue) {
                    metaData.tdCls = metaData.tdCls + ' cell-value-negative-diff';
                } else if (value > prevValue) {
                    metaData.tdCls = metaData.tdCls + ' cell-value-positive-diff';
                }
            }
        }
        return value ? value.format(2, 3) : "";
    }

    return value;
};

var colorBySignRenderer = function (value, metaData, record, rowIndex, colIndex, store, view) {
    if (blinkCellsOnUpdate) {
        if (value < 0)
            metaData.tdCls = metaData.tdCls + ' cell-value-negative-sign';
        else if (value > 0)
            metaData.tdCls = metaData.tdCls + ' cell-value-positive-sign';
        return !isUndefinedOrNull(value) ? value.format(2, 3) : value;
    }
    return value;
};

var marketCloseRenderer = function (value, metaData, record, rowIndex, colIndex, store, view) {
    var cls = 'cell-value-yesterday-close';
    var field = this.columns[colIndex].dataIndex;
    if (record && record.previousValues && record.previousValues.hasOwnProperty(field)) {
        var prevValue = record.previousValues[field];
        if (prevValue) {
            cls = '';
        }
    }
    if (cls.length > 0)
        metaData.tdCls = metaData.tdCls + ' ' + cls;
    return value ? value.format(2, 3) : "";
};

var timeRenderer = function (value) {
    var date = new Date(parseInt(value.substr(6)));
    if (Ext.Date.format(date, 'Y-m-d') == Ext.Date.format(new Date(), 'Y-m-d'))
        return Ext.Date.format(date, 'H:i:s');
    else
        return "";
};

var cellBlinkColor = iRISKClient.Application.GlobalSettings.CellBlinkColor;

var livePositionsFeedToDataIndex = {
    'product': 'Product',
    'marketprice': 'MarketPrice',
    'mtm': 'MTM',
    'delta': 'Delta',
    'open': 'Open',
    'high': 'High',
    'low': 'Low',
    'mtmclose': 'Close',
    'chg': 'Change',
    'chgpct': 'ChangePercent',
    'deltavalue': 'DeltaValue',
    'lsprice': 'LockedDeltaValue',
    'var': 'VaR',
    'wtd': 'Wtd',
    'mtd': 'Mtd',
    'qtd': 'Qtd',
    'ytd': 'Ytd'
};

//var feedUpdates = 0;

Ext.define('iRISKClient.view.livepositions.LivePositions', {
    extend: 'Ext.grid.Panel',
    xtype: 'livepositions',
    autoLoad: false,
    layout: 'fit',
    height: 400,
    groupName: null,
    feedUpdates: 0,
    feedProducts: [],
    viewConfig: {
        trackOver: false
    },
    columns: [
    { text: iRISKClient.LivePositions.Labels.Product, dataIndex: 'Product', hideable: false, width: 150, align: 'left', renderer: productRenderer },
        { text: iRISKClient.LivePositions.Labels.MarketPrice, dataIndex: 'MarketPrice', width: 'auto', align: 'right', renderer: colorByDiffRenderer },
        { text: iRISKClient.LivePositions.Labels.MTM, dataIndex: 'MTM', width: 'auto', align: 'right', renderer: colorByDiffRenderer },
        { text: iRISKClient.LivePositions.Labels.Delta, dataIndex: 'Delta', width: 'auto', align: 'right', renderer: colorByDiffRenderer },
        { text: iRISKClient.LivePositions.Labels.Open, dataIndex: 'Open', width: 'auto', align: 'right', renderer: colorByDiffRenderer },
        { text: iRISKClient.LivePositions.Labels.High, dataIndex: 'High', width: 'auto', align: 'right', renderer: colorByDiffRenderer },
        { text: iRISKClient.LivePositions.Labels.Low, dataIndex: 'Low', width: 'auto', align: 'right', renderer: colorByDiffRenderer },
        { text: iRISKClient.LivePositions.Labels.Close, dataIndex: 'Close', width: 'auto', align: 'right', renderer: marketCloseRenderer },
        { text: iRISKClient.LivePositions.Labels.Chg, dataIndex: 'Change', width: 'auto', align: 'right', renderer: colorBySignRenderer },
        { text: iRISKClient.LivePositions.Labels.ChgPct, dataIndex: 'ChangePercent', width: 'auto', align: 'right', renderer: colorBySignRenderer },
        { text: iRISKClient.LivePositions.Labels.DeltaValue, dataIndex: 'DeltaValue', width: 'auto', align: 'right', renderer: colorByDiffRenderer },
        { text: iRISKClient.LivePositions.Labels.LSPrice, dataIndex: 'LockedDeltaValue', width: 'auto', align: 'right', renderer: lsPriceRenderer },
        { text: iRISKClient.LivePositions.Labels.VaR, dataIndex: 'VaR', width: 'auto', align: 'right', renderer: colorByDiffRenderer },
        { text: iRISKClient.LivePositions.Labels.WTD, dataIndex: 'Wtd', width: 'auto', align: 'right', renderer: colorBySignRenderer },
        { text: iRISKClient.LivePositions.Labels.MTD, dataIndex: 'Mtd', width: 'auto', align: 'right', renderer: colorBySignRenderer },
        { text: iRISKClient.LivePositions.Labels.QTD, dataIndex: 'Qtd', width: 'auto', align: 'right', renderer: colorBySignRenderer },
        { text: iRISKClient.LivePositions.Labels.YTD, dataIndex: 'Ytd', width: 'auto', align: 'right', renderer: colorBySignRenderer }
    ],

    constructor: function (cfg) {

        var me = this;
        var returnData = null;

        var title = cfg.$initParent.title;
        me.groupName = title;
        cfg.$initParent.title = iRISKClient.LivePositions.Labels.LivePositionsTitle + ' - ' + me.groupName;

        me.store = new iRISKClient.store.LivePositionsStore();

        Ext.Ajax.request({
            //async: false,
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'AppsForOffice/PositionSnapshot?portfolio_name=' + me.groupName,
            success: function (response) {

                var resp = response.responseText;
                if (resp) {
                    returnData = Ext.JSON.decode(resp);
                    me.store.loadData([returnData.TotalValues].concat(returnData.Products));

                    me.feedProducts = me.store.data.items.map(function (item) {
                        return item.data.Name;
                    });

                    me.feedProducts[0] = "Total|" + me.feedProducts[0];

                    HubService.SubscribeFeedArray(me.feedProducts, me);
                }
            }
        });

        me.callParent();
    },

    showFeedStatus: function (status) {
        if (this.ownerCt) {
            var title = this.ownerCt.getTitle();
            this.ownerCt.setTitle(title.split(' (')[0] + ' (' + status + ')');
        }
    },


    handleLiveUpdateFeed: function (message) {

        var productName = message.ProductName;

        if (productName.indexOf('Total') > -1) {
            productName = productName.split('|')[1];
        }

        var record = this.store.findRecord('Name', productName);
       // debugger;
        if (record) {

            this.showFeedStatus((++this.feedUpdates).toString());
            var now = new Date();
            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

            // store.suspendAutoSync();
            for (var valIndex = 0; valIndex < message.Data.length; valIndex++) {
                var field = livePositionsFeedToDataIndex[message.Data[valIndex].Name.toLowerCase()];
                if (field) {
                    var value = message.Data[valIndex].Values[0];
                    var date = new Date(message.Data[valIndex].Dates[0]);
                    if (date >= today) {
                        record.set(field, value, {
                            dirty: false
                        });
                        if (field == 'Close')
                            record.set('CloseTimeStamp', '/Date(' + (new Date()).getTime().toString() + ')/');
                        if (blinkCellsOnUpdate) {
                            var view = this.getView();
                            var columns = view.getGridColumns();
                            var row = view.getRow(record);
                            if (columns && row) {
                                for (var columnIndex = 0; columnIndex < columns.length; columnIndex++) {
                                    if (columns[columnIndex].dataIndex == field) {
                                        var element = Ext.get(row.cells[columnIndex]);
                                        element.highlight(cellBlinkColor, { duration: 500, endColor: cellBlinkColor });
                                    }
                                }
                            }
                        }
                    }
                }
            }
            // store.commitChanges();
            // store.resumeAutoSync();
        }
    },

    getProducts: function () {
        var products = this.getStore().collect(0);
        return products;
    },

    listeners: {
        destroy: function (eOpts) {

            HubService.RemoveContext(this);
        }
    }
    //listeners: {
    //    afterrender: function (layout, eOpts) {
    //        var products = layout.store.data.items.map(function(item) {
    //            return item.data.Name;
    //        });
    //        for (var i = 0; i < products.length; i++) {
    //            HubService.Subscribe(products[i], this, this.handleLiveUpdateFeed);
    //        }
    //    }
    //}

});
