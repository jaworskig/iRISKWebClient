Ext.define('iRISKClient.store.PortfoliosStore', {
    extend: 'Ext.data.TreeStore',
    autoLoad: false,
    storeId: 'portfoliosDataStore',
    alias: 'store.portfoliosDataStore',

    root: {
        children: []
    },

    proxy: {
        type: 'memory'
    },

    rootVisible: true,
    model: 'iRISKClient.model.PortfoliosModel'
});
