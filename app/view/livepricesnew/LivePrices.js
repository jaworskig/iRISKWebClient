Ext.define('iRISKClient.view.livepricesnew.LivePrices', {
    extend: 'iRISKClient.view.livereport.LiveReport',
    xtype: 'livepricesnew',
    requires: [
        'iRISKClient.view.livepricesnew.LivePricesController',
        'iRISKClient.view.livepricesnew.LivePricesModel'
    ],
    controller: 'livepricesnew',
    viewModel: {
        type: 'livepricesnew'
    },
    columns: {
        defaults: {
            align: 'right',
            menuDisabled: true,
            sortable: false
        },
        items: [
            {
                text: LPLabels.Product,
                dataIndex: 'Name',
                hideable: false,
                menuDisabled: false,
                width: 150,
                align: 'left'
            },
            {
                text: LPLabels.BidSize,
                dataIndex: 'BidSize'
            },
            {
                text: LPLabels.Bid,
                dataIndex: 'Bid',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.Ask,
                dataIndex: 'Ask',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.AskSize,
                dataIndex: 'AskSize',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.Last,
                dataIndex: 'Last',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.Chg,
                dataIndex: 'Change',
                renderer: 'colorBySignRenderer'
            },
            {
                text: LPLabels.ChgPct,
                dataIndex: 'ChangePct',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.LastVolume,
                dataIndex: 'PrevVolume',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.Open,
                dataIndex: 'Open',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.High,
                dataIndex: 'High',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.Low,
                dataIndex: 'Low',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.MarketClose,
                dataIndex: 'Close',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.Volume,
                dataIndex: 'Volume',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: LPLabels.LastTimeStamp,
                dataIndex: 'LastTimeStamp',
                renderer: 'timeRenderer'
            },
            {
                text: LPLabels.CloseTimeStamp,
                dataIndex: 'CloseTimeStamp'
            }
        ]
    }
});