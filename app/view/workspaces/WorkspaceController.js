Ext.define('iRISKClient.view.workspaces.WorkSpaceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.workspace',

    counter: 1,

    onAddDashboard: function (sender) {
        //debugger;

        this.counter++;
        var wrkSpace = this.lookupReference('centerPanel');

        var tab = wrkSpace.add({
            title: 'Tab ' + this.counter,
            xtype: 'dashboard',
            //stateId: 'dasboard_' + this.counter,
            region: 'center',
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
                        items: [{
                            xtype: 'chartsLive'
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
        });


        wrkSpace.setActiveTab(tab);

        //wrkSpace.doLayout(); EXTJS6

    },

    onLeftAreaBtnClick: function (sender, event) {
        //debugger;
        var tollbar = this.view;

        var leftArea = this.lookupReference('leftArea');
        var leftAreatabs = this.lookupReference('leftAreaTabs');

        var collapseState = leftArea.getCollapsed();
        // debugger;
        switch (sender.reference) {
            case 'portfoliosBtn':
                {
                    leftAreatabs.setActiveItem(0);
                    break;
                }
            case 'counterpartsBtn':
                {
                    leftAreatabs.setActiveItem(1);
                    break;
                }

            case 'curvesBtn':
                {
                    leftAreatabs.setActiveItem(2);
                    break;
                }

            case 'reportsBtn':
                {
                    //if (collapseState == false &&  leftAreatabs.activeTab.title == "Reports") {
                    //    leftArea.collapse();

                    //    event.stopPropagation();
                    //    return false;
                    //} 

                    leftAreatabs.setActiveItem(3);

                    break;
                }
        }

        leftAreatabs.header.setHidden(true);

        //  debugger;


        if (collapseState == false)
            event.stopPropagation();

        return false;

    }

});
