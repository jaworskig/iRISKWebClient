Ext.define('iRISKClient.view.counterparts.CounterpartsExplorerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.counterpartsExplorerController',


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
     
            'counterpartsList': {
                 
                itemcontextmenu: me.showContextMenu
            }
        });

      
    },

    /*onGroupDblClick: function (ttree, record, item, index, eEvent, eOpts) {

        var activeTab = iRISKClient.view.main.MainController.getActiveDashboard();


        activeTab.addView({
            type: 'livepositions',
            title: record.data.text
        });
    },*/


    addAlert: function(data) {
        /*var activeTab = iRISKClient.view.main.MainController.getActiveDashboard();


        activeTab.addView({
            type: 'portfolio_deals',
            title: data.text,
            portfolioId: data.groupId
        });*/
    },

    generatePDFReport: function(data) {
        /*var activeTab = iRISKClient.view.main.MainController.getActiveDashboard();


        activeTab.addView({
            type: 'portfolio_deals',
            title: data.text,
            portfolioId: data.groupId
        });*/
    },


    showContextMenu: function (view, list, node, rowIndex, e) {

        var me = this;
 
        var menu = new Ext.menu.Menu({
            items: [{
                text: 'Add Alert',
                handler: function () {
                   // debugger;
                    me.addAlert(list.data);
                }
            },
            {
                text: 'Generate PDF Report',
                handler: function () {
                   // debugger;
                    me.generatePDFReport(list.data);
                }
            }]
        }).showAt(e.getX(), e.getY());

  
        e.preventDefault();
    }
});
