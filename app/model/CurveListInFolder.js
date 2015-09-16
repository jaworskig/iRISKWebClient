Ext.define('iRISKClient.model.CurveListInFolder', {
    extend: 'Ext.data.Model',
    fields: [
       { name: 'issueDate'},
       { name: 'name' },
       { name: 'id'},
       { name: 'curveType'},
       { name: 'resolution'}
    ],

    constructor: function () {
        this.callParent(arguments);
        var data = this.data;
    }

});
