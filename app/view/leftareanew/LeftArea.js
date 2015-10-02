Ext.define('iRISKClient.view.leftareanew.LeftArea', {
    extend: 'Ext.Panel',
    xtype: 'leftareanew',
    requires: [
        'iRISKClient.view.leftareanew.LeftAreaController',
        'iRISKClient.view.portfolionew.panel.PortfolioPanel',
        'iRISKClient.LeftArea.Labels'
    ],
    controller: 'leftareanew',
    collapsible: true,
    collapsed: false,
    header: false,
    stateful: true,
    layout: 'card',
    width: 450,
    split: {
        size: 5
    },
    dockedItems: [
        {
            xtype: 'tabbar',
            reference: 'tabbar',
            dock: 'left',
            vertical: true,
            tabRotation: 2,
            defaults: {
                rotation: 2,
                closable: false
            },
            items: [
                {
                    // Collapse Button
                    xtype: 'button',
                    iconCls: 'x-tool-img x-tool-expand-left',
                    handler: 'onCollapseClick'
                },
                {
                    text: 'Portfolios',
                    itemType: 'portfoliopanelnew'
                },
                {
                    text: 'Counterparts',
                    itemType: 'counterpartsExplorer'
                },
                {
                    text: 'Curves',
                    itemType: 'curvesFoldersTreeList'
                },
                {
                    text: 'Reports',
                    itemType: 'reportsFoldersTreeList'
                }
            ],
            listeners: {
                change: 'onItemChange'
            }
        }
    ],
    items: [
        {
            xtype: 'portfoliopanelnew'
        }
    ],
    listeners: {
        expand: 'onExpand'
    }
});