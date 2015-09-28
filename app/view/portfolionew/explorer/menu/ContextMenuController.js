Ext.define('iRISKClient.view.portfolionew.explorer.menu.ContextMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.portfolioexplorercontextmenu',

    onShowActiveDealsClick: function(){
        var data = this.getListData();

        Ext.GlobalEvents.fireEvent('adddashboardview',{
            type: 'portfolio_deals',
            title: data.text,
            portfolioId: data.groupId
        }, true);

    },

    onCreatePositionReportClick: function(btn){
        var me = this,
            data = me.getListData(),
            type = btn.itemType,
            split = btn.itemSplit,
            sort = btn.itemSort,
            reportName = "New " + type + " Report (" + data.text + ")";

        Ext.Ajax.request({
            url: Settings.HostUrl + 'Report/PostionReportCreateNew',
            method: 'GET',
            params: {
                groupId: data.groupId,
                name: reportName,
                type: type,
                split: split,
                sort: sort
            },
            success: me.onPositionReportSuccess,
            scope: me
        });

    },

    onPositionReportSuccess: function(response, request){
        var me = this,
            resp = response.responseText,
            data = me.getListData(),
            params = request.params,
            type = params.type,
            split = params.split,
            sort = params.sort,
            reportName = "New " + type + " Report (" + data.text + ")";

        Ext.GlobalEvents.fireEvent('adddashboardview', {
            type: 'repport',
            title: reportName,
            reportId: 0,
            reportGUID: resp,
            report_type: type,
            report_split: split,
            report_sort: sort,
            report_groupId: data.groupId
        });
    },

    getListData: function(){
        var view = this.getView();
        return view.listData;
    }
});