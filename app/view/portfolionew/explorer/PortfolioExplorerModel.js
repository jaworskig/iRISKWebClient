Ext.define('iRISKClient.view.portfolionew.explorer.PortfolioExplorerlModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.portfolioexplorernew',
    stores: {
        treeStore: {
            type: 'tree',
            proxy: {
                type: 'ajax',
                url: Settings.HostUrl + '/PortfolioExplorer/PortfolioTreeData?root=Default%20Root'
            },
            root: {
                expanded: true
            }
        }
    }
});