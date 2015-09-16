Ext.define('iRISKClient.view.portfolio.PortfoliosPanel', {
    extend: 'Ext.container.Container',
    xtype: 'portfoliosPanel',
    requires: [
      'Ext.layout.container.VBox',
      'iRISKClient.Application.GlobalSettings',
      'iRISKClient.Portfolio.Labels'
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    config: {
        portfoliosRoots: ['Default Root', 'Empty Root'],
        currentPortfoliosRoot: 'Default Root'
    },

    initComponent: function () {
        var roots = this.getPortfoliosRoots();
        var currentRoot = this.getCurrentPortfoliosRoot();

        Ext.apply(this, {
            items: [{
                xtype: 'tabpanel',
                flex: 1,
                stateful: true,
                stateId: 'portfoliosPanelTabs',
                headerPosition: 'left',
                items: [{
                    xtype: "portfoliosExplorer",
                    title: currentRoot
                 }, {
                    title: iRISKClient.Portfolio.Labels.Live,
                    html: "."
                }, {
                    xtype: "curvesFoldersTreeList",
                    title: iRISKClient.Portfolio.Labels.Curves,
                    curveTreeType: "Portfolios",
                    curveTreeRoot: currentRoot
                }],
                listeners: {
                    afterrender: function(panel) {
                        var bar = panel.tabBar;
                        var menu = [];
                        for (var i = 0; i < roots.length; i++) {
                            var menuItem = {
                                text: roots[i],
                                listeners: {
                                    click: function(){
                                        var tab = this.parentMenu.ownerCmp.container.component.items.items[1];
                                        tab.setText(this.text);
                                        tab.card.changeRoot(this.text);
                                        var curvesTab = this.parentMenu.ownerCmp.container.component.items.items[3];
                                        curvesTab.card.changeRoot(this.text);
                                    }
                                }
                            }
                            menu.push(menuItem);
                        }
                        bar.insert(0, [{
                            xtype: 'button',
                            iconCls: 'icon-menu',
                            arrowCls: '',
                            menu: menu
                        }]);
                    }
                }
            }]
        });
        this.callParent();
    }

});
