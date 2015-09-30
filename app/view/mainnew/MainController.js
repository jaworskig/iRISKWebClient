Ext.define('iRISKClient.view.mainnew.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    workspacePopups: [],

    init: function(){
        var me = this,
            workspace = Number.parseInt(Settings.workspace - 1),
            tabBar = me.lookupReference('tabBar'),
            tab = tabBar.getComponent(workspace);

        tabBar.setActiveTab(tab, true);
    },

    onItemChange: function(tabbar, tab){
        var workspace = tab.getText();
        this.openWorkspacePopup(workspace);
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