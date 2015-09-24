Ext.define('iRISKClient.view.portfolio.PortfoliosExplorerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.portfoliosExplorerController',


    refs: [{
        ref: 'contextMenu',
        selector: 'listsContextMenu',
        xtype: 'listsContextMenu',
        autoCreate: true
    }],


    config: {
        refs: {
            ref: 'contextMenu',
            selector: 'listsContextMenu',
            xtype: 'listsContextMenu',
            autoCreate: true
        }
    },

    init: function () {
        var me = this;

        //debugger;

        me.control({

            'portfoliosTreeList': {

                itemcontextmenu: me.showContextMenu
            }
        });


    },

    onGroupDblClick: function (ttree, record, item, index, eEvent, eOpts) {

        var activeTab = iRISKClient.view.main.MainController.getActiveDashboard();
        var columnIndex = (activeTab.columnWidths != undefined) ? activeTab.columnWidths.length : 0;

        activeTab.addView({
            type: 'livepositions',
            title: record.data.text
        }, columnIndex);
    },


    showActiveDeals: function (data) {
        var activeTab = iRISKClient.view.main.MainController.getActiveDashboard();
        var columnIndex = (activeTab.columnWidths != undefined) ? activeTab.columnWidths.length : 0;

        activeTab.addView({
            type: 'portfolio_deals',
            title: data.text,
            portfolioId: data.groupId
        }, columnIndex);
    },

    cretePositionReport: function (data, type, split, sort) {

        //debugger;
        var me = this;
        var reportName = "New " + type + " Report (" + data.text + ")";

        Ext.Ajax.request({
            async: false,
            params: {
                groupId: data.groupId,
                name: reportName,
                type: type,
                split: split,
                sort: sort
            },
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Report/PostionReportCreateNew',
            success: function (response) {
                var activeTab = iRISKClient.view.main.MainController.getActiveDashboard();
                var resp = response.responseText;
                activeTab.addView({
                    type: 'repport',
                    title: reportName,
                    reportId: 0,
                    reportGUID: resp,
                    report_type: type,
                    report_split: split,
                    report_sort: sort,
                    report_groupId: data.groupId
                });
            }
        });



    },


    showContextMenu: function (view, list, node, rowIndex, e) {
        // debugger;
        var me = this;

        var menu = new Ext.menu.Menu({
            //layout: 'hbox',
            //   allowOtherMenus: true,
            items: [{
                text: 'View Deals',
                handler: function () {
                    // debugger;
                    me.showActiveDeals(list.data);
                }
            }, {
                text: 'Reports',
                //  xtype: 'menu',
                //  allowOtherMenus: true,
                menu: [{
                    text: 'Standard Position Reports',
                    menu: [{
                        text: 'Product',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Standard', 'Product', 'Reference');
                        }
                    }, {
                        text: 'Monthly',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Standard', 'Monthly', 'None');
                        }
                    }, {
                        text: 'Quarterly',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Standard', 'Quarterly', 'None');
                        }
                    }, {
                        text: 'Yearly',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Standard', 'Yearly', 'None');
                        }
                    }]
                }, {
                    text: 'Reference Position Reports',
                    menu: [{
                        text: 'Product',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Standard', 'Product', 'None');
                        }
                    }, {
                        text: 'Monthly',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Reference', 'Monthly', 'None');
                        }
                    }]
                }, {
                    text: 'Exposure Position Reports',
                    menu: [{
                        text: 'Product',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Exposure', 'Product', 'None');
                        }
                    }, {
                        text: 'Monthly',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Exposure', 'Monthly', 'None');
                        }
                    }]
                }, {
                    text: 'Options Position Reports',
                    menu: [{
                        text: 'Product',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Options', 'Product', 'None');
                        }
                    }, {
                        text: 'Monthly',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Options', 'Monthly', 'None');
                        }
                    }]
                }, {
                    text: 'Hedge Position Reports',
                    menu: [{
                        text: 'All Products',
                        handler: function () {
                            me.cretePositionReport(list.data, 'AllProducts', 'Monthly', 'None');
                        }
                    }, {
                        text: 'Product',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Hedge', 'Monthly', 'None');
                        }
                    }, {
                        text: 'Monthly',
                        handler: function () {
                            me.cretePositionReport(list.data, 'Products', 'Monthly', 'None');
                        }
                    }]
                }, {
                    text: 'ELCERT Report',
                    handler: function () {
                        me.cretePositionReport(list.data, 'Elcert', 'Monthly', 'None');
                    }
                }, {
                    text: 'Trading Report',
                    handler: function () {
                        me.cretePositionReport(list.data, 'Trading', 'Product', 'None');
                    }
                }, {
                    text: 'Settlement Report',
                    handler: function () {
                        me.cretePositionReport(list.data, 'Settlement', 'Product', 'None');
                    }
                }]
            }]
        }).showAt(e.getX(), e.getY());


        e.preventDefault();
    }
});
