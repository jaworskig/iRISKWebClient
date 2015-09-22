Ext.define('iRISKClient.view.chartsLive.StudySaveWindow', {
    extend: 'Ext.window.Window',
    controller: 'chartLiveController',
    title: "Save Study",
    // shadow: false,
    modal: true,
    width: 400,
    //minHeight: 150,
    //height: 'auto',
    bodyPadding: 10,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    requires: [
    'Ext.form.Panel'
    ],

    items: [{
        //start
        xtype: 'form',
        reference: 'saveStudyWindowForm',
        items: [{
            xtype: 'fieldset',
            title: "Save Study",

            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: [{
                xtype: 'textfield',
                name: 'studyNme',
                fieldLabel: 'Name'
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Save as',
                cls: 'x-check-group-alt',
                items: [
                    { boxLabel: 'Study', name: 'rb-saveAs', inputValue: 1, checked: true },
                    { boxLabel: 'Analysis ', name: 'rb-saveAs', inputValue: 2 },
                    { xtype: 'component' }
                ]
            }
            //, {
            //    xtype: 'checkboxfield',
            //    fieldLabel: 'Save as new',
            //    name: 'saveAsnew',
            //    checked: true
            //}
            , {
                xtype: 'radiogroup',
                fieldLabel: 'Access',
                cls: 'x-check-group-alt',
                items: [
                    { boxLabel: 'Global', name: 'rb-access', inputValue: 1, checked: true },
                    { boxLabel: 'Company', name: 'rb-access', inputValue: 2 },
                    { boxLabel: 'Private', name: 'rb-access', inputValue: 3 }
                ]
            }]
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