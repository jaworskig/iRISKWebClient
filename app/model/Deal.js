Ext.define('iRISKClient.model.Deal', {
    extend: 'Ext.data.Model',
    fields: [
       { name: 'DealId' },
       { name: 'ContractNumber' },
       { name: 'Price', type: 'float' },
       { name: 'TradeDateFormated', type: 'date', dateFormat: 'd-m-Y' },
       { name: 'TraderName' },
       { name: 'ProductName' },
       { name: 'Quantity' },
       { name: 'PorfolioName' },
       { name: 'CounterpartName' },
       { name: 'BrokerName' },
       { name: 'Strategy' },
       { name: 'Export' },
       { name: 'InstrumentType' },
       { name: 'Status' }
    ],

    constructor: function () {
        this.callParent(arguments);

        var data = this.data;
    }

});
