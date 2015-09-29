Ext.define('iRISKClient.view.portfolionew.explorer.PortfolioExplorer', {
    extend: 'Ext.tree.Panel',
    xtype: 'portfolioexplorernew',
    requires: [
        'iRISKClient.view.portfolionew.explorer.PortfolioExplorerController',
        'iRISKClient.view.portfolionew.explorer.PortfolioExplorerlModel'
    ],
    controller: 'portfolioexplorernew',
    viewModel: {
        type: 'portfolioexplorernew'
    },
    bind: '{treeStore}',
    rootVisible: false,
    hideHeaders: true,
    useArrows: true,
    viewConfig: {
        cls: 'portfolios-tree-panel'
    },
    columns: [
        {
            xtype: 'treecolumn',
            dataIndex: 'text',
            renderer: 'treeRenderer'
        }
    ],
    listeners: {
        rowdblclick: 'onGroupDblClick',
        itemcontextmenu: 'onItemContextMenu'
    }
});