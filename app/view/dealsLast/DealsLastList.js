Ext.define('iRISKClient.view.dealsLast.DealsLastList', {
    extend: 'Ext.grid.Panel',
    xtype: 'dealsLastList',

    requires: [
        'iRISKClient.view.dealsLast.DealsLastListModel',
        'iRISKClient.view.dealsLast.DealsLastListController',
        'Ext.grid.filters.Filters'
    ],

    controller: 'dealsLastListController',

    viewModel: {
        type: 'dealslast'
    },
    bind: '{dealslast}',


    selModel: {
        selType: 'checkboxmodel',
        listeners: {
            selectionchange: function (record) {

                var dock = record.view.ownerGrid.dockedItems.items[1];

                if (record.selected.length > 0) {
                    dock.setVisible(true);
                } else {

                    dock.setHidden(true);
                }
            }
        }

    },

    plugins: 'gridfilters',
    stripeRows: true,
    columnLines: false,
    header: false,
    viewConfig: {
        trackOver: false
    },

    columns: [{
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
        dataIndex: 'TraderName'
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
        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
            var me = this,
                color = Settings.getStatusCellColor(value);

            metaData.tdStyle = 'color:' + color;

            Ext.defer(function () {
                var cell = view.getCell(record, 0);
                cell.setStyle('background-color', color);
            }, 200);

            return value;
        }
    }],


    dockedItems: [{
        xtype: 'toolbar',
        hidden: true,
        items: [{
            text: 'EDIT',
            tooltip: 'Edit deals',
            handler: 'editClick'
        }]
    }]
});
