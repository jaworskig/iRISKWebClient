Ext.define('iRISKClient.view.toolbar.BottomTollbarController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.toolbar',


    init: function () {

    },

    onTollbarBtnClick: function (sender) {
        //debugger;
        var tollbar = this.view;

        var btm_news = this.lookupReference('btm_news');
        var btm_deals = this.lookupReference('btm_deals');
        var btm_alerts = this.lookupReference('btm_alerts'); 

        if (tollbar.collapsed)
            tollbar.expand();


        switch (sender.reference) {

            case 'news_btn':
                {
                    btm_news.show();
                    btm_deals.hide();
                    btm_alerts.hide();

                    break;
                }
            case 'lastDeals_btn':
                {
                    btm_news.hide();
                    btm_deals.show();
                    btm_alerts.hide();

                    break;
                }
            case 'alert_btn':
                {
                    btm_news.hide();
                    btm_deals.hide();
                    btm_alerts.show();
                    break;
                }

        }
    }

});