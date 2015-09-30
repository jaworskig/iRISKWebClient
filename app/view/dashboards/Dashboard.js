Ext.define('iRISKClient.view.dashboards.DashBoard', {
    extend: 'Ext.tab.Panel',
    requires: [
       'Ext.ux.TabReorderer'
    ],
    xtype: 'centralPanel',
    controller: 'dashboard',
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
                        xtype: 'livepricesnew'
                    }]
                }
            },
            chart: {
                viewTemplate: {
                    header: false,
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
                        xtype: 'livepositionsnew'
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


            /* TODO: RESTORE AFTER THE REFACTORING
            this.on({
                statesave: { fn: iRISKClient.view.main.MainController.storeLayoutBuffred, scope: this }
            });
            */
        }
    }
});

