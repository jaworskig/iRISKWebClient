Ext.define('iRISKClient.view.dealsLast.DealsLastListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dealsLastListController',


    init: function (view) {
        var me = this,
            store = this.getStore('dealslast');


        store.load({
            callback: me.onStoreLoadSuccess,
            scope: me
        });
    },


    onStoreLoadSuccess: function (records) {
        //debugger;
        HubService.SubscribeDealUpdate(this);
    },



    editClick: function (sender, event) {

        var editStore = Ext.data.StoreManager.lookup('dealsLastEditStore');
        var editGrid = this.view.ownerCt.items.items[0];

        editStore.removeAll();

        this.view.getSelection().forEach(function (item) {
            editStore.add(item.data);
        });

        var columns = editStore.getDealColumns();

        editGrid.reconfigure(editStore, columns);

        this.view.setVisible(false);
        editGrid.setVisible(true);
    },


    handleDealUpdate: function (message) {
 
        if (message.hasOwnProperty("Deals")) {
          
            var deal = message.Deals[0];
            var store = this.getStore('dealslast');

            var record = store.findRecord('DealId', deal.DealId);

            if (!record) {
                store.add(deal);
            } else {

                for (var k in deal)
                    if (record.get(k) != deal[k])
                        record.set(k, deal[k]);
            }

         //   var row = this.getView().getRow(record);
         //   var el = Ext.fly(row);
     
         //   el.highlight("F4B084", { attr: 'backgroundColor', duration: 2000, easing: 'easeInOut' });
        }
    }
 
});
