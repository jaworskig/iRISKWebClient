Ext.define('iRISKClient.view.portfolio.Deals', {
    extend: 'Ext.grid.Panel',
    xtype: 'portfolio_deals',

    requires: [
      'Ext.grid.filters.Filters',
      'Ext.toolbar.Paging'
    ],

    portfolioId: -1,

    //config: {
    //    portfolioId: -1
    //},

    //  store: {
    //    type: 'dealsPortfolio',
    //    autoLoad: true
    //  },
    sortableColumns: false,
    plugins: 'gridfilters',
    stripeRows: true,
    columnLines: true,
    height: 500,
    trackMouseOver: false,
    viewConfig: {
        trackOver: false
    },

    initComponent: function () {
        var me = this;
        var store = Ext.create('iRISKClient.store.dealsPortfolio');

        store.getProxy().setExtraParam('id', this.config.$initParent._partConfig.portfolioId);
        store.getProxy().setExtraParam('dateRange', 'D');

        Ext.apply(this, {
            store: store,

            columns: [
              {
                  text: 'DealId',
                  sortable: false,
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
                      metaData.tdStyle = 'color:' + iRISKClient.Application.GlobalSettings.getStatusCellColor(value);
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
                  sortable: false,
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
                  sortable: false,
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

            bbar: Ext.create('Ext.PagingToolbar', {
                store: store,
                displayInfo: false,
                displayMsg: 'Displaying deals {0} - {1} of {2}',
                emptyMsg: "No deals to display",
                //items: [
                //    {
                //        xtype: 'component',
                //        flex: 1,
                //    }, {
                //        xtype: 'segmentedbutton',
                //        items: [{
                //            text: 'D'
                //        }, {
                //            text: 'W'
                //        }, {
                //            text: 'M'
                //        }
                //        ]
                //    }
                //]


                items: [{
                    xtype: 'component',
                    flex: 1
                }, {
                    xtype: 'button',
                    text: 'D',
                    handler: me.setDateRange
                }, {
                    xtype: 'button',
                    text: 'W',
                    handler: me.setDateRange
                }, {
                    xtype: 'button',
                    text: 'M',
                    handler: me.setDateRange
                }, {
                    xtype: 'button',
                    text: '3M',
                    handler: me.setDateRange
                }, {
                    xtype: 'button',
                    text: '6M',
                    handler: me.setDateRange
                }, {
                    xtype: 'button',
                    text: 'YTD',
                    handler: me.setDateRange
                }, {
                    xtype: 'button',
                    text: '1Y',
                    handler: me.setDateRange
                }, {
                    xtype: 'button',
                    text: '2Y',
                    handler: me.setDateRange
                }, {
                    xtype: 'button',
                    text: 'X',
                    handler: me.setDateRange
                }]
            })


        });

        this.callParent();

    },

    setDateRange: function (item) {

        item.ownerCt.store.getProxy().setExtraParam('dateRange', item.text);
        item.ownerCt.store.reload();
    },


    handleDealUpdate: function (message) {
        // debugger;

        if (message.hasOwnProperty("Deals")) {
            //debugger;
            var deal = message.Deals[0];
            var store = this.getStore();

            var record = store.findRecord('DealId', deal.DealId);

            store.suspendAutoSync();

            if (!record) {
                store.add(deal);
            } else {

                for (var k in deal)
                    if (record.get(k) != deal[k])
                        record.set(k, deal[k]);
            }

            store.commitChanges();
            store.resumeAutoSync();
        }
    },


    listeners: {
        afterrender: function (layout, eOpts) {
            //HubService.SubscribeDealUpdate(this);


            //var tollbar = layout.dockedItems.items[1];
            //tollbar.items.add(Ext.create('Ext.Button', {
            //    text: 'Click me', 
            //    handler: function () {
            //        alert('You clicked the button!');
            //    }
            //}));

        },
        itemcontextmenu: function (view, list, node, rowIndex, e) {

            var me = this;

            var menu = new Ext.menu.Menu({
                items: [{
                    text: 'Deal Editor',
                    handler: function () { }
                }, {
                    text: 'Export to Excel',
                    handler: function (item1, item2, item3) {

                        var data = me.store.data.getRange();
                        var dataJson = Ext.Array.pluck(data, "data");

                        $.ajax({
                            type: "POST",
                            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Portfolio/DealListExport',
                            cache: false,
                            data: JSON.stringify(dataJson),
                            success: function (retData) {
                                var binUrl = retData;
                                document.body.innerHTML += "<iframe src='" + binUrl + "' style='display: none;' ></iframe>";
                            }

                        });

                    }
                }]
            }).showAt(e.getX(), e.getY());


            e.preventDefault();
        }



    }

});


//Ext.define('iRISKClient.view.portfolio.Deals', {
//    extend: 'Ext.Component',
//    xtype: 'time_range',
//    items: [
//        {
//            xtype: 'button',
//            text: 'My Button'
//        }
//    ]
//});