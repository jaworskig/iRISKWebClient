Ext.define('iRISKClient.Application', {
    extend: 'Ext.app.Application',
    name: 'iRISKClient',

    requires: [
        'iRISKClient.overrides.data.Connection'
    ],

    controllers: [
        'Main'
    ],

    views: [
        'livepositionsnew.LivePositions',
        'livepricesnew.LivePrices',
        'login.Login',
        'mainnew.Main'
    ],

    lastUpdateCount: 0,

    iRISKServerConnected: true,

    lastServerUpdateCount: 0,

    launch: function () {
        var me = this,
            params = Ext.Object.fromQueryString(window.location.hash.replace('#', '')),
            username = params.username || '',
            password = params.password || '';

        Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

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

        if(params.workspace){

            /* Clear the params on the url (except workspace) and change the page title. */
            window.location.hash = 'workspace=' + params.workspace;
            document.title = 'iRISKClient | Workspace ' + params.workspace;
            Settings.workspace = params.workspace;

            /* Fire the global application event the Main controller is listening for that allows
             the user to authenticate. */
            Ext.GlobalEvents.fireEvent('authenticate', username, password, me.onAuthenticated.bind(me),
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

        // Start the clock activity
        var task = Ext.TaskManager.start({
            run: me.onUpdateClock,
            interval: 10000
        });
    },

    onUpdateClock: function(){
        var me = this,
            dateNow = Date.now(),
            dateDiff = (dateNow - HubService.lastServerUpdate),
            connectionState = 'no connection';

        if (HubService.lastServerUpdate) {

            console.log("dateDiff: " + dateDiff);

            if (dateDiff > 20000) {
                me.iRISKServerConnected = false;

                console.log("dateDiff: " + dateDiff);
                console.log("No connection to server");
            } else {

                if (!me.iRISKServerConnected) {
                    me.iRISKServerConnected = true;
                    connectionState = 'connected';


                    if (me.lastServerUpdateCount > HubService.serverUpdateCount) {

                        console.log("lastServerUpdateCount > HubService.serverUpdateCount: " + me.lastServerUpdateCount + " > " + HubService.serverUpdateCount);

                        me.lastServerUpdateCount = HubService.serverUpdateCount;

                        Ext.GlobalEvents.fireEvent('reinitializefeeds');
                    }

                } else {
                    me.lastServerUpdateCount = HubService.serverUpdateCount;
                }
            }
        }

        Ext.GlobalEvents.fireEvent('connectionstatechange', connectionState);
    },

    onAuthenticated: function(){
        Ext.widget('app-main');
    }
});