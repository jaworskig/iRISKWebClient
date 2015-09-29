Ext.define('iRISKClient.view.portfoliodeals.ProtfolioDealsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.portfoliodeals',

    init: function (view) {
        var me = this,
            store = this.getStore('portfoliodeals');

        store.getProxy().setExtraParam('id', view.config.$initParent._partConfig.portfolioId);
        store.getProxy().setExtraParam('dateRange', 'D');

        store.load({
            callback: me.onStoreLoadSuccess,
            scope: me
        });
    },


    onStoreLoadSuccess: function (records) {

        HubService.SubscribeDealUpdate(this);
    },


    setDateRange: function (item) {

        var me = this,
            store = this.getStore('portfoliodeals');

        store.getProxy().setExtraParam('dateRange', item.text);
        store.reload();
    },


    handleDealUpdate: function (message) {
        // debugger;

        if (message.hasOwnProperty("Deals")) {
            //debugger;
            var deal = message.Deals[0];
            var store = this.getStore();

            var record = store.findRecord('DealId', deal.DealId);

           // store.suspendAutoSync();

            if (!record) {
                store.add(deal);
            } else {

                for (var k in deal)
                    if (record.get(k) != deal[k])
                        record.set(k, deal[k]);
            }

           // store.commitChanges();
           // store.resumeAutoSync();
        }
    },


    itemcontextmenu: function (view, list, node, rowIndex, e) {

        var me = this;

        var menu = new Ext.menu.Menu({
            items: [{
                text: 'Deal Editor',
                handler: function () { }
            }, {
                text: 'Export to Excel',
                handler: function (item1, item2, item3) {

                    var data = me.store.data.getRange();
                    var dataJson = Ext.Array.pluck(data, "data");

                    $.ajax({
                        type: "POST",
                        url: Settings.HostUrl + 'Portfolio/DealListExport',
                        cache: false,
                        data: JSON.stringify(dataJson),
                        success: function (retData) {
                            var binUrl = retData;
                            document.body.innerHTML += "<iframe src='" + binUrl + "' style='display: none;' ></iframe>";
                        }

                    });

                }
            }]
        }).showAt(e.getX(), e.getY());


        e.preventDefault();
    }



});