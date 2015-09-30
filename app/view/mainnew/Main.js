Ext.define('iRISKClient.view.mainnew.Main', {
    extend: 'Ext.Panel',
    plugins: 'viewport',
    xtype: 'app-main',
    requires: [
        'iRISKClient.view.mainnew.MainModel',
        'iRISKClient.view.mainnew.MainController',
        'iRISKClient.view.workspaces.WorkSpace',
        'Ext.tab.Bar'
    ],
    controller: 'mainnew',
    viewModel: {
        type: 'mainnew'
    },
    stateful: true,
    stateId: 'main',
    layout: 'fit',
    dockedItems: [
        {
            xtype: 'tabbar',
            reference: 'tabBar',
            dock: 'top',
            defaults: {
                closable: false
            },
            items: [

                // Title Component
                {
                    xtype: 'component',
                    cls: 'irisk-title',
                    margin: '0 10',
                    padding: '5 0 0 0',
                    html: 'iRISK'
                },

                // Workspace Tabs
                { text: '1' },
                { text: '2' },
                { text: '3' },
                { text: '4' },

                // Products Combo
                {
                    xtype: 'combo',
                    name: 'product-query',
                    autoSelect: true,
                    editable: false,
                    minChars: 0,
                    bind: {
                            store: '{products}'
                    },
                    displayField: 'name',
                    valueField: 'name',
                    listeners: {
                        select: 'onProductSelect'
                    }
                },

                // Curves Combo
                {
                    xtype: 'combo',
                    minChars: 3,
                    queryParam: 'query',
                    queryMode: 'remote',
                    valueField: 'full_name',
                    displayField: 'full_name',
                    bind: {
                        store: '{curves}'
                    },
                    listeners: {
                        select: 'onCurveSelect'
                    }
                },

                {
                    text: 'Store',
                    xtype: 'button',
                    handler: 'onStoreLayoutClick'
                },

                // Spacer
                {
                    xtype: 'component',
                    flex: 1
                },

                {
                    xtype: 'component',
                    id: 'feed-status-text', // GLOBAL ID SHOULD BE AVOIDED. KEEPING HERE FOR RETRO-COMPATIBILITY
                    cls: 'irisk-feed-status',
                    padding: 3
                },

                {
                    xtype: 'button',
                    reference: 'statusButton',
                    html: '#',
                    handler: 'onCheckWsState'
                },

                {
                    xtype: 'themeSwitcherButton',
                    text: 'Change style'
                },

                {
                    xtype: 'button',
                    iconCls: 'x-tool-img x-tool-gear',
                    handler: 'onShowSettingsClick'
                },

                {
                    xtype: 'button',
                    cls: 'irisk-logout-button',
                    bind: {
                        html: '{username}'
                    },
                    handler: 'onShowLogoutClick'
                }
            ],
            listeners: {
                change: 'onItemChange'
            }
        }
    ],
    items: [
        {
            xtype: 'workspace',
            stateful: true
        }
    ],
    listeners: {
        afterrender: 'onAfterRender'
    }
});