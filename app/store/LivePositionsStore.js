Ext.define('iRISKClient.store.LivePositionsStore', {
    extend: 'Ext.data.Store',
    requires: [
        'iRISKClient.Application.GlobalSettings'
    ],

    storeId: 'livePositionsDataStore',
    model: 'iRISKClient.model.LivePositionsModel'
});
