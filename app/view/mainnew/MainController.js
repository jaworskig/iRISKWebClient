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
            workspaceBtn = this.lookupReference('workspaceBtn' + Settings.workspace);

        workspaceBtn.toggle(true, true);

        me.onCheckWsState();
    },

    onConnectionStateChange: function(status){
        this.setWsState(status);
    },

    // ANDREA: Not really clear the logic here, so I need to leave this as it is.
    onReinitializeFeeds: function(){
        var me = this,
            workspace = me.lookupReference('workspace'),
            mainPanel = workspace.lookupReference('centerPanel'),
            container, feedProducts;

        console.log("Subscribe portfolio feed list");
        HubService.ReSubscribeFeedPortfolio();

        if (mainPanel) {

            mainPanel.items.items.forEach(function (tab) {

                tab.items.items.forEach(function (item) {

                    if (item.initialCls == "x-dashboard-column") {

                        var columnItem = item.items.items[0];

                        if (columnItem && columnItem.items) {

                            container = columnItem.items.items[0];
                            feedProducts = container.feedProducts;

                            if (feedProducts) {

                                console.log("Subscribe feed list for conteiner id:" + container.id);
                                HubService.SubscribeFeedArray(feedProducts, container);
                            }
                        }

                    }

                });
            });
        }

    },

    onAfterRender: function(){
        iRISKClient.App.LayoutProvider.restoreLayout();
    },

    onWorkspaceBtnClick: function(btn, state){
        if(state) {
            var workspace = btn.getText(),
                oldBtn = this.lookupReference('workspaceBtn' + Settings.workspace);

            // Do not open a tab for the same workspace
            if(Settings.workspace != workspace) {
                this.openWorkspacePopup(workspace);

                // Restore the current workspace button as pressed
                btn.toggle(false, true);
                oldBtn.toggle(true, false);
            }
        }
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