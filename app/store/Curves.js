Ext.define('iRISKClient.store.CurveList', {
    extend: 'Ext.data.Store',
    alias: 'store.curve-list',
    model: 'iRISKClient.model.CurveModel',
    storeId: 'curve-list',
    proxy: {
        type: 'ajax',
        url: iRISKClient.Application.GlobalSettings.HostUrl + 'Chart/Search',
        reader: {
            type: 'json'
        }
    }
});