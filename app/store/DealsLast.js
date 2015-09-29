Ext.define('iRISKClient.store.DealsLastList', {
    extend: 'Ext.data.Store',
    alias: 'store.dealsLastListStore',
    storeId: 'dealsLastListStore',
    model: 'iRISKClient.model.Deal',

    proxy: {
        type: 'ajax',
        url: Settings.HostUrl + 'Deals/TestDealListInitData',
        reader: {
            type: 'json',
            rootProperty: 'Deals'
        }
    },


    sorters: [
        {
            property: 'TradeDateFormated',
            direction: 'DESC'
        }
    
    ]

});


Ext.define('iRISKClient.store.DealsLastEdit', {
    extend: 'Ext.data.Store',
    alias: 'store.dealsLastEditStore',
    storeId: 'dealsLastEditStore',
    model: 'iRISKClient.model.Deal',


    getDealColumns: function () {

        var obj =
        [
            {
                text: 'ContractNumber',
                flex: 1,
                dataIndex: 'ContractNumber',
                minWidth: 150
            }, {
                text: 'TradeDate',
                dataIndex: 'TradeDateFormated',

                renderer: Ext.util.Format.dateRenderer('d-m-Y')
            }, {
                text: 'Trader',
                dataIndex: 'TraderName',
                cls: 'whiteHead'
            }, {
                text: 'Product',
                flex: 1,
                dataIndex: 'ProductName',
                minWidth: 150
            }, {
                text: 'Price',
                dataIndex: 'Price',
                width: 80,
                align: 'right'
            }, {
                text: 'Qty',
                width: 80,
                dataIndex: 'Quantity',
                align: 'right'
            }, {
                text: 'Porfolio',
                dataIndex: 'PorfolioName',
                minWidth: 150
            }, {
                text: 'Counterpart',
                flex: 1,
                dataIndex: 'CounterpartName',
                minWidth: 150
            }, {
                text: 'Broker',
                dataIndex: 'BrokerName'
            }, {
                text: 'Strategy',
                dataIndex: 'Strategy'
            }, {
                text: 'Export',
                dataIndex: 'Export'
            }, {
                text: 'Status',
                dataIndex: 'Status',
                renderer: function(value, metaData) {
                    metaData.tdStyle = 'color:' + Settings.getStatusCellColor(value);
                    return value;
                }
            }
        ];


        return obj;
    }
});
