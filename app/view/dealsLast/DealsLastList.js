Ext.define('iRISKClient.view.dealsLast.DealsLastList', {
    extend: 'Ext.grid.Panel',
    xtype: 'dealsLastList',

    requires: [
        'Ext.grid.filters.Filters',
        'iRISKClient.view.dealsLast.DealsLastController'
    ],

    controller: 'dealsLastController',

    // selType: 'checkboxmodel',
    // height: 300,
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
        },


        renderer: function (value, meta, record, rowIndex, colIndex, store, view) {
            //debugger;
            //metaData.tdAttr = 'bgcolor="' + view.ownerGrid.getStatusCellColor(record.data.Status) + '"';
            //debugger;

           // meta.column.setStyle('background','red');

            return "<div style='background-color: " + iRISKClient.Application.GlobalSettings.getStatusCellColor(record.data.Status) + " ' class='x-grid-row-checker' role='button' tabindex='-1' data-tabindex-value='0' data-tabindex-counter='1'>&nbsp;</div>";
        }

      
 
    },

    store: {
        type: 'dealsLastListStore',
        autoLoad: true
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
        renderer: function (value, metaData) {
            //debugger;
            metaData.tdStyle = 'color:' + iRISKClient.Application.GlobalSettings.getStatusCellColor(value);
            return value;
        }
    }],

    handleDealUpdate: function (message) {
        // debugger;

        if (message.hasOwnProperty("Deals")) {
            // debugger;
            var deal = message.Deals[0];
            var store = this.getStore();

            var record = store.findRecord('DealId', deal.DealId);

            //store.suspendAutoSync();

            if (!record) {
                store.add(deal);
            } else {

                for (var k in deal)
                    if (record.get(k) != deal[k])
                        record.set(k, deal[k]);
            }

            var row = this.getView().getRow(record);
            var el = Ext.fly(row);
            //el.highlight("ffff9c", {
            //    attr: "background-color",
            //    easing: 'easeOut',
            //    duration: .5
            //});

            el.highlight("F4B084", { attr: 'backgroundColor', duration: 2000, easing: 'easeInOut' });

            // store.commitChanges();
            //  store.resumeAutoSync();
        }
    },

    getStatusCellColor1: function (status) {

        var nColor = "#FFFFFF";
        switch (status) {
            case "Pending":
                {
                    nColor = '#FF0000';
                    break;
                }
            case "Active":
                {
                    nColor = '#A9D08E';
                    break;
                }
            case "Approved":
                {
                    nColor = '#00B050';
                    break;
                }
            case "Deleted":
                {
                    nColor = '#BFBFBF';
                    break;
                }
        }

        return nColor;
    },

    listeners: {
        afterrender: function (c) {
            // debugger;
            HubService.SubscribeDealUpdate(this);
        }
    },

    dockedItems: [
    {
        xtype: 'toolbar',

        hidden: true,
        items: [{
            text: 'EDIT',
            tooltip: 'Edit deals',

            handler: 'editClick'
        }

        //, '-', {
        //    xtype: 'textfield'

        //},{
        //    reference: 'removeButton',  // The referenceHolder can access this button by this name
        //    text: 'Search'
        //}

        ]
    }]



});
