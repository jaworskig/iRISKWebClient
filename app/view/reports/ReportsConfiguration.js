Ext.define('iRISKClient.view.reports.ReportsConfigurator', {
    extend: 'Ext.form.Panel',
    xtype: 'report_config',
    requires: [
        'iRISKClient.view.reports.ReportsConfigurationController',
        'iRISKClient.view.reports.ReportConfigurationModel'
    ],
    controller: 'reportsconfigcontroller',
    viewModel: {
        type: 'reportconfiguration'
    }, 

    itemId: 'configItem',
    layout: 'fit',

    items: [
    {
        xtype: 'tabpanel',
        items: [
        {
            title: 'Configuration',
            items: [
            {
                xtype: 'fieldset',
                margin: '5 0 5 0', // (top, right, bottom, left)
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                {
                    name: 'ReportName',
                    fieldLabel: 'Report Name',
                    margin: '5 0 5 0',
                    msgTarget: 'under',
                    bind: {
                        value: '{report.ReportName}'
                    }
                }, {
                    xtype: 'combobox',
                    name: 'ReportType',
                    fieldLabel: 'Report Type',
                    bind: {
                        store: '{reportTypeList}',
                        value: '{report.ReportType}'
                    },
                    displayField: 'Text',
                    valueField: 'Value'

                }, {
                    xtype: 'combobox',
                    name: 'Currency',
                    fieldLabel: 'Currency',
                    bind: {
                        store: '{currencyList}',
                        value: '{report.Currency}'
                    },
                    displayField: 'Text',
                    valueField: 'Value'

                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'container',
                        flex: 1
                    }, {
                        name: 'ShowBooksPortfolio',
                        xtype: 'checkbox',
                        bind: {
                            value: '{report.ShowBooksPortfolio}'
                        },
                        fieldLabel: 'Books/Portfolio',
                        margin: '0 10 0 0',
                        width: 120
                    }, {
                        name: 'ShowVaR',
                        xtype: 'checkbox',
                        bind: {
                            value: '{report.ShowVaR}'
                        },
                        fieldLabel: 'Show VaR',
                        width: 120
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'container',
                        flex: 1
                    }, {
                        name: 'UseMTMproduct',
                        xtype: 'checkbox',
                        bind: {
                            value: '{report.UseMTMproduct}'
                        },
                        fieldLabel: 'MTM Product',
                        margin: '0 10 0 0',
                        width: 120
                    }, {
                        name: 'UseMTM_NPV',
                        xtype: 'checkbox',
                        bind: {
                            value: '{report.UseMTM_NPV}'
                        },
                        fieldLabel: 'MTM NPV',
                        width: 120
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'container',
                        flex: 1
                    }, {
                        name: 'CherryPicking',
                        xtype: 'checkbox',
                        bind: {
                            value: '{report.CherryPicking}'
                        },
                        fieldLabel: 'Cherry picking',
                        width: 120
                    }]
                }, {
                    xtype: 'combobox',
                    name: 'GroupBy',
                    bind: {
                        store: '{groupByList}',
                        value: '{report.GroupBy}'
                    },
                    fieldLabel: 'Group By',
                    displayField: 'Text',
                    valueField: 'Value'
                }, {
                    xtype: 'combobox',
                    name: 'TimeProduct',
                    bind: {
                        store: '{timeProductList}',
                        value: '{report.TimeProduct}'
                    },
                    fieldLabel: 'Time/Product',
                    displayField: 'Text',
                    valueField: 'Value'
                }, {
                    xtype: 'combobox',
                    name: 'RunAs',
                    bind: {
                        store: '{runAsList}',
                        value: '{report.RunAs}'
                    },
                    fieldLabel: 'Run As',
                    displayField: 'Text',
                    valueField: 'Value'
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 8 0',// (top, right, bottom, left)
                    items: [{
                        xtype: 'container',
                        flex: 1
                    }, {
                        name: 'StoreExcel',
                        xtype: 'checkbox',
                        bind: {
                            value: '{report.StoreExcel}'
                        },
                        fieldLabel: 'StoreExcel',
                        margin: '0 10 0 0',
                        width: 120
                    }, {
                        name: 'StorePdf',
                        xtype: 'checkbox',
                        bind: {
                            value: '{report.StorePdf}'
                        },
                        fieldLabel: 'StorePdf',
                        width: 120
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        name: 'IssueDate1',
                        xtype: 'datefield',
                        bind: {
                            value: '{report.IssueDate1}'
                        },
                        width: 220,
                        format: 'Y-m-d',
                        submitFormat: 'd/m/Y',
                        margin: '0 10 0 0',
                        fieldLabel: 'Issue Date 1/2'
                    }, {
                        name: 'IssueDate2',
                        xtype: 'datefield',
                        bind: {
                            value: '{report.IssueDate2}'
                        },
                        width: 100,
                        format: 'Y-m-d',
                        submitFormat: 'd/m/Y'
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 5 0',
                    items: [{
                        name: 'FromDate',
                        xtype: 'datefield',
                        bind: {
                            value: '{report.FromDate}'
                        },
                        width: 220,
                        format: 'Y-m-d',
                        submitFormat: 'd/m/Y',
                        margin: '0 10 0 0',
                        fieldLabel: 'Date From/To'

                    }, {
                        name: 'ToDate',
                        xtype: 'datefield',
                        bind: {
                            value: '{report.ToDate}'
                        },
                        width: 100,
                        format: 'Y-m-d',
                        submitFormat: 'd/m/Y'
                    }]
                }]
            }]
        }, {
            title: 'Columns',
            items: [{
                xtype: 'fieldset',
                // isFormField: false,
                scrollable: 'y',
                margin: '5 0 5 0',// (top, right, bottom, left)
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },

                items: [{
                    xtype: 'checkboxgroup',
                    name: 'columns',
                    reference: 'columnsCheckGroup',
                    columns: 1
                }]
            }]
        }, {
            title: 'Portfolio',
            items: [{
                xtype: 'fieldset',
                //   isFormField: false,
                scrollable: 'y',
                margin: '5 0 5 0',// (top, right, bottom, left)
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'checkboxgroup',
                    reference: 'portfolioCheckGroup',
                    name: 'portfolio',
                    columns: 1
                }]
            }]
        }, {
            title: 'Filters',
            items: [{
                xtype: 'fieldset',
                //  isFormField: false,
                scrollable: 'y',
                margin: '5 0 5 0',// (top, right, bottom, left)
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'checkboxgroup',
                    name: 'filters',
                    reference: 'filterCheckGroup',
                    columns: 1
                }]
            }]
        }]
    }],

    buttons: [{
        text: 'Update Report',
        refernce: 'updateBtn',
      //  hidden: me.reportId > 0,
        handler: 'onUpdateClick'
    }, {
        text: 'Save Report',
        handler: 'onSaveClick'
    }, {
        text: 'Cancel',
        handler: 'onCancelClick'
    }]
});