Ext.define('iRISKClient.view.reports.ReportsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportscontroller',

    onZoomClick: function() {
        var me = this,
            view = me.getView(),
            partConfig = view.partConfig;

        me.fireEvent('showfullscreen', 'reports', partConfig);
    }
});