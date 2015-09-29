
Ext.define("iRISKClient.model.ReportConfigurationModel", {
    extend: 'Ext.data.Model',
    requires: [
        'iRISKClient.model.TextValueModel'
    ],

    hasMany: [{
        model: 'iRISKClient.model.TextValueModel',
        associationKey: 'CurrencyList',
        name: 'CurrencyList'
    }, {
        model: 'iRISKClient.model.TextValueModel',
        associationKey: 'GroupByList',
        name: 'GroupByList'
    }, {
        model: 'iRISKClient.model.TextValueModel',
        associationKey: 'RunAsList',
        name: 'RunAsList'
    }, {
        model: 'iRISKClient.model.TextValueModel',
        associationKey: 'ReportTypeList',
        name: 'ReportTypeList'
    }, {
        model: 'iRISKClient.model.TextValueModel',
        associationKey: 'TimeProductList',
        name: 'TimeProductList'
    }]
});