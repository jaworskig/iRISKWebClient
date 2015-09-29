Ext.define('iRISKClient.view.portfoliodeals.ProtfolioDealsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.portfoliodeals',
    requires: [
        'iRISKClient.model.Deal'
    ],
    stores: {
        dealsLast: {
            type: 'buffered',
            model: 'iRISKClient.model.Deal',
            remoteSort: true,
            remoteFilter: true,
            keepRawData: true,
            proxy: {
                type: 'ajax',
                url:  Ext.String.format('{0}Portfolio/DealListHandler',Settings.HostUrl),
                reader: {
                    type: 'json',
                    rootProperty: 'aaData',
                    totalProperty: 'totalCount',
                    keepRawData: true
                }
            }
        }
    }

});