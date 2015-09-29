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
        'iRISKClient.store.DealsLastEdit',
        'iRISKClient.view.dealsLast.DealsLastEditController'
    ],
    controller: 'dealsLastEditController',

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {});

        this.setChangedValue();

        Ext.Ajax.request({
            url: Settings.HostUrl + 'Deals/DealListData',
            success: function (response, opts) {
                me.columnsSelectData = Ext.decode(response.responseText);

            }
        });

        me.callParent(arguments);
    },

    setChangedValue: function () {
        this.changedValue.TraderName = null;
        this.changedValue.PorfolioName = null;
        this.changedValue.CounterpartName = null;
        this.changedValue.BrokerName = null;
        this.changedValue.Strategy = null;
        this.changedValue.Export = null;
        this.changedValue.Status = null;
    },


    listeners: {

        hide: function (me, eOpts) {
            me.setChangedValue();
        },

        afterrender: 'afterrender'
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

