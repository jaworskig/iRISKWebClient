Ext.define('iRISKClient.view.formulas.FormulaEditor', {
    extend: 'Ext.container.Container',
    xtype: 'formulaeditor',
    controller: 'formulaEditorController',
    requires: [
      'Ext.tree.*',
      'Ext.data.*',
      'Ext.layout.container.Border',
      'Ext.panel.Tool',
      'iRISKClient.util.GlobalSettings'
    ],
    height: 400,
    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true
    },

    initComponent: function () {
        var cfg = this.$initParent._partConfig.config;
        var params = '?id=' + cfg.id + '&type=' + cfg.type + '&name=' + encodeURIComponent(cfg.name) + '&issue=' + cfg.issue;
        Ext.apply(this, {
            tools: [{
                type: 'pin',
                callback: function(panel, tool, event) {
                    var i = 0;
                    //toolEl.ownerCt.items[0].hidden = false;
                }
            }],
            items: [{
                xtype: 'panel',
                width: '40%',
                region: 'west',
                header: false,
                collapsed: false,
                hidden: false,
                layout: 'border',
                referenceHolder: true,
                bodyBorder: false,
                defaults: {
                    collapsible: true,
                    split: true
                },
                items: [{
                    xtype: 'panel',
                    region: 'center',
                    header: false,
                    scrollable: true,
                    items: [{
                        xtype: 'treepanel',
                        store: new Ext.data.TreeStore({
                            proxy: {
                                type: 'ajax',
                                url: Settings.HostUrl + 'Formula/FormulaData' + params
                            }
                        }),
                        rootVisible: false,
                        viewConfig: {
                            plugins: {
                                ptype: 'treeviewdragdrop',
                                ddGroup: 'formulaEditorDragAndDrop'
                            },
                            listeners: {
                                beforeDrop: 'beforeDropOnFormulaTree',
                                nodedragover: 'nodeDragOverFormulaTree'
                            }
                        },

                        listeners: {
                            itemcontextmenu: 'formulaTreeItemContextMenu',
                            selectionchange: 'formulaTreeSelectionChange'
                        }
                    }]
                },
                {
                    xtype: 'panel',
                    reference: 'propertiesPanel',
                    region: 'south',
                    height: 100,
                    header: false,
                    scrollable: true,
                    referenceHolder: true,
                    items: [{
                        xtype: 'combobox',
                        reference: 'issueDateCombo',
                        fieldLabel: 'Issue date',
                        editable: false,
                        margin: 10,
                        hidden: true,
                        store:  [],
                        listeners: {
                            select: 'onForecastIssueDate'
                        }
                    },
                    {
                        xtype: 'numberfield',
                        reference: 'functionDoubleParameter',
                        decimalPrecision: 10,
                        fieldLabel: 'Value',
                        margin: 10,
                        hidden: true,
                        listeners: {
                            change: 'onFunctionValueNumber'
                        }
                    }]
                }]
            },
            {
                xtype: 'container',
                region: 'center',
                title: this.$initParent.title,
                items: [{
                    xtype: 'formulaChart',
                    url: Settings.HostUrl + 'Formula/FormulaCurveData' + params,
                    listeners: {

                    }
                }]
            }]
        }); 
        this.callParent();
    }
});
