Ext.define('iRISKClient.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function (sender) {

        var me = this;
        var form = this.lookupReference('form');

        var name = form.getForm().findField("username").getValue();
        var password = form.getForm().findField("password").getValue();


        Ext.Ajax.request({
            url: Settings.HostUrl + 'Account/LoginSencha?userName=' + name + '&password=' + password,
            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);

                if (obj.IsAuthenticated) {

                    localStorage.setItem("UserName", name);

                    // Remove Login Window
                    me.getView().destroy();

                    // Add the main view to the viewport
                    //Ext.widget('app-main');
                    Ext.create({ xtype: 'app-main' });

                } else {
                    form.getForm().findField("info").setValue(obj.Description);
                }

            },

            failure: function (response, opts) {
                form.getForm().findField("info").setValue('server-side failure with status code ' + response.status);
            }
        });
    }
});