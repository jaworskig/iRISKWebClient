Ext.define('iRISKClient.view.markets.Markets', {
    extend: 'Ext.panel.Panel',
    xtype: 'markets',
    controller: 'mareketsControler',
    config: {
        myName: null
    },
    viewModel: {
        data: {
            name: 'PROD',
            open: 0,
            high: 0
        }
    },

    bind: {
        html: '{name}: , Open: {open}, High: {high}'
    },

    //initComponent: function() {
    //    HubService.Subscribe('ENOYR-16', this, this.myFeed);
    //    this.callParent();
    //},

    //listeners: {
    //    afterrender: function (layout, eOpts) {
    //        HubService.Subscribe(layout.title, this, this.myFeed);
    //    }
    //},

    myFeed: function (context, msg) {
        context.getViewModel().set(msg);
    }

});



Ext.define('iRISKClient.view.markets.MarketsControler', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mareketsControler',
    init: function () {

        var that = this;
        //debugger;
        //var subscription = events.subscribe('ENOYR-16',this, function (msg) {
        //    debugger;
        //    console.log("SUB-1: " + msg.name, + " " + msg.open + " " + msg.high);
        //});


        //HubService.Subscribe(this.view.myName, this, this.feed);
    },

    feed: function (context, msg) {
        //debugger;
        //console.log("SUB-1: " + msg.name, + " " + msg.open + " " + msg.high);
        //context.getViewModel().set('open', msg.open);
        //context.getViewModel().set('high', msg.high);
        context.getViewModel().set(msg);
    }

});
