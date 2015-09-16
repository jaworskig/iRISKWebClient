Ext.define("iRISKClient.model.CounterpartsModel", {
    extend: "Ext.data.Model",
    fields: [{ name: "Name" },
            { name: "Id" },
            { name: "State" },
            { name: "MTM" },
            { name: "Delta" },
            { name: "DeltaV" },
            { name: "Chg" },
            { name: "ChgPrc" },
            { name: "VaR" },
            { name: "CVaR" }],
    constructor: function () {
        this.callParent(arguments);
        var data = this.data;
    }
});