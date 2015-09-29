Ext.define('iRISKClient.view.portfolionew.panel.PortfolioPanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.portfoliopanelnew',
    data: {
        roots: [
            'Default Root',
            'Empty Root'
        ],
        currentRoot: 'Default Root'
    }
});