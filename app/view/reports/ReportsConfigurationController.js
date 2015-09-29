Ext.define('iRISKClient.view.reports.ReportsConfigurationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportsconfigcontroller',

    init: function (view) {
        var me = this,
            report = view.up('container'),
            store = this.getStore('reportconfiguration'),
            proxy = store.getProxy();

     
        proxy.setExtraParam('id', report.reportId);
        proxy.setExtraParam('reportTempId', report.reportGUID);

        store.load({
            callback: me.onStoreLoadSuccess,
            scope: me
        });
    },

    onStoreLoadSuccess: function (records) {
       // debugger;
        var me = this,
            record = records[0],
            viewModel = me.getViewModel(),
            data = record.getData();

        data.IssueDate1 = data.IssueDate1.split('T')[0];
        data.IssueDate2 = data.IssueDate2.split('T')[0];
        data.FromDate = data.FromDate.split('T')[0];
        data.ToDate = data.ToDate.split('T')[0];


        viewModel.set('report', data);

        viewModel.set('reportTypeList', record.ReportTypeList());
        viewModel.set('currencyList', record.CurrencyList());
        viewModel.set('groupByList', record.GroupByList());
        viewModel.set('runAsList', record.RunAsList());
        viewModel.set('timeProductList', record.TimeProductList());

        //checkBox list
        var columns = this.lookupReference('columnsCheckGroup');    
        data.Columns.forEach(function (record) {
            columns.add({
                boxLabel: record.Text,
                name: record.Text,
                checked: record.Selected
            });
        });

        var portfolios = this.lookupReference('portfolioCheckGroup');
        data.Porfolios.forEach(function (record) {
            portfolios.add({
                boxLabel: record.Text,
                name: record.Text,
                checked: record.Selected
            });
        });

        var filters = this.lookupReference('filterCheckGroup');
        data.Filters.forEach(function (record) {
            filters.add({
                boxLabel: record.Text,
                name: record.Text,
                checked: record.Selected
            });
        });
    },

    createCheckBoxGroup: function (itemsGroup) {
        var checkBoxColumns = [];

        itemsGroup.forEach(function (record) {
            checkBoxColumns.push({
                boxLabel: record.Text,
                name: record.Text,
                checked: record.Selected
            });
        });

        return checkBoxColumns;
    },

    onSaveClick: function () {
        this.editReport(false);
    },

    onUpdateClick: function() {
        this.editReport(true);
    },

    onCancelClick: function() {
        
    },
     
    editReport: function (update) {

        var me = this,
            viewModel = me.getViewModel();
        var form = this.getView().getForm();

        var reportConfig = Ext.clone(viewModel.get('report'));
        reportConfig.Save = true;
        reportConfig.Update = update;
        reportConfig.Columns = this.getCheckBoxGroupData(form, 'columns', reportConfig.Columns);
        reportConfig.Porfolios = this.getCheckBoxGroupData(form, 'portfolio', reportConfig.Porfolios);
        reportConfig.Filters = this.getCheckBoxGroupData(form, 'filters', reportConfig.Filters);

        delete reportConfig.DealFilterList;
        delete reportConfig.CurrencyList;
        delete reportConfig.GroupByList;
        delete reportConfig.TimeProductList;
        delete reportConfig.RunAsList;
        delete reportConfig.id;

        Ext.Ajax.request({
            url: Settings.HostUrl + 'Report/Save',
            jsonData: { model: reportConfig },
            success: this.onSuccess,
            scope: me
        });

    },

    onSuccess: function(response, opts) {

        var form = this.getView().getForm();

        if (response.ErorrMsg != null) {

            var reportName = form.findField('ReportName');
            reportName.markInvalid(response.ErorrMsg);

        } else {
            //debugger;
            //var reportGrid = me.ownerCt.items.items[0];

            //me.onCancelClick(reportGrid.reportGUID != null);
            //reportGrid.reportName = response.ReportName;
            //reportGrid.reportId = response.ReportId;

            //if (formObject.Update == false) {
            //    if (reportGrid.reportGUID != null) {
            //        reportGrid.reportGUID = null;
            //    }
            //    reportGrid.updateReportData({ ReportName: response.ReportName, reportGUID: reportGrid.reportGUID });
            //}
        }
    },


    getCheckBoxGroupData: function (form, checkBoxGroupName, formObjectData) {

        var setColumns = form.findField(checkBoxGroupName).getValue();

        formObjectData.forEach(function (item) {
            if (setColumns.hasOwnProperty(item.Text)) {
                item.Selected = true;
            } else {
                item.Selected = false;
            }
        });

        return formObjectData;
    },

    onZoomClick: function () {
        var me = this,
            view = me.getView(),
            partConfig = view.partConfig;

        me.fireEvent('showfullscreen', 'reports', partConfig);
    }
});