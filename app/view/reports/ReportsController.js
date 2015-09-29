Ext.define('iRISKClient.view.reports.ReportsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportscontroller',

    onZoomClick: function() {
        var me = this,
            view = me.getView(),
            partConfig = view.partConfig;

        me.fireEvent('showfullscreen', 'reports', partConfig);
    },


    listen: {
        global: {
            showEditButton: 'onShowEditButton'
        }
    },

    onShowEditButton: function () {
        var me = this,
            view = me.getView();//.ownerCt.header.getComponent('editButtonItem');

        //debugger;
       // var header = view.up('container').header;
        //var editButton = view.header.getComponent('editButtonItem');


        if (editButton)
            editButton.setVisible(true);

    }
});