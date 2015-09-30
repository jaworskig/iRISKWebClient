Ext.define('iRISKClient.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function (sender) {
        var me = this,
            form = me.lookupReference('form'),
            baseForm = form.getForm(),
            name = baseForm.findField("username").getValue(),
            password = baseForm.findField("password").getValue();

        /* Fire the global application event the Main controller is listening for that allows
           the user to authenticate. */
        Ext.GlobalEvents.fireEvent('authenticate', name, password, me.onAuthenticated.bind(this),
            function(response){
                baseForm.findField("info").setValue('server-side failure with status code ' + response.status);
            });

    },

    onAuthenticated: function(){
        this.getView().destroy();
        Ext.create({ xtype: 'app-main' });
    }
});