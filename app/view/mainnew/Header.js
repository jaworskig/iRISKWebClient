Ext.define('iRISKClient.view.mainnew.Header', {
    extend: 'Ext.Container',

    xtype: 'app-header',
    style: {
        backgroundColor:'#272727',
        color: '#888'
    },
    cls: 'app-header',
    height: 30,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    items: [
        {
            xtype: 'component',
            cls: 'app-header-logo'
        },
        {
            xtype: 'component',
            cls: 'app-header-title',
            html: document.title,
            flex: 1
        }
    ]
});
