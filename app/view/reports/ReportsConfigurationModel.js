Ext.define('iRISKClient.view.reports.ReportConfigurationModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.reportconfiguration',
    requires: [
        'iRISKClient.model.ReportConfigurationModel'
    ],
    data:{
        report: null,
        reportTypeList: null,
        currencyList: null,
        groupByList: null,
        runAsList: null,
        timeProductList: null
    },

    stores: {
        reportconfiguration: {
            model: 'iRISKClient.model.ReportConfigurationModel',
            proxy: {
                type: 'ajax',
                url: Ext.String.format('{0}/Report/ConfigurationData', Settings.HostUrl),
                reader: {
                    type: 'json'
                }
            }
        }
    }

});