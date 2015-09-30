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
    bind: {
        title: 'iRISK - Workspace {workspace}'
    },
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    stateful: true,
    stateId: 'main',
    layout: 'fit',
    dockedItems: [
        {
            xtype: 'tabbar',
            reference: 'tabBar',
            dock: 'top',
            items: [
                { text: '1' },
                { text: '2' },
                { text: '3' },
                { text: '4' }
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
    ]
});