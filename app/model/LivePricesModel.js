Ext.define("iRISKClient.model.LivePricesModel", {
    extend: "Ext.data.Model",
    idProperty: 'Name',

    fields: [{ name: "Name" },
            { name: "Open" },
            { name: "High" },
            { name: "Low" },
            { name: "Close" },
            { name: "Change" },
            { name: "ChangePct" },
            { name: "PrevClose" },
            { name: "Volume" },
            { name: "PrevVolume" },
            { name: "Last" },
            { name: "Bid" },
            { name: "BidSize" },
            { name: "Ask" },
            { name: "AskSize" },
            { name: "LastTimeStamp" },
            { name: "CloseTimeStamp" }],

    //constructor: function () {
    //    this.callParent(arguments);
    //    //var data = this.data;
    //},



    addPriceTick: function () {
        var me = this;


        me.set({
            Open: Ext.Number.randomInt(0, 99),
            Ask: Ext.Number.randomInt(0, 99),
            Bid: Ext.Number.randomInt(0, 99)
        }, {
            dirty: false
        });
    }
});