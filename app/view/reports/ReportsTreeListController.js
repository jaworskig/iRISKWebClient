Ext.define('iRISKClient.view.reports.ReportsTreeListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportsTreeListController',
    requires: [
        'iRISKClient.util.GlobalSettings'
    ],

    onFolderClick: function (ttree, record, item, index, eEvent, eOpts) {
        //  debugger;
        var treePanel = this.lookupReference('reportsTreeList');
        var store = treePanel.getStore();
        store.proxy.extraParams.folderId = record.id;
        store.reload();

    },


    onReportClick: function (ttree, record, item, index, eEvent, eOpts) {
        var view;

        //debugger;
        var type = null;
        if (record.data.reportType == 'Report')
            type = 'formula';
        else if (record.data.reportType == 'DerivedCurve')
            type = 'derived_curve';
        if (type && Settings.UseFormulaEditor) {
            view = {
                type: 'formulaeditor',
                title: record.data.name,
                config: {
                    id: record.data.id,
                    name: record.data.name,
                    type: type,
                    issue: 'None'
                }
            };
        }
        else {

            //  debugger;
            view = {
                type: 'repport',
                title: record.data.name,
                reportId: record.id

                //stateId: 'report_' + record.data.name
                //height: activeTabe.getHeight()/2
            };
        }

        Ext.GlobalEvents.fireEvent('adddashboardview', view, true);
    }
});
