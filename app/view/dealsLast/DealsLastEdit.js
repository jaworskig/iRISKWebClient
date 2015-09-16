Ext.define('iRISKClient.view.dealsLast.DealsLastEdit', {
    extend: 'Ext.grid.Panel',
    xtype: 'dealsLastEdit',
    store: {
        type: 'dealsLastEditStore'
    },
    // sortableColumns: false,
    enableColumnHide: false,
    stripeRows: true,
    columnLines: false,
    header: false,
    viewConfig: {
        trackOver: false
    },

    columnsSelectData: null,
    changedValue: new Object(),

    requires: [
         'iRISKClient.view.dealsLast.DealsLastController'
    ],
    controller: 'dealsLastController',

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {});

        this.setChangedValue();

        Ext.Ajax.request({
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Deals/DealListData',
            success: function (response, opts) {
                me.columnsSelectData = Ext.decode(response.responseText);

            }
        });

        me.callParent(arguments);
    },

    setChangedValue: function() {
        this.changedValue.TraderName = null;
        this.changedValue.PorfolioName = null;
        this.changedValue.CounterpartName = null;
        this.changedValue.BrokerName = null;
        this.changedValue.Strategy = null;
        this.changedValue.Export = null;
        this.changedValue.Status = null;
    },


    listeners: {

        hide: function(me, eOpts) {
            me.setChangedValue();
        },

        afterrender: function (layout, eOpts) {

            //             debugger;
            var me = this;





            var menu = me.headerCt.getMenu();


            menu.on('beforeshow', function (itemMenu) {
                var currentDataIndex = menu.activeHeader.dataIndex;
                menu.removeAll();

          

                //debugger;
                var mainGrid = menu.ownerCmp.ownerCt.ownerCt;

                mainGrid.columnsSelectData[currentDataIndex].forEach(function (selectValue) {
                    menu.add({
                        text: selectValue.Value,
                        handler: function (ehItem) {
                            
                            mainGrid.getColumns().forEach(function (item) {
                                if (item.dataIndex == currentDataIndex) {
                                    item.setText(ehItem.text);
                                    item.setStyle("color", "rgb(13, 122, 255)");
                                    
                                    mainGrid.changedValue[currentDataIndex] = selectValue.Key
                                }
                            });
                        }
                    });
                });
            });
        }
    },

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'CANCEL',
            tooltip: 'Cancel edit deals',
            handler: 'cancelClick'
        }, '-', {
            text: 'SAVE',
            tooltip: 'Save deals',
            handler: 'saveClick'
        }, '-', {
            text: 'SAVE & UPDATE',
            tooltip: 'Save & updateddeals',
            handler: 'saveUpdateClick'
        }]
    }]

});

