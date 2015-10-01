Ext.define('iRISKClient.controller.Main', {
    extend: 'Ext.app.Controller',
    listen: {
        global: {
            authenticate: 'onAuthenticate'
        }
    },

    onAuthenticate: function(username, password, success, failure){

        Ext.Ajax.request({
            url: Settings.HostUrl + 'Account/LoginSencha?userName=' + username + '&password=' + password,
            success: function (response, opts) {
                var result = Ext.decode(response.responseText);

                if (result.IsAuthenticated) {

                    localStorage.setItem("UserName", username);
                    localStorage.setItem("Password", password);

                    success();
                }

            },
            failure: failure
        });

    }
})