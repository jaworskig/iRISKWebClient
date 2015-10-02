Ext.define('iRISKClient.view.livepricesnew.LivePricesController', {
    extend: 'iRISKClient.view.livereport.LiveReportController',
    alias: 'controller.livepricesnew',

    livePricesFeedToDataIndex: {
        productname     : 'Name',
        bidsize         : 'BidSize',
        bid             : 'Bid',
        ask             : 'Ask',
        asksize         : 'AskSize',
        last            : 'Last',
        chg             : 'Change',
        chgpct          : 'ChangePct',
        lastvolume      : 'PrevVolume',
        ppen            : 'Open',
        high            : 'High',
        low             : 'Low',
        marketclose     : 'Close',
        volume          : 'Volume',
        lasttimestamp   : 'LastTimeStamp',
        closetimestamp  : 'CloseTimeStamp'
    },

    init: function(view) {
        var title = view.$initParent.getTitle(),
            params = title.split(':'),
            url = Ext.String.format('{0}AppsForOffice/PriceSnapshot?query_type={1}&query={2}', Settings.HostUrl, params[0], params[1]);

        this.loadStore(url);
    },

    handleLiveUpdateFeed: function (message) {
        var me = this,
            view = me.getView();

        if(!view){
            return false;
        }

        var store = me.getStore('livestore'),
            productName = message.ProductName,
            length = message.Data.length,
            record = store.getById(productName),
            now = new Date(),
            today = new Date(now.getFullYear(), now.getMonth(), now.getDate()),
            i = 0, field, value, date;

        if (record) {

            me.showFeedStatus((++me.feedUpdates).toString());

            for (; i < length; i++) {

                field = me.livePricesFeedToDataIndex[message.Data[i].Name.toLowerCase()];

                if (field) {
                    value = message.Data[i].Values[0];
                    date = new Date(message.Data[i].Dates[0]);

                    if (date >= today) {

                        record.beginEdit();
                        record.set(field, value, { dirty: false });
                        record.set(field == 'Last' ? 'LastTimeStamp' : 'CloseTimeStamp', '/Date(' + (new Date()).getTime().toString() + ')/');
                        record.endEdit();

                    }
                }
            }
        }
    }
});