Ext.define('iRISKClient.view.dashboardsnew.Dashboard', {
    extend: 'Ext.Panel',
    requires: [
        'iRISKClient.view.dashboardsnew.DashboardController',
        'iRISKClient.ux.TabReorderer'
    ],
    xtype: 'iriskdashboard',
    controller: 'iriskdashboard',
    layout: 'card',
    stateful: true,
    dockedItems: [
        {
            xtype: 'tabbar',
            reference: 'tabbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: '+',
                    handler: 'onAddDashboardClick'
                }
            ],
            plugins: {
                ptype: 'irisk-tabreorderer'
            },
            listeners: {
                change: 'onItemChange',
                tabpositionchange: 'onTabPositionChange'
            }
        }
    ]
});