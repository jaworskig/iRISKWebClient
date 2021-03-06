Ext.define('iRISKClient.view.livepricesnew.LivePricesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.livepricesnew',
    requires: [
        'iRISKClient.model.LivePricesModel'
    ],
    stores: {
        livestore: {
            model: 'iRISKClient.model.LivePricesModel',
            proxy: {
                type: 'ajax',
                url: '/',
                reader: {
                    type: 'json',
                    rootProperty: 'ProductInfos'
                }
            }
        }
    }
});