var listRenderer = function(value, metaData, record, rowIndex, colIndex, store, view) {
    metaData.tdStyle = 'margin: 0; padding: 0;';

    var html = '';
    if (colIndex == 0) {
        var MTM = record.data.MTM ? record.data.MTM.format(0, 3) : "&nbsp;";
        var Chg = iRISKClient.Counterparts.Labels.Chg + (record.data.Change ? record.data.Change.format(0, 3) : "&nbsp;");
        var ChgPct = iRISKClient.Counterparts.Labels.ChgPct + (record.data.ChangePercent ? record.data.ChangePercent.format(0, 3) : "&nbsp;");

        var chgColorClass = "counterparts-chg-neutral";
        if (record.data.Change && record.data.Change > 0)
            chgColorClass = "counterparts-chg-positive";
        else if (record.data.Change && record.data.Change < 0)
            chgColorClass = "counterparts-chg-negative";

        html = '<OL>'
             + '    <LI class="counterparts-name">' + value + '</LI>'
             + '    <LI class="counterparts-mtm">'
             + '        <SPAN class="counterparts-label">' + iRISKClient.Counterparts.Labels.MTM + '</SPAN>'
             + '        <SPAN class="counterparts-mtm-value">' + MTM + '</SPAN>'
             + '    </LI>'
             + '</OL>'
             + '<DIV class="counterparts-change ' + chgColorClass + '">'
             + '    <DIV class="counterparts-chgpct">' + ChgPct + '</DIV>'
             + '    <DIV class="counterparts-chg">' + Chg + '</DIV>'
             + '</DIV>';
    }
    else {
        var DeltaV = record.data.DeltaV ? record.data.DeltaV.format(0, 3) : "&nbsp;";
        var VaR = record.data.VaR ? record.data.VaR.format(0, 3) : "&nbsp;";
        var CVaR = record.data.CVaR ? record.data.CVaR.format(0, 3) : "&nbsp;";

        html = '<OL>'
             + '    <LI class="counterparts-values">'
             + '        <SPAN class="counterparts-label">' + iRISKClient.Counterparts.Labels.DeltaV + '</SPAN>'
             + '        <SPAN class="counterparts-deltav">' + DeltaV + '</SPAN>'
             + '    </LI>'
             + '    <LI class="counterparts-values">'
             + '        <SPAN class="counterparts-label">' + iRISKClient.Counterparts.Labels.VaR + '</SPAN>'
             + '        <SPAN class="counterparts-var">' + VaR + '</SPAN>'
             + '    </LI>'
             + '    <LI class="counterparts-values">'
             + '        <SPAN class="counterparts-label">' + iRISKClient.Counterparts.Labels.CVaR + '</SPAN>'
             + '        <SPAN class="counterparts-cvar">' + CVaR + '</SPAN>'
             + '    </LI>'
             + '</OL>';
    }
    return html;
};

var counterpartsListFeedToDataIndex = {
    'productname': 'Name',
    'mtm': 'MTM',
    'chg': 'Change',
    'chgpct': 'ChangePercent',
    'deltavalue': 'DeltaV',
    'var': 'VaR',
    'cvar': 'CVaR'
};

Ext.define('iRISKClient.view.counterparts.CounterpartsExplorer', {
    extend: 'Ext.container.Container',
    xtype: 'counterpartsExplorer',
    controller: 'counterpartsExplorerController',
    requires: [
      'Ext.grid.*',
      'Ext.data.*',
      'Ext.layout.container.HBox',
      'Ext.grid.column.Action',
      'iRISKClient.util.GlobalSettings',
      'iRISKClient.view.counterparts.CounterpartsExplorerController'
    ],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function () {
        Ext.apply(this, {
            items: [{
                reference: 'counterpartsGridPanel',
                xtype: 'gridpanel',
                layout: 'fit',
                width: '100%',
                viewConfig: { cls: 'counterparts-grid-panel' },
                hideHeaders: true,
                columns: [
                    { dataIndex: 'Name', width: '60%', renderer: listRenderer },
                    { dataIndex: 'Name', width: '40%', renderer: listRenderer }
                ],
                store: new iRISKClient.store.CounterpartsStore(),
                handleLiveUpdateFeed: function (message) {
                    if (message.ProductName && message.ProductName.split("|").length > 1) {
                        if (message.ProductName.split("|")[1].split(":")[0] == "Counterpart" && message.ProductName.split("|")[1].split(":").length > 1) {
                            var counterpartName = message.ProductName.split("|")[1].split(":")[1];
                            var store = this.getStore();
                            var record = store.findRecord('Name', counterpartName);
                            if (record) {
                                store.suspendAutoSync();
                                for (var valIndex = 0; valIndex < message.Data.length; valIndex++) {
                                    var field = counterpartsListFeedToDataIndex[message.Data[valIndex].Name.toLowerCase()];
                                    if (field) {
                                        var value = message.Data[valIndex].Values[0];
                                        record.set(field, value);
                                    }
                                }
                                store.commitChanges();
                                store.resumeAutoSync();
                            }
                        }
                    }
                },

                listeners: {
                    afterrender: function (context, eOpts) {
                        var counterparts = context.store.data.items.map(function(item) {
                            return item.data.Name;
                        });
                        for (var i = 0; i < counterparts.length; i++) {
                            HubService.SubscribeFeed("Total|Counterpart:" + counterparts[i], context);
                        }
                    },
                    rowdblclick: 'onGroupDblClick',

                    itemcontextmenu: 'showContextMenu'
                }

            }]
        });

        this.callParent();
    }

});
