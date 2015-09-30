Ext.define('iRISKClient.Application', {
    extend: 'Ext.app.Application',
    name: 'iRISKClient',

    controllers: [
        'Main'
    ],

    views: [
        'livepositionsnew.LivePositions',
        'livepricesnew.LivePrices',
        'login.Login',
        'mainnew.Main'
    ],

    launch: function () {
        var me = this,
            params = Ext.Object.fromQueryString(window.location.hash.replace('#', ''));

        // Check whether the browser supports LocalStorage
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var supportsLocalStorage = Ext.supports.LocalStorage,
            loggedIn;

        if (!supportsLocalStorage) {

            // Alert the user if the browser does not support localStorage
            Ext.Msg.alert('Your Browser Does Not Support Local Storage');
            return;
        }

        if(params.workspace && params.username && params.password){

            /* Clear the params on the url and change the page title. */
            window.location.hash = '';
            document.title = 'iRISKClient | Workspace ' + params.workspace;
            Settings.workspace = params.workspace;

            /* Fire the global application event the Main controller is listening for that allows
             the user to authenticate. */
            Ext.GlobalEvents.fireEvent('authenticate', params.username, params.password, me.onAuthenticated.bind(me),
                function(response){
                    Ext.widget('login');
                });
        }
        else {

            /* IMPORTANT: This request is probably useless because the application is always showing
               the login window even if the user already authenticated.
               Grzegorz should double check if this is longer required and delete it if not. */
            Ext.Ajax.request({
                url: Settings.HostUrl + 'Account/LoginSenchaIsAuthenticated',
                success: function (response, opts) {
                    var obj = Ext.decode(response.responseText);

                    if (obj.IsAuthenticated) {

                        localStorage.setItem("UserName", obj.UserName);

                        me.onAuthenticated();
                    }
                    else {
                        Ext.widget('login');
                    }
                },

                failure: function (response, opts) {
                    alert('server-side failure with status code ' + response.status);
                }
            });

        }
    },

    onAuthenticated: function(){
        Ext.widget('app-main');
    }
});