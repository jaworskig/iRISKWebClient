Ext.define('iRISKClient.view.reports.GroupedGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'reportsGroupGrid',
    controller: 'reportsTreeListController',
    requires: [
        'Ext.grid.feature.Grouping'
    ],

    flex: 1,

    // Need a minHeight. Neptune resizable framed panels are overflow:visible so as to
    // enable resizing handles to be embedded in the border lines.
    minHeight: 200,
    minWidth: 200,
    resizable: true,
    hideHeaders: true,

    listeners: {
        rowdblclick: 'onReportClick'
    },

    initComponent: function () {
        this.store = new iRISKClient.store.ReportFoldersTree();
        this.columns = [{
            flex: 1,
            dataIndex: 'id',
            xtype: 'templatecolumn',
            tpl: '<div id="crv_name">{name}</div><div id="crv_container"><div id="crv_left">{id}</div><div id="crv_center">{reportType}</div><div id="crv_right"></div></div>'
        }];

        this.callParent();

       // this.groupingFeature = this.view.getFeature('reportsGrouping');

    }




});
