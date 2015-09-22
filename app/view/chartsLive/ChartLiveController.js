Ext.define('iRISKClient.view.chartsLive.ChartLiveController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chartLiveController',


    onOKClick: function () {
       
        var form = this.lookupReference('saveStudyWindowForm');
        var values = form.getValues();

        debugger;


        this.getView().close();
    },
 
    onCancelClick: function () {

        this.getView().close();
    }
});