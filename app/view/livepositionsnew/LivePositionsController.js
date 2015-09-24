Ext.define('iRISKClient.view.livepositionsnew.LivePositionsController', {
    extend: 'iRISKClient.view.livereport.LiveReportController',
    alias: 'controller.livepositionsnew',

    livePositionsFeedToDataIndex: {
        product         : 'Product',
        marketprice     : 'MarketPrice',
        mtm             : 'MTM',
        delta           : 'Delta',
        open            : 'Open',
        high            : 'High',
        low             : 'Low',
        mtmclose        : 'Close',
        chg             : 'Change',
        chgpct          : 'ChangePercent',
        deltavalue      : 'DeltaValue',
        lsprice         : 'LockedDeltaValue',
        'var'           : 'VaR',
        wtd             : 'Wtd',
        mtd             : 'Mtd',
        qtd             : 'Qtd',
        ytd             : 'Ytd'
    },

    init: function(view) {
        var group = view.$initParent.getTitle(),
            url = Ext.String.format('{0}AppsForOffice/PositionSnapshot?portfolio_name={1}', iRISKClient.Application.GlobalSettings.HostUrl, group);

        this.loadStore(url);
    },

    handleLiveUpdateFeed: function (message) {
        var me = this,
            store = me.getStore('livestore'),
            productName = message.ProductName,
            now = new Date(),
            today = new Date(now.getFullYear(), now.getMonth(), now.getDate()),
            length = message.Data.length,
            i = 0, field, value, date, record;

        if (productName.indexOf('Total') > -1) {
            productName = productName.split('|')[1];
        }

        record = store.getById(productName);

        if (record) {

            me.showFeedStatus((++me.feedUpdates).toString());

            for (; i < length; i++) {

                field = me.livePositionsFeedToDataIndex[message.Data[i].Name.toLowerCase()];

                if (field) {

                    value = message.Data[i].Values[0];
                    date = new Date(message.Data[i].Dates[0]);

                    if (date >= today) {

                        record.beginEdit();
                        record.set(field, value, {  dirty: false });
                        if (field == 'Close') {
                            record.set('CloseTimeStamp', '/Date(' + (new Date()).getTime().toString() + ')/');
                        }
                        record.endEdit();
                    }
                }
            }
        }
    }
});