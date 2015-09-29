Ext.define('iRISKClient.view.dealsLast.DealsLastListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dealslast',
    requires: [
        'iRISKClient.model.Deal'
    ],
    stores: {
         dealslast: {
            model: 'iRISKClient.model.Deal',
            remoteSort: true,
            remoteFilter: true,
            keepRawData: true,
            proxy: {
                type: 'ajax',
                url: Settings.HostUrl + 'Deals/TestDealListInitData',
                reader: {
                    type: 'json',
                    rootProperty: 'Deals'
                }
            }
        }
    }
});