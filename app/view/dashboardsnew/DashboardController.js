Ext.define('iRISKClient.view.dashboardsnew.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.iriskdashboard',

    listen: {
        global: {
            adddashboardview: 'onAddDashboardView',
            showfullscreen: 'onShowFullScreen',
            closefullscreen: 'onCloseFullScreen'
        }
    },

    counter: 1,

    cachedTabs: {},

    init: function(view){
        this.addDashboard('Tab 1');
    },

    onShowFullScreen: function (xtype, partConfig) {
        var me = this,
            view = me.getView(),
            tabBar = me.lookupReference('tabbar'),
            tab;

        tab = view.add({
            reference: 'fullscreentab',
            title: 'Fullscreen',
            items: [
                {
                    xtype: xtype,
                    partConfig: partConfig
                }
            ]
        });

        view.setActiveItem(tab);

        tabBar.hide();
    },

    onCloseFullScreen: function () {
        var me = this,
            view = me.getView(),
            tabBar = me.lookupReference('tabbar'),
            tab = me.lookupReference('fullscreentab');

        tab.close();

        tabBar.show();
    },

    onAddDashboardView: function (config, checkPosition) {
        var me = this,
            card = me.getActiveCard(),
            columnIndex;

        if (!checkPosition) {
            card.addView(config);
        }
        else {
            columnIndex = (card.columnWidths != undefined) ? card.columnWidths.length : 0;
            card.addView(config, columnIndex);
        }
    },

    onAddDashboardClick: function(){
        var title = 'Tab ' + this.counter;
        this.addDashboard(title);
    },

    onItemChange: function(tabbar, tab){
        var me = this,
            view = me.getView(),
            layout = view.getLayout(),
            activeTab = layout.getActiveItem(),
            reference = tab.getReference() + 'Card',
            cache = me.cachedTabs,
            newTab = cache[reference];

        Ext.suspendLayouts();

        view.remove(activeTab, false);
        view.setActiveItem(newTab);

        Ext.resumeLayouts();
    },

    addDashboard: function (title) {
        var me = this,
            view = me.getView(),
            tabBar = me.lookupReference('tabbar'),
            index = me.counter,
            title = title || 'Tab ' + index,
            cardReference = 'tab' + index + 'Card',
            tab, card;

        tab = tabBar.insert(index - 1,{
            text: title,
            reference: 'tab' + index
        });

        tab.onCloseClick = Ext.bind(me.onTabCloseClick, me, [tabBar, tab], false);

        card = view.add({
            xtype: 'dashboard',
            reference: cardReference,
            columnWidths: [ 0.5, 0.40, 0.25 ],
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

        tabBar.setActiveTab(tab, true);

        view.setActiveItem(card);

        me.cachedTabs[cardReference] = card;

        me.counter++;
    },

    onTabCloseClick: function(tabbar, tab){
        debugger;
        var me = this,
            cache = me.cachedTabs,
            reference = tab.getReference() + 'Card',
            card = cache[reference];

        card.destroy(true);
        delete cache[reference];

        tabbar.remove(tab, true);
    },

    getActiveCard: function () {
        var view = this.getView();
        return view.down('dashboard');
    }
});