Ext.define('iRISKClient.view.livepricesnew.LivePrices', {
    extend: 'Ext.grid.Panel',
    xtype: 'livepricesnew',
    requires: [
        'iRISKClient.view.livepricesnew.LivePricesController',
        'iRISKClient.view.livepricesnew.LivePricesModel',
        'iRISKClient.column.LivePrice'
    ],
    controller: 'livepricesnew',
    viewModel: {
        type: 'livepricesnew'
    },
    viewConfig: {
        trackOver: false
    },
    height: 400,
    bind: '{liveprices}',
    columns: [
        {
            text: LPLabels.Product,
            dataIndex: 'Name',
            hideable: false,
            width: 150,
            align: 'left'
        },
        {
            text: LPLabels.BidSize,
            dataIndex: 'BidSize',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.Bid,
            dataIndex: 'Bid',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.Ask,
            dataIndex: 'Ask',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.AskSize,
            dataIndex: 'AskSize',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.Last,
            dataIndex: 'Last',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.Chg,
            dataIndex: 'Change',
            renderMethod: 'colorBySignRenderer',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.ChgPct,
            dataIndex: 'ChangePct',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.LastVolume,
            dataIndex: 'PrevVolume',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.Open,
            dataIndex: 'Open',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.High,
            dataIndex: 'High',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.Low,
            dataIndex: 'Low',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.MarketClose,
            dataIndex: 'Close',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.Volume,
            dataIndex: 'Volume',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            xtype: 'livepricecolumn',
            text: LPLabels.LastTimeStamp,
            dataIndex: 'LastTimeStamp',
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        {
            text: LPLabels.CloseTimeStamp,
            dataIndex: 'CloseTimeStamp',
            align: 'right',
            menuDisabled: true,
            sortable: false
        }
    ]
});