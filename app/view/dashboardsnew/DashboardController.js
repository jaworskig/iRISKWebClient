Ext.define('iRISKClient.view.dashboardsnew.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.iriskdashboard',

    listen: {
        global: {
            adddashboardtab: 'onAddDashboardTab',
            adddashboardview: 'onAddDashboardView',
            showfullscreen: 'onShowFullScreen',
            closefullscreen: 'onCloseFullScreen'
        }
    },

    counter: 1,

    cachedTabs: {},

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

    onAddDashboardView: function (config, checkPosition, index, callback) {
        var me = this,
            card = me.getActiveCard(),
            index = index || 0,
            columnIndex, view;

        if (!checkPosition) {
            // view = card.addView(config, index); EXT LAYOUT FAILS
            view = card.addView(config);
        }
        else {
            columnIndex = (card.columnWidths != undefined) ? card.columnWidths.length : 0;
            view = card.addView(config, columnIndex);
        }

        if(callback){
            callback(view);
        }
    },

    onAddDashboardTab: function(title, items){
        this.addDashboard(title, items);
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

    addDashboard: function (title, columnWidths) {
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
            // columnWidths: columnWidths, EXT LAYOUT FAILS
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

        me.cachedTabs[cardReference] = card;

        tabBar.setActiveTab(tab, me.counter === 1);

        me.counter++;
    },

    onTabCloseClick: function(tabbar, tab){
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
    },

    getTabs: function(){
        return this.cachedTabs;
    }
});