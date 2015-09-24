Ext.define("iRISKClient.model.LivePositionsModel", {
    extend: "Ext.data.Model",
    idProperty: 'Name',
    fields: [{ name: "Name" },
            { name: "MarketPrice"},
            { name: "MTM" },
            { name: "Delta" },
            { name: "Open" },
            { name: "High" },
            { name: "Low" },
            { name: "Close" },
            { name: "Change" },
            { name: "ChangePercent" },
            { name: "DeltaValue" },
            { name: "LockedDeltaValue" },
            { name: "VaR" },
            { name: "Wtd" },
            { name: "Mtd" },
            { name: "Qtd" },
            { name: "Ytd" }],

    constructor: function () {
        this.callParent(arguments);
        var data = this.data;
    }
});
