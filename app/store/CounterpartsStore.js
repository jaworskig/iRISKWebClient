Ext.define('iRISKClient.store.CounterpartsStore', {
    extend: 'Ext.data.Store',
    requires: [
        'iRISKClient.Application.GlobalSettings'
    ],

    storeId: 'counterpartsDataStore',
    model: 'iRISKClient.model.CounterpartsModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: iRISKClient.Application.GlobalSettings.HostUrl + 'Report/CounterpartListData',
        reader: {
            type: 'json',
            root: 'ReportList',
            successProperty: 'CounterpartReport'
        }
    }
});
