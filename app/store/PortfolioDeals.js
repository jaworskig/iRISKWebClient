/**
* This class generates mock stock price updating data.
*/
Ext.define('iRISKClient.store.dealsPortfolio', {
    extend: 'Ext.data.Store',

    alias: 'store.dealsPortfolio',
    storeId: 'dealsPortfolio',
    model: 'iRISKClient.model.Deal',
    pageSize: 50,
    remoteSort: true,
    remoteFilter: true,
    keepRawData: true,
    proxy: {
        type: 'ajax',
        url: iRISKClient.Application.GlobalSettings.HostUrl + 'Portfolio/DealListHandler',
        //  enablePaging: true,
        reader: {
            type: 'json',
            rootProperty: 'aaData',
            totalProperty: 'totalCount',
            keepRawData: true
        }
       
    },

    onDestroy: function () {
        //debugger;
        //clearInterval(this.timer);

        this.callParent(arguments);
    },

    onProxyLoad: function (operation) {

  
        var me = this;
 //       isDesktop = Ext.os.is.MacOS || Ext.os.is.Windows || Ext.os.is.Linux;

         

        me.callParent(arguments);
      
        //var count = me.getCount() - 1;

        //    me.timer = setInterval(function () {
        //        var rec = me.getAt(Ext.Number.randomInt(0, count));
        //rec.addPriceTick();
        //    }, Ext.isIE || !isDesktop ? 100 : 20);
    }

    //load: function (records, successful, eOpts) {
    //    debugger;

    //    this.callParent(arguments);
    //}
});
