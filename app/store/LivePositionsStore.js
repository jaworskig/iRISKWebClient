Ext.define('iRISKClient.store.LivePositionsStore', {
    extend: 'Ext.data.Store',
    requires: [
        'iRISKClient.util.GlobalSettings'
    ],

    storeId: 'livePositionsDataStore',
    model: 'iRISKClient.model.LivePositionsModel'
});
