Ext.define('iRISKClient.view.portfolionew.explorer.menu.ContextMenu', {
    extend: 'Ext.menu.Menu',
    xtype: 'portfolioexplorercontextmenu',
    requires: [
        'iRISKClient.view.portfolionew.explorer.menu.ContextMenuController'
    ],
    controller: 'portfolioexplorercontextmenu',
    items: [
        {
            text: 'View Deals',
            handler: 'onShowActiveDealsClick'
        },
        {
            text: 'Reports',
            menu: [
                {
                    text: 'Standard Position Reports',
                    menu: {
                        defaults: {
                            handler: 'onCreatePositionReportClick'
                        },
                        items: [
                            {
                                text: 'Product',
                                itemType: 'Standard',
                                itemSplit: 'Product',
                                itemSort: 'Reference'
                            },
                            {
                                text: 'Monthly',
                                itemType: 'Standard',
                                itemSplit: 'Monthly',
                                itemSort: 'None'
                            },
                            {
                                text: 'Quarterly',
                                itemType: 'Standard',
                                itemSplit: 'Quarterly',
                                itemSort: 'None'
                            },
                            {
                                text: 'Yearly',
                                itemType: 'Standard',
                                itemSplit: 'Yearly',
                                itemSort: 'None'
                            }
                        ]
                    }
                },
                {
                    text: 'Reference Position Reports',
                    menu: {
                        defaults: {
                            handler: 'onCreatePositionReportClick'
                        },
                        items: [
                            {
                                text: 'Product',
                                itemType: 'Standard',
                                itemSplit: 'Product',
                                itemSort: 'None'
                            },
                            {
                                text: 'Monthly',
                                itemType: 'Reference',
                                itemSplit: 'Monthly',
                                itemSort: 'None'
                            }
                        ]
                    }
                },
                {
                    text: 'Exposure Position Reports',
                    menu: {
                        defaults: {
                            handler: 'onCreatePositionReportClick'
                        },
                        items: [
                            {
                                text: 'Product',
                                itemType: 'Exposure',
                                itemSplit: 'Product',
                                itemSort: 'None'
                            },
                            {
                                text: 'Monthly',
                                itemType: 'Exposure',
                                itemSplit: 'Monthly',
                                itemSort: 'None'
                            }
                        ]
                    }
                },
                {
                    text: 'Options Position Reports',
                    menu: {
                        defaults: {
                            handler: 'onCreatePositionReportClick'
                        },
                        items: [
                            {
                                text: 'Product',
                                itemType: 'Options',
                                itemSplit: 'Product',
                                itemSort: 'None'
                            },
                            {
                                text: 'Monthly',
                                itemType: 'Options',
                                itemSplit: 'Monthly',
                                itemSort: 'None'
                            }
                        ]
                    }
                },
                {
                    text: 'Hedge Position Reports',
                    menu: {
                        defaults: {
                            handler: 'onCreatePositionReportClick'
                        },
                        items: [
                            {
                                text: 'All Products',
                                itemType: 'AllProducts',
                                itemSplit: 'Monthly',
                                itemSort: 'None'
                            },
                            {
                                text: 'Product',
                                itemType: 'Hedge',
                                itemSplit: 'Monthly',
                                itemSort: 'None'
                            },
                            {
                                text: 'Monthly',
                                itemType: 'Products',
                                itemSplit: 'Monthly',
                                itemSort: 'None'
                            }
                        ]
                    }
                },
                {
                    text: 'ELCERT',
                    itemType: 'Elcert',
                    itemSplit: 'Monthly',
                    itemSort: 'None',
                    handler: 'onCreatePositionReportClick'
                },
                {
                    text: 'Trading Report',
                    itemType: 'Trading',
                    itemSplit: 'Product',
                    itemSort: 'None',
                    handler: 'onCreatePositionReportClick'
                },
                {
                    text: 'Settlement Report',
                    itemType: 'Settlement',
                    itemSplit: 'Product',
                    itemSort: 'None',
                    handler: 'onCreatePositionReportClick'
                }
            ]
        }
    ]
});