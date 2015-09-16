Ext.define('iRISKClient.view.curves.FoldersTreeListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.foldersTreeListController',
    requires: [
        'iRISKClient.Application.GlobalSettings'
    ],

    onitemclick: function (ttree, record, item, index, eEvent, eOpts) {
        //  debugger;
        var treePanel = this.lookupReference('curveTreeList');
        var store = treePanel.getStore();
        if (this.view.getCurveTreeType() == "Favorites") {
            store.proxy.url = iRISKClient.Application.GlobalSettings.HostUrl + 'FavoriteExplorer/CurvesInFolderData';
            store.proxy.extraParams = { folderId: record.id };
            store.reload();
        }
        else if (this.view.getCurveTreeType() == "Portfolios") {
            store.proxy.url = iRISKClient.Application.GlobalSettings.HostUrl + 'PortfolioExplorer/PortfolioCurvesData';
            store.proxy.extraParams = { portfolioId: record.data.groupId };
            store.reload();
        }
    },

    onSearch: function () {
        var treePanel = this.lookupReference('curveTreeList');
        var store = treePanel.getStore();
        var textField = this.lookupReference('curveSearchText');
        var searchText = textField.getValue();
        if (this.view.getCurveTreeType() == "Favorites") {
            store.proxy.url = iRISKClient.Application.GlobalSettings.HostUrl + 'CurveExplorer/CurvesByNameSearchData';
            store.proxy.extraParams = { searchText: searchText };
            store.reload();
        }
        else if (this.view.getCurveTreeType() == "Portfolios") {
            store.proxy.url = iRISKClient.Application.GlobalSettings.HostUrl + 'PortfolioExplorer/PortfolioCurvesSearchData';
            store.proxy.extraParams = { searchText: searchText };
            store.reload();
        }
    },

    onCurveClick: function (ttree, record, item, index, eEvent, eOpts) {
        //debugger;

        //var activeWorkspace = iRISKClient.view.main.MainController.lookupReference('mainArea').getActiveTab();
        //var mainTable = activeWorkspace.lookupReference('centerPanel');
        //var activeTabe = mainTable.getActiveTab();

        var activeTabe = iRISKClient.view.main.MainController.getActiveDashboard();
        var columnIndex = (activeTabe.columnWidths != undefined) ? activeTabe.columnWidths.length : 0;
        

        if (iRISKClient.Application.GlobalSettings.UseFormulaEditor) {
            activeTabe.addView({
                type: 'formulaeditor',
                title: record.data.name,
                config: {
                    id: record.data.id,
                    name: record.data.name,
                    type: record.data.curveType,
                    issue: record.data.issueDate
                }
            }, columnIndex);
        }
        else {
            activeTabe.addView({
                type: 'chart',
                //myid: record.id,
                title: record.data.name,
                resolution: record.data.resolution
                //chartName: record.data.name
            }, columnIndex);
        }

    }
});
