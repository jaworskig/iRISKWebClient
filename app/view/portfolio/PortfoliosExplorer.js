var treeRenderer = function(value, metaData, record, rowIndex, colIndex, store, view) {
    metaData.tdStyle = 'margin: 0; padding: 0;';
    
    var tableClass = "portfolios-tree-portfolio";
    if (record.data.isBook) {
        tableClass = "portfolios-tree-book";
    }
    var currency = record.data.currency;
    var noCalc = record.data.NoCalculation;
    var MTM = record.data.MTM ? iRISKClient.Portfolio.Labels.MTM + record.data.MTM.format(0, 3) : "&nbsp;";
    var share = record.data.OwnershipShare && record.data.OwnershipShare != 100 ? record.data.OwnershipShare.toString() + "%" : "&nbsp;";
    var VaR = record.data.VaR ? iRISKClient.Portfolio.Labels.VaR + record.data.VaR.format(0, 3) : "";
    var change = (record.data.Change ? iRISKClient.Portfolio.Labels.Chg + record.data.Change.format(0, 3) : "&nbsp;") + (record.data.ChangePercent ? "&nbsp;&nbsp;" + iRISKClient.Portfolio.Labels.ChgPct + record.data.ChangePercent.format(0, 3) : "");
    var indicatorClass = "";
    if (!noCalc && record.data.Change && record.data.Change > 0)
        indicatorClass = " portfolios-tree-positive";
    else if (!noCalc && record.data.Change && record.data.Change < 0)
        indicatorClass = " portfolios-tree-negative";
    else if (!noCalc)
        indicatorClass = " portfolios-tree-neutral";
    var html = '<DIV class="' + tableClass + '"><DIV class="portfolios-tree-name">' + value + ' [' + currency + ']</DIV><DIV class="portfolios-tree-mtm ' + indicatorClass + '">' + MTM + '</DIV>';
    if (noCalc)
        html = html + '<DIV class="portfolios-tree-var">&nbsp;</DIV><DIV class="portfolios-tree-change">&nbsp;</DIV></DIV>';
    else if (share == "&nbsp;")
        html = html + '<DIV class="portfolios-tree-var">' + VaR + '</DIV><DIV class="portfolios-tree-change ' + indicatorClass + '">' + change + '</DIV></DIV>';
    else
        html = html + '<DIV class="portfolios-tree-share">' + share + '&nbsp;</DIV><DIV class="portfolios-tree-var">' + VaR + '</DIV><DIV class="portfolios-tree-change ' + indicatorClass + '">' + change + '</DIV></DIV>';
    return html;
};

var portfoliosTreeFeedToDataIndex = {
    'productname': 'text',
    'mtm': 'MTM',
    'var': 'VaR',
    'chg': 'Change',
    'chgpct': 'ChangePercent'
};

Ext.define('iRISKClient.view.portfolio.PortfoliosExplorer', {
    extend: 'Ext.container.Container',
    xtype: 'portfoliosExplorer',
    controller: 'portfoliosExplorerController',
    requires: [
      'Ext.tree.*',
      'Ext.data.*',
      'Ext.layout.container.HBox',
      'Ext.grid.column.Action',
      'iRISKClient.Application.GlobalSettings',
      'iRISKClient.view.portfolio.PortfoliosExplorerController'
    ],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function () {

        var portfoliosRoot = "Default Root";
        Ext.apply(this, {
            items: [{
                reference: 'portfoliosTreePanel',
                xtype: 'treepanel',
                layout: 'fit',
                width: '100%',
                rootVisible: false,
                viewConfig: { cls: 'portfolios-tree-panel' },
                hideHeaders: true,
                useArrows: true,
                columns: [
                    { xtype: 'treecolumn', dataIndex: 'text', renderer: treeRenderer }
                ],
                store: new Ext.data.TreeStore({
                    proxy: {
                        type: 'ajax',
                        url: iRISKClient.Application.GlobalSettings.HostUrl + 'PortfolioExplorer/PortfolioTreeData?root=' + portfoliosRoot
                    },
                    listeners: {
                        load: function(){

                        }
                    }
                }),
                handleLiveUpdateFeed: function (message) {
                    if (message.ProductName && message.ProductName.split("|").length > 1) {

                        if (message.ProductName.split("|")[0] == "Total") {
                            var groupName = message.ProductName.split("|")[1];
                            var store = this.getStore();
                            var record = store.findRecord('text', groupName);

                            if (record) {
                             
                                for (var valIndex = 0; valIndex < message.Data.length; valIndex++) {

                                    var field = portfoliosTreeFeedToDataIndex[message.Data[valIndex].Name.toLowerCase()];
                                    if (field) {
                                        var value = message.Data[valIndex].Values[0];
                                        record.set(field, value);
                                    }
                                }
                            }
                        }
                    }
                },

                updateSnapshotData: function (context, root) {
                    $.ajax({
                        url: iRISKClient.Application.GlobalSettings.HostUrl + 'PortfolioExplorer/PortfolioTreeSnapshot?root=' + portfoliosRoot,
                        type: 'POST',
                        async: true,
                        cache: false,
                        success: function (snapshot) {
                            debugger;
                            var store = context.getStore();
                            store.suspendAutoSync();
                            for (var i = 0; i < store.data.items.length; i++) {
                                var groupId = store.data.items[i].data.groupId;
                                if (snapshot[groupId]) {
                                    var record = store.findRecord('text', snapshot[groupId].Name);
                                    if (record) {
                                        record.set('MTM', snapshot[groupId].MTM);
                                        record.set('VaR', snapshot[groupId].VaR);
                                        record.set('Change', snapshot[groupId].Change);
                                        record.set('ChangePercent', snapshot[groupId].ChangePercent);
                                    }                                    
                                }
                            }                                
                            store.commitChanges();
                            store.resumeAutoSync();
                            var groups = context.store.data.items.map(function(item) {
                                return "Total|" + item.data.text;
                            });
                            

                            HubService.SubscribeFeedPortfolio(groups, context);

                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            alert("Failed to get snapshot data for porfolios! " + textStatus);
                        }
                    });
                },

                listeners: {
                    afterrender: function (context, eOpts) {
                        context.updateSnapshotData(context, portfoliosRoot);

                    },
                    rowdblclick: 'onGroupDblClick',

                    itemcontextmenu: 'showContextMenu'
                }

            }]
        });
        this.callParent();
    },

    changeRoot: function (root) {
        var store = this.getReferences().portfoliosTreePanel.store;
        store.getProxy().setUrl(iRISKClient.Application.GlobalSettings.HostUrl + 'PortfolioExplorer/PortfolioTreeData?root=' + root);
        store.load({scope: this, callback: function(records, operation, success) {
            if (success)
                this.getReferences().portfoliosTreePanel.updateSnapshotData(this.items.items[0], root);
        }});
    }

});
