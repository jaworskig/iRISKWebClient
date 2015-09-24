Ext.define('iRISKClient.view.livepositionsnew.LivePositionsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.livepositionsnew',
    requires: [
        'iRISKClient.model.LivePositionsModel'
    ],
    stores: {
        livestore: {
            model: 'iRISKClient.model.LivePositionsModel',
            proxy: {
                type: 'ajax',
                url: '/',
                reader: {
                    type: 'json',
                    transform: function(data){
                        return [data.TotalValues].concat(data.Products);
                    }
                }
            }
        }
    }
});