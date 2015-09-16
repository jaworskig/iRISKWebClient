Ext.define('iRISKClient.view.liveprices.LivePricesBuilder', {
    extend: 'Ext.window.Window',
    title: iRISKClient.LivePricesBuilder.Labels.BuilderDialogTitle,
    controller: 'livePricesBuider',
    shadow: false,
    modal: true,
    //width: 500,
    //minHeight: 150,
    //height: 'auto',
    bodyPadding: 20,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    requires: [
    'iRISKClient.store.LivePricesStore',
    'iRISKClient.view.liveprices.LivePricesBuilderController',
    'Ext.form.Panel'
    ],

    items: [{
        //start
        xtype: 'form',
        reference: 'livePricesBuilderForm',
        items: [{
            xtype: 'fieldset',
            title: iRISKClient.LivePricesBuilder.Labels.BuildFromFieldsetTitle,
            flex: 1,
            layout: 'anchor',
            padding: 10,
            defaults: {
                anchor: '100%',
                hideEmptyLabel: true
            },
            items: [{
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                padding: 5,
                items: [{
                    xtype: 'radiofield',
                    width: 100,
                    checked: true,
                    boxLabel: iRISKClient.LivePricesBuilder.Labels.ProductsRadioLabel,
                    name: 'query-type',
                    inputValue: 'product'
                }, {
                    xtype: 'combo',
                    name: 'product-query',
                    autoSelect: true,
                    editable: false,
                    minChars: 0,
                    store: {
                        type: 'livePricesProductDataStore',
                        autoLoad: true
                    },
                    displayField: 'name',
                    valueField: 'name'
                }]
            }

            //,{
            //    xtype: 'container',
            //    layout: {
            //        type: 'hbox',
            //        align: 'stretch'
            //    },
            //    padding: 5,
            //    items: [{
            //        xtype: 'radiofield',
            //        width: 100,
            //        boxLabel: iRISKClient.LivePricesBuilder.Labels.CurvesRadioLabel,
            //        name: 'query-type',
            //        inputValue: 'curve'
            //    }, {
            //        xtype: 'combo',
            //        name: 'curve-query',
            //        autoSelect: true,
            //        editable: false,
            //        store: new Ext.data.Store({
            //            fields: ['name'],
            //            autoLoad: true,
            //            proxy: {
            //                type: 'ajax',
            //                url: iRISKClient.Application.GlobalSettings.HostUrl + 'AppsForOffice/CurveQueries',
            //                reader: {
            //                    type: 'json',
            //                    rootProperty: 'CurveQueries',
            //                    transform: function (data) {
            //                        data = data.map(function (val) {
            //                            return { name: val };
            //                        });
            //                        return { CurveQueries: data };
            //                    }
            //                }
            //            }
            //        }),
            //        displayField: 'name',
            //        valueField: 'name'
            //    }]
            //}

            ]
        }]
    }],

    buttons: [{
        text: 'Ok',//Ext.MessageBox.buttonText.ok,
        handler: 'onOKClick'
    }, {
        text: 'Cancel',//Ext.MessageBox.buttonText.cancel,
        handler: 'onCancelClick'
    }],

    listeners: {
        afterrender: function (panel) {

            var header = panel.header;
            header.setHeight(25);
        }
    }
});