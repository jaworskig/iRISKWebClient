Ext.define("iRISKClient.view.login.Login", {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'iRISKClient.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    //bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,
    shadow: false,
    //header: false,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            flex: 1,
            name: 'username',
            fieldLabel: 'Username',
            value: "Vegar",
            allowBlank: false
        }, {
            xtype: 'textfield',
            flex: 1,
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            value: "default",
            allowBlank: false
        }, {
            xtype: 'displayfield',
            name: 'info',
            hideEmptyLabel: false,
            fieldStyle: {
                color: '#ff0000'
            }
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    },
    listeners: {
        afterrender: function (panel) {
            var header = panel.header;
            header.setHeight(25);
          
        }
    }
});