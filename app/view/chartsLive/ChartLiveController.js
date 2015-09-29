Ext.define('iRISKClient.view.chartsLive.ChartLiveController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chartsLive',


    onOKClick: function () {
       
        var form = this.lookupReference('saveStudyWindowForm');
        var values = form.getValues();


        this.getView().close();
    },
 
    onCancelClick: function () {

        this.getView().close();
    }
});