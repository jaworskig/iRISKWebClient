Ext.define('LivePriceCellWidget', {
    extend: 'Ext.Widget',
    alias: 'widget.livepricewidget',

    // The element template passed to Ext.Element.create()
    element: {
        reference: 'element',

        children: [{
            reference: 'innerElement'
        }]
    },

    defaultBindProperty: 'value',

    config: {
        /**
         * @cfg {String} [text]
         * The background text
         */
        text: null,

        /**
         * @cfg {Number} [value=0]
         * A floating point value between 0 and 1 (e.g., .5)
         */
        value: 0
    },

    renderColorMethod: null,
    valueRenderMethod: null,

    applyValue: function (value) {
        return value || 0;
    },
    updateValue: function (value, prevValue) {
        var me = this;
        var el = this.element;
        //if (value != null && value != 0)
        //     debugger;

        if (me.renderColorMethod)
            el = me.renderColorMethod(el, value, prevValue);

        if (me.valueRenderMethod)
            value = me.valueRenderMethod(value);

        var par = el.getParent();
        if (par && par.highlight)
            par.highlight(cellBlinkColor, { duration: 500, endColor: cellBlinkColor });

        me.setText(value);
    },

    updateText: function (text) {
        this.innerElement.setHtml(text)
    }
});


var colorByDiffRenderer = function (el, value, prevValue) {

    if (value && prevValue) {
        if (value < prevValue) {
            el.addCls('cell-value-negative-diff');
        } else if (value > prevValue) {
            el.addCls('cell-value-positive-diff');
        }
    }

    return el;
};

var colorByDiffRenderer_old = function (value, metaData, record, rowIndex, colIndex, store, view) {

    if (blinkCellsOnUpdate) {
        var field = this.columns[colIndex].dataIndex;
        var field2 = record.fields[colIndex].dataIndex;
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
        return !isUndefinedOrNull(value) ? value.format(2, 3) : value;
    }

    return value;
};

var colorBySignRenderer = function (el, value, prevValue) {

    if (value < 0)
        el.addCls('cell-value-negative-sign');
    else if (value > 0)
        el.addCls('cell-value-positive-sign');

    return el;
};

var colorBySignRenderer_old = function (value, metaData) {
    if (value < 0)
        metaData.tdCls = metaData.tdCls + ' cell-value-negative-sign';
    else if (value > 0)
        metaData.tdCls = metaData.tdCls + ' cell-value-positive-sign';
    return !isUndefinedOrNull(value) ? value.format(2, 3) : value;
};

var marketCloseRenderer = function (value, metaData, record) {
    var date = new Date(parseInt(record.get('CloseTimeStamp').substr(6)));
    if (Ext.Date.format(date, 'Y-m-d') != Ext.Date.format(new Date(), 'Y-m-d'))
        metaData.tdCls = metaData.tdCls + ' cell-value-yesterday-close';
    return !isUndefinedOrNull(value) ? value.format(2, 3) : value;
};


var timeRenderer = function (value) {
    if (value != null && value != 0) {
        var date = new Date(parseInt(value.substr(6)));
        if (Ext.Date.format(date, 'Y-m-d') == Ext.Date.format(new Date(), 'Y-m-d'))
            return Ext.Date.format(date, 'H:i:s');
        else
            return "";
    }
    return value;
};

var cellBlinkColor = iRISKClient.Application.GlobalSettings.CellBlinkColor;

var livePricesFeedToDataIndex = {
    productname: 'Name',
    bidsize: 'BidSize',
    bid: 'Bid',
    ask: 'Ask',
    asksize: 'AskSize',
    last: 'Last',
    chg: 'Change',
    chgpct: 'ChangePct',
    lastvolume: 'PrevVolume',
    ppen: 'Open',
    high: 'High',
    low: 'Low',
    marketclose: 'Close',
    volume: 'Volume',
    lasttimestamp: 'LastTimeStamp',
    closetimestamp: 'CloseTimeStamp'
};

//var feedUpdates = 0;

