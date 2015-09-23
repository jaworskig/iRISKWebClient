Ext.define('iRISKClient.view.livepricesnew.LivePricesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.livepricesnew',

    feedUpdates: 0,

    init: function(view) {
        var me = this,
            store = this.getStore('liveprices'),
            title = view.$initParent.getTitle(),
            params = title.split(':'),
            url = Ext.String.format('{0}AppsForOffice/PriceSnapshot?query_type={1}&query={2}', iRISKClient.Application.GlobalSettings.HostUrl, params[0], params[1]);

        store.load({
            url: url,
            callback: me.onStoreLoadSuccess,
            scope: me
        });
    },

    onStoreLoadSuccess: function(records){
        var products = records.map(function (item) {
            return item.get('Name');
        });

        HubService.SubscribeFeedArray(products, this);
    },

    handleLiveUpdateFeed: function (message) {
        var me = this,
            view = me.getView(),
            store = this.getStore('liveprices'),
            productName = message.ProductName,
            length = message.Data.length,
            record = store.getById(productName),
            now = new Date(),
            today = new Date(now.getFullYear(), now.getMonth(), now.getDate()),
            i = 0, field, value, date;

        if (record) {

            me.showFeedStatus((++me.feedUpdates).toString());

            for (; i < length; i++) {

                field = livePricesFeedToDataIndex[message.Data[i].Name.toLowerCase()];

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

    },

    showFeedStatus: function (status) {
        var me = this,
            view = me.getView(),
            cnt = view.ownerCt,
            title;

        if (cnt) {
            title = cnt.getTitle();
            cnt.setTitle(title.split(' (')[0] + ' (' + status + ')');
        }
    }
});