Ext.define('iRISKClient.store.CurveFoldersTree', {
    extend: 'Ext.data.Store',
    requires: [
        'iRISKClient.Application.GlobalSettings'
    ],

    storeId: 'curveListForFolder',
    model: 'iRISKClient.model.CurveListInFolder',
    groupField: 'issueDate',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: iRISKClient.Application.GlobalSettings.HostUrl + 'FavoriteExplorer/CurvesInFolderData',
        extraParams: {
            folderId: 15
        }
    },

    onProxyLoad: function () {
        var me = this, isDesktop = Ext.os.is.MacOS || Ext.os.is.Windows || Ext.os.is.Linux;
        me.callParent(arguments);
    }
});
