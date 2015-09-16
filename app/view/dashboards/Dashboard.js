Ext.define('iRISKClient.view.dashboards.DashBoard', {
    extend: 'Ext.tab.Panel',
    requires: [
       'Ext.ux.TabReorderer'
    ],
    xtype: 'centralPanel',
    plugins: 'tabreorderer',

    defaults: {
        //bodyPadding: 10,
        scrollable: true,
        closable: true
    },

    stateful: true,

    items: [{
        title: 'Tab ' + 1,
        xtype: 'dashboard',
        parts: {
            repport: {
                viewTemplate: {
                    items: [{
                        xtype: 'reports'
                    }]
                }
            },
            liveprices: {
                viewTemplate: {
                    items: [{
                        xtype: 'liveprices'
                    }]
                }
            },
            chart: {
                viewTemplate: {
                    items: [
                        {
                            xtype: 'chartsLive'
                        }
                    ]
                }
            },
            formulaeditor: {
                viewTemplate: {
                    items: [
                        {
                            xtype: 'formulaeditor'
                        }
                    ]
                }
            },
            livepositions: {
                viewTemplate: {
                    items: [{
                        xtype: 'livepositions'
                    }]
                }
            },

            portfolio_deals: {
                viewTemplate: {
                    items: [{
                        xtype: 'portfolio_deals'
                    }]
                }
            }

        }

    }],

    listeners: {

        //statesave: function (me, state, eOpts) {
        //    eOpts.buffer = 5000;
        //    iRISKClient.view.main.MainController.storeLayout();
        //},


        afterrender: function (layout, eOpts) {
            //debugger;
            var bar = layout.tabBar;

            //bar.insert(0, [{
            //    xtype: 'button',
            //    text: '+',
            //    handler: 'onAddDashboard'
            //}]);

            bar.add([{
                xtype: 'button',
                text: '+',
                handler: 'onAddDashboard'
            }]);



            this.on({
                statesave: { fn: iRISKClient.view.main.MainController.storeLayoutBuffred, scope: this }
            });

            //layout.getActiveTab().addView({
            //    type: 'repport',
            //    title: 'BX1'
            //}, 0);

            ////debugger;
            //layout.getActiveTab().addView({
            //    type: 'repport',
            //    title: 'BX1'
            //}, 1);

            //layout.getActiveTab().addView({
            //    type: 'liveprices',
            //    title: 'ICE BRN'
            //});

            //layout.getActiveTab().addView({
            //    type: 'chartsLive',
            //    title: 'ENOYR-16'
            //});

            //layout.getActiveTab().addView({
            //    type: 'repport',
            //    title: 'Stockholm'
            //}, 2);
        }
    }
});

