Ext.define('iRISKClient.store.LivePricesProductStore', {
    extend: 'Ext.data.Store',
    requires: [
        'iRISKClient.util.GlobalSettings'
    ],

    alias: 'store.livePricesProductDataStore',
    storeId: 'livePricesProductDataStore',
    //model: 'iRISKClient.model.LivePricesModel',


    fields: ['name'],
    //autoLoad: true,
    proxy: {
        type: 'cachedAjax',
        cacheName: 'Products',
        //noCache: false,
        url: Settings.HostUrl + 'AppsForOffice/ProductQueries',
        reader: {
            type: 'json',

            rootProperty: 'ProductQueries',
            transform: function (data) {
                data = data.map(function (val) {
                    return { name: val };
                });
                return { ProductQueries: data };
            }
        }
    }



});



Ext.define('iRISKClient.data.CachedRestProxy', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.cachedAjax',

    useLocalStorage: true,

    read: function (operation, callback, scope) {
        var cachedResponse = this.getCachedResponse();

        if (!cachedResponse) {
            this.callParent(arguments);
        } else {
            this.processResponse(true, operation, null, cachedResponse, callback, scope, true);
        }
    },

    getCachedResponse: function () {
        var response = iRISKClient.data[this.cacheName];
        if (response) {
            return Ext.decode(response);
        }
    },

    setCachedResponse: function (response) {
        iRISKClient.data[this.cacheName] = response;
    },

    processResponse: function (success, operation, request, response, callback, scope, isCached) {
        // Only cache successful responses that didn't come from the cache
        if (success === true && !isCached) {
            this.setCachedResponse(response.responseText);
        }

        this.callParent(arguments);
    }
}, function () {
    Ext.ns('iRISKClient.data');
});
