Ext.define('iRISKClient.view.portfolionew.panel.PortfolioPanel', {
    extend: 'Ext.Panel',
    xtype: 'portfoliopanelnew',
    requires: [
        'iRISKClient.view.portfolionew.explorer.PortfolioExplorer',
        'iRISKClient.view.portfolionew.panel.PortfolioPanelController',
        'iRISKClient.view.portfolionew.panel.PortfolioPanelModel'
    ],
    controller: 'portfoliopanelnew',
    viewModel: {
        type: 'portfoliopanelnew'
    },
    stateful: true,
    stateId: 'portfoliosPanelTabs',
    headerPosition: 'left',
    layout: 'card',
    dockedItems: [
        {
            xtype: 'tabbar',
            dock: 'top',
            defaults: {
                closable: false
            },
            items: [
                {
                    bind: {
                        text: '{currentRoot}'
                    },
                    itemType: 'portfolioexplorernew'
                },
                {
                    text: 'Live',
                    itemType: 'container'
                },
                {
                    text: 'Curves',
                    itemType: 'curvesFoldersTreeList'
                }
            ],
            listeners: {
                change: 'onItemChange'
            }
        }
    ],
    items: [
        {
            xtype: 'portfolioexplorernew'
        }
    ]
});