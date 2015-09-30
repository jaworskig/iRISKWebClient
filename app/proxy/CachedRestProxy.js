Ext.define('iRISKClient.proxy.CachedRestProxy', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.cachedAjax',

    useLocalStorage: true,

    constructor: function(){
        if(!iRISKClient.data){
            iRISKClient.data = {};
        }
        this.callParent(arguments);
    },

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
});