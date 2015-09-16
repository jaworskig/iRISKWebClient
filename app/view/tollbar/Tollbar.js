Ext.define('iRISKClient.view.toolbar.BottomTollbar', {
    extend: 'Ext.form.Panel',
    //extend: 'Ext.window.Window',
    xtype: 'bottomTollbar',
    collapsed: true,
    collapsible: true,
    height: 500,
    layout: 'fit',
    stateful: true,
    controller: 'toolbar',

    requires: [
        'iRISKClient.view.toolbar.BottomTollbarController'
    ],



    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {


        });

        me.callParent(arguments);
    },

    header: {
        items: [
            {
                xtype: 'segmentedbutton',
                reference: 'tollbar_button',
                items: [
                    {
                        reference: 'news_btn',
                        text: 'Den afrikanske union: Angklager Norge...',
                        handler: 'onTollbarBtnClick'
                    }, {
                        reference: 'lastDeals_btn',
                        text: 'Data: 01-02-2015 Trader: Vegar, Qty: 222, Price: 21111',
                        handler: 'onTollbarBtnClick'
                    }, {
                        reference: 'alert_btn',
                        text: 'Alert: MTM deal value 1112333',
                        handler: 'onTollbarBtnClick'
                    }
                ]
            }
        ]
    },

    items: [{
        title: 'News',
        reference: 'btm_news',
        hidden: true
    }, {
        // title: 'Deals Last',
        reference: 'btm_deals',
        items: [
            {
                xtype: 'dealsLastEdit',
                reference: 'deal_last_edit',
                hidden: true
            },
            {
                xtype: 'dealsLastList',
                reference: 'deal_last_list'
            }
        ]
    }, {
        title: 'Alerts',
        reference: 'btm_alerts',
        hidden: true
    }],



    listeners: {
        afterrender: function (layout, eOpts) {
            //debugger;

            var tlb = this.lookupReference('tollbar_button');
            tlb.setWidth(window.innerWidth - 30);

        }
    }


});