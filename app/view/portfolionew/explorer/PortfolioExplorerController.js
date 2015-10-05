Ext.define('iRISKClient.view.portfolionew.explorer.PortfolioExplorerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.portfolioexplorernew',
    requires: [
        'iRISKClient.view.portfolionew.explorer.menu.ContextMenu'
    ],
    listen: {
        controller: {
            '*': {
                portfoliorootchange: 'onPortfolioRootChange'
            }
        }
    },

    onPortfolioRootChange: function(root){
        var me = this,
            view = me.getView(),
            store = view.getStore();

        store.load({
            url: Settings.HostUrl + 'PortfolioExplorer/PortfolioTreeData?node=root&root=' + root,
            callback: function(records){
                me.updateSnapshotData(root);
            }
        });
    },

    onGroupDblClick: function (tree, record) {
        Ext.GlobalEvents.fireEvent('adddashboardview',{
            type: 'livepositions',
            title: record.get('text')
        }, true);
    },

    onItemContextMenu: function(view, list, node, rowIndex, e){
        var me = this,
            menu = Ext.widget('portfolioexplorercontextmenu',{
                listData: list.data
            });

        menu.showAt(e.getX(), e.getY());

        e.preventDefault();
    },

    updateSnapshotData: function (root) {
        var me = this;

        Ext.Ajax.request({
            url: Settings.HostUrl + 'PortfolioExplorer/PortfolioTreeSnapshot?root=' + root,
            method: 'POST',
            success: me.onUpdateSnapshotSuccess,
            failure: me.onUpdateSnapshotFailure,
            scope: me
        });
    },

    onUpdateSnapshotSuccess: function(snapshot){
        var me = this,
            view = me.getView(),
            store = view.getStore(),
            length = store.getCount(),
            snapshot = Ext.decode(snapshot.responseText),
            i = 0, groups = [], record, groupId, newData;

        for (; i < length; i++) {
            record = store.getAt(i);
            groupId = record.get('groupId');

            if (snapshot[groupId]) {
                record = store.findRecord('text', snapshot[groupId].Name);
                newData = snapshot[groupId];

                if (record) {
                    record.set({
                        MTM: newData.MTM,
                        VaR: newData.VaR,
                        Change: newData.Change,
                        ChangePercent: newData.ChangePercent
                    });
                }
            }
        }

        store.each(function(item){
            groups.push("Total|" + item.get('text'));
        });

        HubService.SubscribeFeedPortfolio(groups, me);
    },

    onUpdateSnapshotFailure: function(){
        alert("Failed to get snapshot data for porfolios!");
    },

    handleLiveUpdateFeed: function (message) {
        var me = this,
            store = me.getStore('treeStore'),
            parts = message.ProductName ? message.ProductName.split("|") : [],
            i = 0, groupName, record, field, value;

        if (parts.length > 1) {

            if (parts[0] == "Total") {
                groupName = parts[1];
                record = store.findRecord('text', groupName);

                if (record) {

                    for (; i < message.Data.length; i++) {

                        field = me.getDataIndex(message.Data[i].Name.toLowerCase());

                        if (field) {
                            value = message.Data[i].Values[0];
                            record.set(field, value);
                        }
                    }
                }
            }
        }
        store.commitChanges();
    },

    getDataIndex: function(key){
        var map = {
            productname: 'text',
            mtm: 'MTM',
            var: 'VaR',
            chg: 'Change',
            chgpct: 'ChangePercent'
        };

        return map[key];
    },

    treeRenderer: function(value, metaData, record, rowIndex, colIndex, store, view){
        var format = Ext.String.format,
            data = record.getData(),
            tableClass = data.isBook ? 'portfolios-tree-book' : 'portfolios-tree-portfolio',
            currency = data.currency,
            noCalc = data.NoCalculation,
            indicatorClass, html, MTM, share, VaR, change;

        MTM = data.MTM ? PLB.MTM + data.MTM.format(0, 3) : "&nbsp;";

        share = data.OwnershipShare && data.OwnershipShare != 100 ? data.OwnershipShare.toString() + "%" : "&nbsp;";
        VaR = data.VaR ? PLB.VaR + data.VaR.format(0, 3) : '';
        change = (data.Change ? PLB.Chg + data.Change.format(0, 3) : "&nbsp;") + (data.ChangePercent ? "&nbsp;&nbsp;" + PLB.ChgPct + data.ChangePercent.format(0, 3) : "");

        if (!noCalc && data.Change && data.Change > 0){
            indicatorClass = " portfolios-tree-positive";
        }
        else if (!noCalc && data.Change && data.Change < 0){
            indicatorClass = " portfolios-tree-negative";
        }
        else if (!noCalc){
            indicatorClass = " portfolios-tree-neutral";
        }

        html = format('<div class="{0}"><div class="portfolios-tree-name">{1} [{2}]</div><div class="portfolios-tree-mtm {3}">{4}</div>',
            tableClass, value, currency, indicatorClass, MTM);

        if (noCalc){
            html += '<div class="portfolios-tree-var">&nbsp;</div><div class="portfolios-tree-change">&nbsp;</div></div>';
        }
        else if (share == "&nbsp;"){
            html += format('<div class="portfolios-tree-var">{0}</div><div class="portfolios-tree-change {1}">{2}</div></div>', VaR, indicatorClass, change);
        }
        else{
            html += format('<div class="portfolios-tree-share">{0}&nbsp;</div><div class="portfolios-tree-var">{1}</div><div class="portfolios-tree-change {2}">{3}</div></div>', share, VaR, indicatorClass, change);
        }

        return html;
    }
});
