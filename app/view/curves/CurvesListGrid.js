Ext.define('iRISKClient.view.curves.GroupedGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'grouped-grid',
    controller: 'foldersTreeListController',
    requires: [
        'Ext.grid.feature.Grouping',
        'Ext.dd.*'
    ],
    //collapsible: true,
    //iconCls: 'icon-grid',
    //frame: true,
    flex: 1,
    // width: 600,
    // height: 400,

    // Need a minHeight. Neptune resizable framed panels are overflow:visible so as to
    // enable resizing handles to be embedded in the border lines.
    minHeight: 200,
    minWidth: 200,
    resizable: true,
    hideHeaders: true,
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            ddGroup: 'formulaEditorDragAndDrop',
            enableDrop: false,
            dragText: '{0} selected curve{1}'
        }
    },
    selModel: {
        mode: 'MULTI'
    },

    features: [{
        ftype: 'grouping',
        groupHeaderTpl: '{columnName}: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
        hideGroupedHeader: true,
        startCollapsed: false,
        id: 'restaurantGrouping'
    }],

    listeners: {
        rowdblclick: 'onCurveClick'
    },

    initComponent: function () {
        this.store = new iRISKClient.store.CurveFoldersTree();
        this.columns = [{
            flex: 1,
            dataIndex: 'id',
            xtype: 'templatecolumn',
            tpl: '<div id="crv_name">{name}</div><div id="crv_container"><div id="crv_left">{id}</div><div id="crv_center">{resolution}</div><div id="crv_right">{curveType}</div></div>'
        }];

        this.callParent();

        this.groupingFeature = this.view.getFeature('restaurantGrouping');

    }




});
