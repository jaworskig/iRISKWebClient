
Ext.define('iRISKClient.view.settings.SettingsWindow', {
    extend: 'Ext.window.Window',
    title: "Settings",
    controller: 'settings',
    shadow: false,
    modal: true,
    width: 800,
    minHeight: 250,
    height: 450,
    bodyPadding: 0,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    requires: [
    'iRISKClient.view.settings.SettingsWindowController',
    'Ext.form.Panel'
    ],

    items: [{
        xtype: 'tabpanel',

        items: [{
            title: "Windows",
            layout: 'fit',
            height: 300,
            defaults: {
                bodyStyle: 'padding:15px'
            },
            layout: {
                type: 'accordion',
                titleCollapse: true,
                animate: true,
                activeOnTop: false
            },
            items: [{
                title: 'Left area',
                html: 'Panel content!'
            }, {
                title: 'Right area',
                html: 'Panel content!'
            }, {
                title: 'Center area',
                html: 'Panel content!'
            }, {
                title: 'Bottom area',
                html: 'Panel content!'
            }]

        }, {
            title: "Application",
            layout: 'fit',
            active: true,
            height: 400,
            defaults: {
                bodyStyle: 'padding:15px'
            },
            layout: {
                type: 'accordion',
                titleCollapse: true,
                animate: true,
                activeOnTop: false
            },
            items: [{
                title: 'Application Settings',
                items: [{
                    //start
                    xtype: 'fieldset',
                    reference: 'formSettings',
                    flex: 1,
                    title: 'Style settings',
                    defaultType: 'radio',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%',
                        hideEmptyLabel: false
                    },
                    items: [{
                        checked: true,
                        fieldLabel: 'Style',
                        boxLabel: 'Dark style',
                        name: 'fav-style',
                        inputValue: 'dark'
                    }, {
                        boxLabel: 'Light style',
                        name: 'fav-style',
                        inputValue: 'light'
                    }]
                }, {
                    xtype: 'fieldset',
                    flex: 1,
                    title: 'Language settings',
                    defaultType: 'radio',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%',
                        hideEmptyLabel: false
                    },
                    items: [{
                        checked: true,
                        fieldLabel: 'Language',
                        boxLabel: 'English',
                        name: 'lang-set',
                        inputValue: 'en'
                    }, {
                        boxLabel: 'Norwegian',
                        name: 'lang-set',
                        inputValue: 'no'
                    }]
                }]
            }]
        }, {
            title: "Other",
            layout: 'fit',
            height: 400,
            defaults: {
                bodyStyle: 'padding:15px'
            },
            layout: {
                type: 'accordion',
                titleCollapse: true,
                animate: true,
                activeOnTop: false
            },
            items: [{
                title: 'Other 1',
                html: 'Panel content!'
            }, {
                title: 'Other 2',
                html: 'Panel content!'
            }]
        }]
    }],

    buttons: [{
        text: 'Save',
        handler: 'onSaveFormClick'
    }, {
        text: 'Cancel',
        handler: function (sender) {

        }
    }],

    //dockedItems: [{
    //    xtype: 'toolbar',
    //    dock: 'bottom',
    //    items: [{
    //        xtype: 'button',
    //        text: 'Cancel'

    //    }, '->', {
    //        xtype: 'button',
    //        text: 'Save'

    //    }]
    //}],


    listeners: {
        afterrender: function (panel) {
            var header = panel.header;
            header.setHeight(25);
        }
    }
});