Ext.define('iRISKClient.controller.Main', {
    extend: 'Ext.app.Controller',
    listen: {
        global: {
            authenticate: 'onAuthenticate',
            adddashboardview: 'onAddDashboardView'
        }
    },
    refs: [
        {
            ref: 'mainArea',
            selector: 'app-main #mainArea'
        }
    ],

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

    },

    onAddDashboardView: function (config, checkPosition) {
        var me = this,
            tab = me.getActiveTab(),
            columnIndex;

        if (!checkPosition) {
            tab.addView(config);
        }
        else {
            columnIndex = (tab.columnWidths != undefined) ? tab.columnWidths.length : 0;
            tab.addView(config, columnIndex);
        }
    },
    getActiveTab: function () {
        var me = this,
            mainArea = me.getMainArea(),
            workspace = mainArea.getActiveTab(),
            mainPanel = workspace.lookupReference('centerPanel');

        return mainPanel.getActiveTab();
    }
})