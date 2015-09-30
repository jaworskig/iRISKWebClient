Ext.define('iRISKClient.view.mainnew.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    formulas: {
        workspace: function (get, set) {
            return Settings.workspace;
        }
    }
});