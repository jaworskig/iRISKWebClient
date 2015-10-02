Ext.define('iRISKClient.view.rightArea.RigthArea', {
    extend: 'Ext.form.Panel',
    xtype: 'rightAreaPnl',
    title: "News (22 unread)",
    layout: 'border',
    region: 'east',
    width: 200,
    split: {
        size: 5
    },
    collapsible: true,
    collapsed: true,
    stateful: true,
    layout: 'fit'
});