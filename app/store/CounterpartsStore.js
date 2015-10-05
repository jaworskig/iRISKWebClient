Ext.define('iRISKClient.store.CounterpartsStore', {
    extend: 'Ext.data.Store',
    //requires: [
    //    'iRISKClient.Util.GlobalSettings'
    //],

    storeId: 'counterpartsDataStore',
    model: 'iRISKClient.model.CounterpartsModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: Settings.HostUrl + 'Report/CounterpartListData',
        reader: {
            type: 'json',
            rootProperty: 'ReportList',
            successProperty: 'CounterpartReport'
        }
    }
});
