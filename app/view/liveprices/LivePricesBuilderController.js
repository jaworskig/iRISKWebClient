Ext.define('iRISKClient.view.liveprices.LivePricesBuilderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.livePricesBuider',


    onItemCheck: function (item) {
        
    },

    onOKClick: function () {
       
        var form = this.lookupReference('livePricesBuilderForm');
        var values = form.getValues();

        this.getView().close();

        var dashboard = iRISKClient.view.main.MainController.getActiveDashboard();

        dashboard.addView({
            type: 'liveprices',
            title: values['query-type'] == 'product' ? 'product:' + values['product-query'] : 'curve:' + values['curve-query']
        });
    },
 
    onCancelClick: function () {

        this.getView().close();
    }
});