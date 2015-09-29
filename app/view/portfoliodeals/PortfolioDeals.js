Ext.define('iRISKClient.view.portfoliodeals.ProtfolioDeals', {
    extend: 'Ext.grid.Panel',
    xtype: 'portfolio_deals',

    requires: [
      'iRISKClient.view.portfoliodeals.ProtfolioDealsController',
      'iRISKClient.view.portfoliodeals.ProtfolioDealsModel',
      'Ext.grid.filters.Filters'
    ],
    controller: 'portfoliodeals',
    viewModel: {
        type: 'portfoliodeals'
    },
    bind: '{portfoliodeals}',

    portfolioId: -1,
    sortableColumns: true,
    plugins: 'gridfilters',
    stripeRows: true,
    columnLines: true,
    height: 500,
    trackMouseOver: false,
    viewConfig: {
        trackOver: false
    },

    listeners: {
        itemcontextmenu: 'itemcontextmenu'
    },

    columns: [{
        xtype: 'rownumberer',
        width: 50,
        sortable: false
    }, {
        text: 'DealId',
        sortable: true,
        dataIndex: 'DealId'
    }, {
        text: 'ContractNr',
        //     flex: 1,
        sortable: false,
        dataIndex: 'ContractNr'
    }, {
        text: 'TradeDate',
        //     flex: 1,
        sortable: false,
        dataIndex: 'TradeDate'
    }, {
        text: 'Trader',
        //     flex: 1,
        sortable: true,
        dataIndex: 'Trader'
        // filter: 'list'
    }, {
        text: 'Porfolio',
        //    flex: 1,
        sortable: false,
        dataIndex: 'Porfolio',
        filter: 'list'
    }, {
        text: 'Counterpart',
        //   flex: 1,
        sortable: false,
        dataIndex: 'Counterpart',
        filter: 'list'
    }, {
        text: 'Broker',
        //    flex: 1,
        sortable: false,
        dataIndex: 'Broker',
        filter: 'list'
    }, {
        text: 'Status',
        //     flex: 1,
        // width: 175,
        sortable: false,
        dataIndex: 'Status',
        renderer: function (value, metaData) {
            //debugger;
            metaData.tdStyle = 'color:' + Settings.getStatusCellColor(value);
            return value;
        }
        //  filter: 'list'
    }, {
        text: 'InstrumentType',
        //        flex: 1,
        sortable: false,
        dataIndex: 'InstrumentType'
    }, {
        text: 'Product',
        //    flex: 1,
        sortable: true,
        dataIndex: 'Product',
        filter: 'list'
    }, {
        text: 'Reference',
        //      flex: 1,
        dataIndex: 'Reference',
        filter: 'list'
    }, {
        text: 'From',
        //     flex: 1,
        dataIndex: 'From'
    }, {
        text: 'To',
        //   flex: 1,
        dataIndex: 'To'
    }, {
        text: 'Currency',
        //   flex: 1,
        dataIndex: 'Currency'
    }, {
        text: 'Price',
        //  flex: 1,
        // width: 75,
        dataIndex: 'Price',
        align: 'right'
    }, {
        text: 'Quantity',
        //   flex: 1,
        // sortable: true,
        dataIndex: 'Quantity'
    }, {
        text: 'MTM',
        //  flex: 1,
        dataIndex: 'MTM',
        align: 'right'
    }, {
        text: 'BuySell',
        //  flex: 1,
        dataIndex: 'BuySell'
    }, {
        text: 'BrokerFee',
        //    flex: 1,
        dataIndex: 'BrokerFee',
        align: 'right'
    }, {
        text: 'ClearingFee',
        //   flex: 1,
        dataIndex: 'ClearingFee',
        align: 'right'
    }, {
        text: 'Fee',
        //   flex: 1,
        dataIndex: 'Fee',
        align: 'right'
    }, {
        text: 'Strategy',
        //    flex: 1,
        dataIndex: 'Strategy'
    }, {
        text: 'DealValue',
        //  flex: 1,
        dataIndex: 'DealValue',
        align: 'right'
    }, {
        text: 'DeltaValue',
        //   flex: 1,
        dataIndex: 'DeltaValue',
        align: 'right'
    }, {
        text: 'MarketPrice',
        //flex: 1,
        dataIndex: 'MarketPrice',
        align: 'right'
    }
    ],

    bbar: {
        items: [{
            xtype: 'component',
            flex: 1
        }, {
            xtype: 'button',
            text: 'D',
            handler: 'setDateRange'
        }, {
            xtype: 'button',
            text: 'W',
            handler: 'setDateRange'
        }, {
            xtype: 'button',
            text: 'M',
            handler: 'setDateRange'
        }, {
            xtype: 'button',
            text: '3M',
            handler: 'setDateRange'
        }, {
            xtype: 'button',
            text: '6M',
            handler: 'setDateRange'
        }, {
            xtype: 'button',
            text: 'YTD',
            handler: 'setDateRange'
        }, {
            xtype: 'button',
            text: '1Y',
            handler: 'setDateRange'
        }, {
            xtype: 'button',
            text: '2Y',
            handler: 'setDateRange'
        }, {
            xtype: 'button',
            text: 'X',
            handler: 'setDateRange'
        }]
    }
});