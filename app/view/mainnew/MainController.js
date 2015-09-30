Ext.define('iRISKClient.view.mainnew.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainnew',

    listen: {
        global: {
            connectionstatechange: 'onConnectionStateChange',
            reinitializefeeds: 'onReinitializeFeeds'
        }
    },

    workspacePopups: [],

    init: function(){
        var me = this,
            workspace = Number.parseInt(Settings.workspace),
            tabBar = me.lookupReference('tabBar'),
            tab = tabBar.getComponent(workspace);

        tabBar.setActiveTab(tab, true);

        me.onCheckWsState();
    },

    onConnectionStateChange: function(status){
        debugger;
        this.setWsState(status);
    },

    onReinitializeFeeds: function(){

        //TODO

    },

    onAfterRender: function(){
        //iRISKClient.App.LayoutProvider.restoreLayout();
    },

    onItemChange: function(tabbar, tab, oldTab){
        var workspace = tab.getText();
        this.openWorkspacePopup(workspace);
    },

    onProductSelect: function(combo, record){
        Ext.GlobalEvents.fireEvent('adddashboardview', {
            type: 'liveprices',
            title: 'product:' + record.get('name')
        }, true);
    },

    onCurveSelect: function(combo, record){
        Ext.GlobalEvents.fireEvent('adddashboardview', {
            type: 'chart',
            title: record.get('full_name')
        }, true);
    },

    onShowLogoutClick: function(btn){
        var me = this,
            view = me.getView();

        Ext.Ajax.request({
            url: Settings.HostUrl + 'Account/LogOff',
            success: function () {
                view.destroy();
                Ext.widget('login');
            },

            failure: function (response, opts) {
                alert('server-side failure with status code ' + response.status);
            }
        });
    },

    onShowSettingsClick: function () {
        var win = Ext.widget('settingwindow');
        win.show();
    },

    onStoreLayoutClick: function() {
        iRISKClient.App.LayoutProvider.storeLayout();
    },

    onCheckWsState: function (btn) {
        var btn = btn || this.lookupReference('statusButton');
        btn.setText('Status: ' + (HubService.socketHub.connection.state == 1 ? 'connected' : 'not connected'));
    },

    setWsState: function (status) {
        var btn = this.lookupReference('statusButton');
        btn.setText('Status: ' + status);
    },

    openWorkspacePopup: function(workspace){
        var me = this,
            href = window.location.href,
            pos = href.lastIndexOf('/'),
            baseUrl = href.substr(0, pos),
            params = Ext.urlEncode({
                workspace: workspace,
                username: localStorage.UserName,
                password: localStorage.Password
            }),
            url = baseUrl + '#' + params;

        me.workspacePopups.push(window.open(url));
    }
});