Ext.define('iRISKClient.view.liveprices.LivePrices', {
    extend: 'Ext.grid.Panel',
    xtype: 'liveprices',
    //controller: 'livePricesController',
    //autoLoad: true,
    layout: 'fit',
    //mixins: ['Ext.util.Observable'],
    //requires: [
    //'iRISKClient.view.liveprices.LivePricesController'
    //],

    //throttledUpdate: true,
    //updateDelay: 100000,


    feedProducts: [],
    feedUpdates: 0,
    viewConfig: {
        trackOver: false
    },
    height: 400,
    columns: [
        { text: iRISKClient.LivePrices.Labels.Product, dataIndex: 'Name', hideable: false, width: 150, align: 'left' },//, locked: true },
        { text: iRISKClient.LivePrices.Labels.BidSize, dataIndex: 'BidSize', align: 'right', menuDisabled: true, sortable: false },
        {
            text: iRISKClient.LivePrices.Labels.Bid, dataIndex: 'Bid', align: 'right', menuDisabled: true, sortable: false,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorByDiffRenderer
            }
        },
        {
            text: iRISKClient.LivePrices.Labels.Ask, dataIndex: 'Ask', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorByDiffRenderer
            }
        },
        {
            text: iRISKClient.LivePrices.Labels.AskSize, dataIndex: 'AskSize', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorByDiffRenderer
            }
        },
        {
            text: iRISKClient.LivePrices.Labels.Last, dataIndex: 'Last', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorByDiffRenderer
            }
        },
        {
            text: iRISKClient.LivePrices.Labels.Chg, dataIndex: 'Change', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorBySignRenderer
            }
        },
        {
            text: iRISKClient.LivePrices.Labels.ChgPct, dataIndex: 'ChangePct', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorBySignRenderer
            }
        },
        {
            text: iRISKClient.LivePrices.Labels.LastVolume, dataIndex: 'PrevVolume', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorByDiffRenderer
            }
        },
        {
            text: iRISKClient.LivePrices.Labels.Open, dataIndex: 'Open', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorByDiffRenderer
            }
        },
        {
            text: iRISKClient.LivePrices.Labels.High, dataIndex: 'High', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorByDiffRenderer
            }
        },
        {
            text: iRISKClient.LivePrices.Labels.Low, dataIndex: 'Low', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorByDiffRenderer
            }
        },
        { text: iRISKClient.LivePrices.Labels.MarketClose, dataIndex: 'Close', align: 'right', menuDisabled: true, sortable: false },
        {
            text: iRISKClient.LivePrices.Labels.Volume, dataIndex: 'Volume', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                renderColorMethod: colorByDiffRenderer
            }
        },
        {
            text: iRISKClient.LivePrices.Labels.LastTimeStamp, dataIndex: 'LastTimeStamp', align: 'right', menuDisabled: true, sortable: false, xtype: 'widgetcolumn',
            widget: {
                xtype: 'livepricewidget',
                valueRenderMethod: timeRenderer
            }
        },
        { text: iRISKClient.LivePrices.Labels.CloseTimeStamp, dataIndex: 'CloseTimeStamp', align: 'right', menuDisabled: true, sortable: false, renderer: timeRenderer }
    ],

    //storeId: 'livePricesDataStore',
    //store: {
    //    type: 'LivePriceDataStore', 
    //    autoLoad: true,
    //    autoDestroy: true
    //},




    constructor: function (cfg) {
        var me = this;
        var title = cfg.$initParent.title;
        var queryType = title.split(':')[0];
        var query = title.split(':')[1];
        cfg.$initParent.title = iRISKClient.LivePrices.Labels.LivePricesTitle + ' - ' + query;

        me.store = new iRISKClient.store.LivePricesStore();

        Ext.Ajax.request({
            //async: false,
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'AppsForOffice/PriceSnapshot?query_type=' + queryType + '&query=' + query,
            success: function (response) {
                //debugger;
                var resp = response.responseText;
                if (resp) {
                    returnData = Ext.JSON.decode(resp);

                    me.store.loadData(returnData.ProductInfos);

                    me.feedProducts = me.store.data.items.map(function (item) {
                        return item.data.Name;
                    });

                    HubService.SubscribeFeedArray(me.feedProducts, me);
                }

            }
        });

        me.callParent();
    },


    generator: function (me) {
        console.log("genratae feed");

        var products = me.store.data.items.map(function (item) {
            return item.data.Name;
        });


        for (var i = 0; i < 5; i++) {

            var newFeed = {
                ProductName: products[Ext.Number.randomInt(0, products.length - 1)],
                Data: [
                {
                    Name: "Bid",
                    Dates: ["2015-12-15T00:00:00"],
                    Values: [Ext.Number.randomInt(0, 99)]
                },
                    {
                        Name: "Ask",
                        Dates: ["2015-12-15T00:00:00"],
                        Values: [Ext.Number.randomInt(0, 99)]
                    },
                    {
                        Name: "Last",
                        Dates: ["2015-12-15T00:00:00"],
                        Values: [Ext.Number.randomInt(0, 99)]
                    },
                    {
                        Name: "Open",
                        Dates: ["2015-12-15T00:00:00"],
                        Values: [Ext.Number.randomInt(0, 99)]
                    },
                    {
                        Name: "High",
                        Dates: ["2015-12-15T00:00:00"],
                        Values: [Ext.Number.randomInt(0, 99)]
                    }

                ]
            };

            me.handleLiveUpdateFeed(newFeed);
        }

    },

    showFeedStatus: function (status) {
        if (this.ownerCt) {
            var title = this.ownerCt.getTitle();
            this.ownerCt.setTitle(title.split(' (')[0] + ' (' + status + ')');
        }
    },


    handleLiveUpdateFeed: function (message) {

        var productName = message.ProductName;
        var record = this.store.findRecord('Name', productName);

        if (record) {
            this.showFeedStatus((++this.feedUpdates).toString());

            var now = new Date();
            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

            for (var valIndex = 0; valIndex < message.Data.length; valIndex++) {
                var field = livePricesFeedToDataIndex[message.Data[valIndex].Name.toLowerCase()];
                if (field) {
                    var value = message.Data[valIndex].Values[0];
                    var date = new Date(message.Data[valIndex].Dates[0]);
                    if (date >= today) {
                        record.set(field, value, {
                            dirty: false
                        });

                        if (field == 'Last')
                            record.set('LastTimeStamp', '/Date(' + (new Date()).getTime().toString() + ')/');
                        else if (field == 'Close')
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


        }

    },

    getProducts: function () {
        var products = this.getStore().collect(0);
        return products;
    },

    listeners: {

        destroy: function (eOpts) {
            HubService.RemoveContext(this);
        },

        columnschanged: function() {
            iRISKClient.view.main.MainController.storeLayoutBuffred();
        },

        columnresize: function() {
            iRISKClient.view.main.MainController.storeLayoutBuffred();
        },
        

        celldblclick: function (item, td, cellIndex, record, tr, rowIndex, e, eOpts) {
            if (cellIndex == 0) {
                var dashboard = iRISKClient.view.main.MainController.getActiveDashboard();
                var columnIndex = (dashboard.columnWidths != undefined) ? dashboard.columnWidths.length : 0;

                dashboard.addView({
                    type: 'chart',
                    title: record.id
                }, columnIndex);
            }

        }
    }

});

/*Ext.onReady(function() {
    $.connection.hub.url = iRISKClient.Application.GlobalSettings.HostUrl + 'SignalR/Hubs';
    var liveUpdateFeed = $.connection.liveUpdateFeedHub;
    liveUpdateFeed = $.connection.liveUpdateFeedHub;

    var showConnectionStatus = function(status) {
        Ext.getCmp('feed-status-text').setData(status);
        var panelsArray = Ext.ComponentQuery.query('liveprices');
        for (var i = 0; i < panelsArray.length; i ++) {
            panelsArray[i].showFeedStatus(status);
        }
    };
    
    var showHeartbeatStatus = function(status) {
        Ext.getCmp('feed-status-text').setData(status);
        var panelsArray = Ext.ComponentQuery.query('liveprices');
        for (var i = 0; i < panelsArray.length; i ++) {
            panelsArray[i].showFeedStatus(status);
        }
    };
    
    var handleBroadcast = function(message) {
        var panelsArray = Ext.ComponentQuery.query('liveprices');
        for (var i = 0; i < panelsArray.length; i ++) {
            panelsArray[i].handleLiveUpdateFeed(message);
        }
        var portfolioPanelsArray = Ext.ComponentQuery.query('portfoliosTreeList');
        for (var i = 0; i < portfolioPanelsArray.length; i ++) {
            if (message.ProductName == 'ENOYR-16')
                portfolioPanelsArray[i].handleLiveUpdateFeed({GroupName: 'Valuta', MTM: -50000 + (Math.round(100000000 * Math.random()) / 100), Change: -500 + (Math.round(100000 * Math.random()) / 100)});
            else if (message.ProductName == 'ENOYR-20')
                portfolioPanelsArray[i].handleLiveUpdateFeed({GroupName: 'Rema', MTM: -50000 + (Math.round(100000000 * Math.random()) / 100), Change: -500 + (Math.round(100000 * Math.random()) / 100)});
        }
    };

    liveUpdateFeed.client.heartbeat = function (data) {
        //showHeartbeatStatus(data);
        var message = { ProductName: 'ENOYR-' + data.substr(6, 2), Data: [
            { Name: 'Last', Values: [ 35 + (Math.round(1000 * Math.random()) / 100) ], Dates: [ new Date() ] },
            { Name: 'Change', Values: [ -5 + (Math.round(1000 * Math.random()) / 100) ], Dates: [ new Date() ] },
            { Name: 'Close', Values: [ 35 + (Math.round(1000 * Math.random()) / 100) ], Dates: [ new Date() ] },
            { Name: 'CloseTimeStamp', Values: [ '/Date(' + (new Date()).getTime() + ')' ], Dates: [ new Date() ] } 
        ]};
        handleBroadcast(message);
    };

    liveUpdateFeed.client.broadcast = function (data) {
        handleBroadcast(JSON.parse(data));
    };

    $.connection.hub.stateChanged(function (change) {
        var newState = "unknown";
        if (change.newState == $.signalR.connectionState.connected) newState = "connected";
        else if (change.newState == $.signalR.connectionState.connecting) newState = "connecting...";
        else if (change.newState == $.signalR.connectionState.disconnected) newState = "disconnected";
        else if (change.newState == $.signalR.connectionState.reconnecting) newState = "reconnecting...";
        showConnectionStatus(newState);
        if (change.newState == $.signalR.connectionState.connected)
            setTimeout(function () { liveUpdateFeed.server.subscribe('subscription'); }, 2000); // Resubscribe after 2 seconds.
    });

    $.connection.hub.disconnected(function () {
        setTimeout(function () { $.connection.hub.start(); }, 5000); // Restart connection after 5 seconds.
    });

    $.connection.hub.start().done(function () {
        liveUpdateFeed.server.subscribe('subscription');
    });        
});*/
