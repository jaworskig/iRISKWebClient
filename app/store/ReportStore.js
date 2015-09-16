Ext.define('iRISKClient.store.ReportStore', {
    extend: 'Ext.data.TreeStore',
    autoLoad: false,
    storeId: 'reportDataStore',
    alias: 'store.reportDataStore',

    //constructor: function (rootData) {
    //    var me = this;
    //   // debugger;
    //   // me.root = rootData;
    //     me.data = rootData;
    //    me.callParent();
    //},

    root: {
        children: []
    },

    proxy: {
        type: 'memory'
    },

    rootVisible: true,
    model: 'iRISKClient.model.ReportModel'
});

