/**
* This class generates mock stock price updating data.
*/
Ext.define('iRISKClient.store.dealsPortfolio', {
    extend: 'Ext.data.BufferedStore',

    alias: 'store.dealsPortfolio',
    storeId: 'dealsPortfolio',
    model: 'iRISKClient.model.Deal',
    //pageSize: 50,
    remoteSort: true,
    remoteFilter: true,
    keepRawData: true,
    proxy: {
        type: 'ajax',
        url: Settings.HostUrl + 'Portfolio/DealListHandler',
        //  enablePaging: true,
        reader: {
            type: 'json',
            rootProperty: 'aaData',
            totalProperty: 'totalCount',
            keepRawData: true
        }
       
    },

    onDestroy: function () {
        
        this.callParent(arguments);
    },

    onProxyLoad: function (operation) {
        var me = this;
        me.callParent(arguments);
      
    }


});
