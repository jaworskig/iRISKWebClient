Ext.define('iRISKClient.view.dashboardsnew.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.iriskdashboard',
    requires: [
        'Ext.Editor'
    ],

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
            view = card.addView(config, index);
        }
        else {
            columnIndex = (card.columnWidths != undefined) ? card.columnWidths.length : 0;
            view = card.addView(config, columnIndex);
        }

        if(callback){
            callback(view);
        }
    },

    onAddDashboardTab: function(title, columnWidths){
        this.addDashboard(title, columnWidths);
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
            tab, card, viewConfig, el;

        tab = tabBar.insert(index - 1,{
            text: title,
            reference: 'tab' + index
        });

        tab.onCloseClick = Ext.bind(me.onTabCloseClick, me, [tabBar, tab], false);

        // Setting up the listeners for the tabs title editing
        el = tab.el;
        if(!el) {
            tab.on('afterrender', me.onTabAfterRender, me);
        }
        else {
            el.on('dblclick', me.onTabDblCkick, me);
        }

        viewConfig = {
            xtype: 'dashboard',
            reference: cardReference,
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
        };

        if(columnWidths && columnWidths.length){
            viewConfig.columnWidths = columnWidths;
        }

        card = view.add(viewConfig);

        me.cachedTabs[cardReference] = card;

        tabBar.setActiveTab(tab, me.counter === 1);

        me.counter++;
    },

    onTabCloseClick: function(tabbar, tab){
        var me = this,
            cache = me.cachedTabs,
            reference = tab.getReference() + 'Card',
            card = cache[reference];

        tabbar.remove(tab, true);
        delete cache[reference];
    },

    onTabAfterRender: function(tab){
        var me = this,
            el = tab.el;

        el.on('dblclick', me.onTabDblCkick, me);
        tab.un('afterrender', me.onTabAfterRender, me);
    },

    onTabDblCkick: function(e, el){
        this.getEditor().startEdit(el);
    },

    getActiveCard: function () {
        var view = this.getView();
        return view.down('dashboard');
    },

    getEditor: function(){
        var me = this,
            editor = me.editor;

        if(!editor) {
            editor = new Ext.Editor({
                updateEl: true,
                alignment: 'l-l',
                autoSize: {
                    width: 'boundEl'
                },
                field: {
                    xtype: 'textfield'
                },
                listeners: {
                    complete: 'onTabTitleEditComplete',
                    scope: this
                }
            });
        }
        me.editor = editor;

        return editor;
    },

    onTabTitleEditComplete: function(editor, value, oldValue){
        var me = this,
            tabbar = me.lookupReference('tabbar'),
            tab = tabbar.activeTab;

        tab.setText(value);
    },

    getTabs: function(){
        debugger;
        return this.cachedTabs;
    }
});