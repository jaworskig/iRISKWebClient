
//Ext.define('iRISKClient.model.TestModel',
//{
//    extend: 'Ext.data.Model',
//    fields: ['ReportId', 'ReportName', 'ReportType', 'ShowVaR', 'Currency']
//});


//Ext.define('iRISKClient.store.TestStore',
//{
//    extend: 'Ext.data.Store',
//    model: 'iRISKClient.model.TestModel',

//    alias: 'store.testStore',
//    storeId: 'testStore',

//    data: [
//    {
//        id: '123',
//        reportName: 'test report 123',
//        reportType: 0,
//        showVar: true
//    }]
//});


Ext.define('iRISKClient.view.reports.ReportsConfigurator', {
    extend: 'Ext.form.Panel',

    xtype: 'report_config',
    layout: 'fit',
    //height: 450,
    resultData: null,
    listeners: {
        afterrender: function (layout, eOpts) {
            // debugger;

            var store = Ext.create('Ext.data.Store', {
                //model: 'iRISKClient.model.TestModel',
                data: [this.resultData]
            });

            this.getForm().loadRecord(store.first());
        }
    },


    initComponent: function () {

        var me = this;
        //debugger;

        Ext.Ajax.request({
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Report/ConfigurationData?id=' + me.reportId + '&reportTempId=' + me.reportGUID,
            async: false,
            success: function (response, opts) {
                me.resultData = Ext.JSON.decode(response.responseText);

                me.resultData.IssueDate1 = me.resultData.IssueDate1.split('T')[0];
                me.resultData.IssueDate2 = me.resultData.IssueDate2.split('T')[0];
                me.resultData.FromDate = me.resultData.FromDate.split('T')[0];
                me.resultData.ToDate = me.resultData.ToDate.split('T')[0];
            }
        });

        Ext.apply(this, {

            items: [{
                xtype: 'tabpanel',
                items: [{
                    title: 'Configuration',
                    items: [{
                        xtype: 'fieldset',
                        //title: '-',
                        margin: '5 0 5 0',// (top, right, bottom, left)
                        defaultType: 'textfield',
                        layout: 'anchor',
                        defaults: {
                            anchor: '100%'
                        },
                        items: [{
                            name: 'ReportName',
                            fieldLabel: 'Report Name',
                            margin: '5 0 5 0',
                            msgTarget: 'under'
                        }, {
                            xtype: 'combobox',
                            name: 'ReportType',
                            fieldLabel: 'Report Type',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['Text', 'Value'],
                                data: me.resultData.ReportTypeList
                            }),
                            displayField: 'Text',
                            valueField: 'Value'

                        }, {
                            xtype: 'combobox',
                            name: 'Currency',
                            fieldLabel: 'Currency',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['Text', 'Value'],
                                data: me.resultData.CurrencyList
                            }),
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
                                fieldLabel: 'Books/Portfolio',
                                margin: '0 10 0 0',
                                width: 120
                            }, {
                                name: 'ShowVaR',
                                xtype: 'checkbox',
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
                                fieldLabel: 'MTM Product',
                                margin: '0 10 0 0',
                                width: 120
                            }, {
                                name: 'UseMTM_NPV',
                                xtype: 'checkbox',
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
                                fieldLabel: 'Cherry picking',
                                width: 120
                            }]
                        }, {
                            xtype: 'combobox',
                            name: 'GroupBy',
                            fieldLabel: 'Group By',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['Text', 'Value'],
                                data: me.resultData.GroupByList
                            }),
                            displayField: 'Text',
                            valueField: 'Value'
                        }, {
                            xtype: 'combobox',
                            name: 'TimeProduct',
                            fieldLabel: 'Time/Product',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['Text', 'Value'],
                                data: me.resultData.TimeProductList
                            }),
                            displayField: 'Text',
                            valueField: 'Value'
                        }, {
                            xtype: 'combobox',
                            name: 'RunAs',
                            fieldLabel: 'Run As',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['Text', 'Value'],
                                data: me.resultData.RunAsList
                            }),
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
                                fieldLabel: 'StoreExcel',
                                margin: '0 10 0 0',
                                width: 120
                            }, {
                                name: 'StorePdf',
                                xtype: 'checkbox',
                                fieldLabel: 'StorePdf',
                                width: 120
                            }]
                        }, {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [{
                                name: 'IssueDate1',
                                xtype: 'datefield',
                                width: 220,
                                format: 'Y-m-d',
                                submitFormat: 'd/m/Y',
                                margin: '0 10 0 0',
                                fieldLabel: 'Issue Date 1/2'

                            }, {
                                name: 'IssueDate2',
                                xtype: 'datefield',
                                width: 100,
                                format: 'Y-m-d',
                                submitFormat: 'd/m/Y'
                                //fieldLabel: '/'
                            }]
                        }, {
                            xtype: 'container',
                            layout: 'hbox',
                            margin: '0 0 5 0',
                            items: [{
                                name: 'FromDate',
                                xtype: 'datefield',
                                width: 220,
                                format: 'Y-m-d',
                                submitFormat: 'd/m/Y',
                                margin: '0 10 0 0',
                                fieldLabel: 'Date From/To'

                            }, {
                                name: 'ToDate',
                                xtype: 'datefield',
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
                            columns: 1,
                            items: me.createCheckBoxGroup(me.resultData.Columns)
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

                            name: 'portfolio',
                            columns: 1,
                            items: me.createCheckBoxGroup(me.resultData.Porfolios)
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
                            columns: 1,
                            items: me.createCheckBoxGroup(me.resultData.Filters)
                        }]
                    }]
                }]
            }],


            buttons: [{
                text: 'Update Report',
                refernce: 'updateBtn',
                hidden: me.reportId > 0,
                scope: this,
                handler: this.onUpdateClick
            }, {
                text: 'Save Report',
                scope: this,
                handler: this.onSaveClick
            }, {
                text: 'Cancel',
                scope: this,
                handler: this.onCancelClick
            }]

        });



        this.callParent();
    },

    createCheckBoxGroup: function (itemsGroup) {
        var checkBoxColumns = [];

        itemsGroup.forEach(function (record) {
            checkBoxColumns.push({
                boxLabel: record.Text,
                name: record.Text,
                checked: record.Selected
            });
        });

        return checkBoxColumns;
    },

    onUpdateClick: function () {
        this.editReport(true);
    },

    onSaveClick: function () {
        this.editReport(false);
    },


    editReport: function (update) {
        //debugger;
        var me = this;
        var form = this.getForm();

        var data = form.getValues(); //only fields with set value
        var formData = form.getFieldValues(); //all fields

        var formObject = new Object();
        formObject.ReportId = this.resultData.ReportId;
        formObject.ReportTempId = this.resultData.ReportTempId;
        formObject.Save = true;
        formObject.ReportName = formData.ReportName;
        formObject.ReportType = formData.ReportType;
        formObject.Currency = formData.Currency;
        formObject.ShowBooksPortfolio = formData.ShowBooksPortfolio;
        formObject.ShowVaR = formData.ShowVaR;
        formObject.UseMTMproduct = formData.UseMTMproduct;
        formObject.UseMTM_NPV = formData.UseMTM_NPV;
        formObject.CherryPicking = formData.CherryPicking;
        formObject.GroupBy = formData.GroupBy;
        formObject.TimeProduct = formData.TimeProduct;
        formObject.RunAs = formData.RunAs;
        formObject.StoreExcel = data.StoreExcel;
        formObject.StorePdf = formData.StorePdf;
        formObject.IssueDate1 = data.IssueDate1;//10/08/2015
        formObject.IssueDate2 = data.IssueDate2;
        formObject.FromDate = data.FromDate;
        formObject.ToDate = data.ToDate;
        formObject.Columns = this.getCheckBoxGroupData(form, 'columns', this.resultData.Columns);
        formObject.Filters = this.getCheckBoxGroupData(form, 'filters', this.resultData.Filters);
        formObject.Porfolios = this.getCheckBoxGroupData(form, 'portfolio', this.resultData.Porfolios);
        formObject.Update = update;

        var me = this;
        $.ajax({
            type: 'POST',
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Report/Save',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({ model: formObject }),
            success: function (response, opts) {

                if (response.ErorrMsg != null) {
                    var reportName = form.findField('ReportName');
                    reportName.markInvalid(response.ErorrMsg);
                } else {
                    //debugger;
                    var reportGrid = me.ownerCt.items.items[0];

                    me.onCancelClick(reportGrid.reportGUID != null);

                    reportGrid.reportName = response.ReportName;
                    reportGrid.reportId = response.ReportId;

                    if (formObject.Update == false) {

                        if (reportGrid.reportGUID != null) {
                            reportGrid.reportGUID = null;
                        }

                        reportGrid.updateReportData({ ReportName: response.ReportName, reportGUID: reportGrid.reportGUID});
                    } 
                }

            }
        });

        //debugger;
        // me.setHidden(true);
        // me.ownerCt.items.items[0].setHidden(false);

    },

    onCancelClick: function (changeBtnName) {
        this.setHidden(true);
        this.ownerCt.items.items[0].setHidden(false);

        var btn = this.ownerCt.header.items.items[1];
        if (changeBtnName)
            btn.setText("Edit");

        btn.setHidden(false);
    },

    getCheckBoxGroupData: function (form, checkBoxGroupName, formObjectData) {

        var setColumns = form.findField(checkBoxGroupName).getValue();

        formObjectData.forEach(function (item) {
            if (setColumns.hasOwnProperty(item.Text)) {
                item.Selected = true;
            } else {
                item.Selected = false;
            }
        });

        return formObjectData;
    }

});