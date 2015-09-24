Ext.define('iRISKClient.view.livepositionsnew.LivePositions', {
    extend: 'iRISKClient.view.livereport.LiveReport',
    xtype: 'livepositionsnew',
    requires: [
        'iRISKClient.view.livepositionsnew.LivePositionsController',
        'iRISKClient.view.livepositionsnew.LivePositionsModel'
    ],
    controller: 'livepositionsnew',
    viewModel: {
        type: 'livepositionsnew'
    },
    columns: {
        defaults: {
            width: 'auto',
            align: 'right'
        },
        items: [
            {
                text: 'Product',
                dataIndex: 'Product',
                hideable: false,
                width: 150,
                align: 'left',
                renderer: 'productRenderer'
            },
            {
                text: 'MarketPrice',
                dataIndex: 'MarketPrice',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: 'MTMClose',
                dataIndex: 'MTM',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: 'Delta',
                dataIndex: 'Delta',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: 'Open',
                dataIndex: 'Open',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: 'High',
                dataIndex: 'High',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: 'Low',
                dataIndex: 'Low',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: 'Close',
                dataIndex: 'Close',
                rederer: 'marketCloseRenderer'
            },
            {
                text: 'Chg',
                dataIndex: 'Change',
                renderer: 'colorBySignRenderer'
            },
            {
                text: 'ChgPct',
                dataIndex: 'ChangePercent',
                renderer: 'colorBySignRenderer'
            },
            {
                text: 'DeltaValue',
                dataIndex: 'DeltaValue',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: 'LSPrice',
                dataIndex: 'LockedDeltaValue',
                renderer: 'priceRenderer'
            },
            {
                text: 'VaR',
                dataIndex: 'VaR',
                renderer: 'colorByDiffRenderer'
            },
            {
                text: 'WTD',
                dataIndex: 'Wtd',
                renderer: 'colorBySignRenderer'
            },
            {
                text: 'MTD',
                dataIndex: 'Mtd',
                renderer: 'colorBySignRenderer'
            },
            {
                text: 'QTD',
                dataIndex: 'Qtd',
                renderer: 'colorBySignRenderer'
            },
            {
                text: 'YTD',
                dataIndex: 'Ytd',
                renderer: 'colorBySignRenderer'
            }
        ]
    }
});