Ext.define('iRISKClient.store.ReportFoldersTree', {
    extend: 'Ext.data.Store',
    requires: [
        'iRISKClient.Application.GlobalSettings'
    ],

    storeId: 'reportListForFolder',
    model: 'iRISKClient.model.ReportListInFolder',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: iRISKClient.Application.GlobalSettings.HostUrl + 'FavoriteExplorer/ReportsInFolderData',
        extraParams: {
            folderId: 0,
            user: localStorage.getItem("UserName")
        }
    },

    onProxyLoad: function () {
        var me = this, isDesktop = Ext.os.is.MacOS || Ext.os.is.Windows || Ext.os.is.Linux;
        me.callParent(arguments);
    }
});
