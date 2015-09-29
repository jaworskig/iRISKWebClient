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
        //debugger;


        var activeTabe = iRISKClient.view.main.MainController.getActiveDashboard();
        var columnIndex = (activeTabe.columnWidths != undefined) ? activeTabe.columnWidths.length : 0;

        //debugger;
        var type = null;
        if (record.data.reportType == 'Report')
            type = 'formula';
        else if (record.data.reportType == 'DerivedCurve')
            type = 'derived_curve';
        if (type && Settings.UseFormulaEditor) {
            activeTabe.addView({
                type: 'formulaeditor',
                title: record.data.name,
                config: {
                    id: record.data.id,
                    name: record.data.name,
                    type: type,
                    issue: 'None'
                }
            }, columnIndex);
        }
        else {

            //  debugger;
            activeTabe.addView({
                type: 'repport',
                title: record.data.name,
                reportId: record.id

                //stateId: 'report_' + record.data.name
                //height: activeTabe.getHeight()/2
            }, columnIndex);
        }
    }
});
