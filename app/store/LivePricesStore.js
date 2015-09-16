Ext.define('iRISKClient.store.LivePricesStore', {
    extend: 'Ext.data.Store',
    requires: [
        'iRISKClient.Application.GlobalSettings'
    ],

    alias: 'store.LivePriceDataStore',
    storeId: 'livePricesDataStore',
    model: 'iRISKClient.model.LivePricesModel'

    //proxy: {
    //    type: 'ajax',
    //    url: iRISKClient.Application.GlobalSettings.HostUrl + 'AppsForOffice/PriceSnapshot?query_type=product&query=ICE Brent',
    //    //  enablePaging: true,
    //    reader: {
    //        type: 'json',
    //        rootProperty: 'ProductInfos'
    //    },
    //    extraParams: {
    //        query_type: null,
    //        query: null
    //    }
    //},

    //onProxyLoad: function () {
    //    var me = this,
    //        isDesktop = Ext.os.is.MacOS || Ext.os.is.Windows || Ext.os.is.Linux;

    //    me.callParent(arguments);


    //    var count = me.getCount() - 1;

    //    setInterval(function () {
    //        var rec = me.getAt(Ext.Number.randomInt(0, count));
    //        rec.addPriceTick();
    //    },  50);
    //}

   // query_type:product
   // query:ICE Brent

});
