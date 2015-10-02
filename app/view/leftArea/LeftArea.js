Ext.define('iRISKClient.view.leftArea.LeftArea', {
    //extend: 'Ext.Component',
    extend: 'Ext.form.Panel',
    xtype: 'leftArea',
    //layout: 'border',
    region: 'west',
    width: 450,
    split: {
        size: 5
    },
    collapsible: true,
    collapsed: false,
    layout: 'fit',
    stateful: true,

    requires: [
    'iRISKClient.LeftArea.Labels',
    'iRISKClient.view.portfolionew.panel.PortfolioPanel'
    ],

    header: false,

    listeners: {

        expand: function (panel, eOpts) {
            panel.items.items[0].header.setVisible(true);
        }

        //    beforecollapse: function(panel, direction) {
        //        if (!panel.placeholder) {
        //            panel.getPlaceholder(direction).insert(1, {
        //                xtype: 'button',
        //                text: 'Reports',
        //                cls: 'btn-vertical-text btn-report'
        //            });

        //            panel.getPlaceholder(direction).insert(1, {
        //                xtype: 'button',
        //                text: 'Portfolios',
        //                cls: 'btn-vertical-text btn-portfolio'
        //            });
        //        }
        //    }
    },

    initComponent: function () {
        var me = this;
        var placeHolder = me.getPlaceholder('left');


        placeHolder.insert(1, {
            xtype: 'button',
            text: 'Portfolios',
            reference: 'portfoliosBtn',
            handler: 'onLeftAreaBtnClick',
            cls: 'btn-vertical-text btn-portfolio'
        });

        placeHolder.insert(1, {
            xtype: 'button',
            text: 'Counterparts',
            reference: 'counterpartsBtn',
            handler: 'onLeftAreaBtnClick',
            cls: 'btn-vertical-text btn-counterparts'
        });

        placeHolder.insert(1, {
            xtype: 'button',
            text: 'Curves',
            reference: 'curvesBtn',
            handler: 'onLeftAreaBtnClick',
            cls: 'btn-vertical-text btn-curves'
        });

        placeHolder.insert(1, {
            xtype: 'button',
            reference: 'reportsBtn',
            text: 'Reports',
            handler: 'onLeftAreaBtnClick',
            cls: 'btn-vertical-text btn-report'
        });

        me.callParent(arguments);
    },

    items: [{
        xtype: 'tabpanel',
        stateful: true,
        stateId: 'leftTabs',
        reference: 'leftAreaTabs',
        width: 400,
        height: 300,
        tabPosition: 'left',
        // collapsible: true,
        // collapsed: false,
        // collapseDirection: 'left',
        headerPosition: 'left',
        tabBarHeaderPosition: 0,
        //titleRotation: 2,
        items: [
            //{
            //    xtype: 'button',
            //    //iconCls: 'x-tool-img x-tool-gear'
            //    iconCls: 'x-tool-img x-tool-expand-left'
            //},

            {
                xtype: "portfoliopanelnew", //"portfoliosPanel",
                title: iRISKClient.LeftArea.Labels.Portfolios
            }, {
                xtype: "counterpartsExplorer",
                title: iRISKClient.LeftArea.Labels.Counterparts,
                flex: 1
            }, {
                xtype: "curvesFoldersTreeList",
                title: iRISKClient.LeftArea.Labels.Curves
            }, {

                xtype: "reportsFoldersTreeList",
                title: iRISKClient.LeftArea.Labels.Reports
            }],

        listeners: {

            //render: function() {
            //    this.items.each(function(i){
            //        i.tab.on('click', function(item, event) {
            //            if (item.title == item.ownerCt.ownerCt.ownerCt.getActiveTab().title) {
            //                debugger;
            //                item.ownerCt.ownerCt.ownerCt.collapse();
            //            }
            //        });
            //    });
            //},

            afterrender: function (layout, eOpts) {
                if (layout.header != null) {

                    //debugger;
                    layout.header.insert(0, {
                        xtype: 'component',
                        margin: '0 0 5 0', // (top, right, bottom, left)
                        cls: 'x-tool-img x-tool-expand-left',
                        overCls: 'component-btn-over',
                        scope: this,
                        listeners: {
                            render: function (c) {
                                c.el.on('click', function (item) {
                                    this.component.ownerCt.ownerCt.ownerCt.collapse();
                                });
                            }
                        }
                    });
                }
            }
        }

    }]

});


Ext.define('iRISKClient.view.rightArea.RigthArea', {

    extend: 'Ext.form.Panel',
    xtype: 'rightArea',
    title: "News (22 unread)",
    layout: 'border',
    region: 'east',
    width: 200,
    split: {
        size: 5
    },
    collapsible: true,
    collapsed: true,
    layout: 'fit'

});