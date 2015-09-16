Ext.define('iRISKClient.model.ReportListInFolder', {
    extend: 'Ext.data.Model',
    fields: [
       { name: 'name' },
       { name: 'id'},
       { name: 'reportType' }
    ],

    constructor: function () {
        this.callParent(arguments);
        var data = this.data;
    }

});
