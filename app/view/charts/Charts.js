Ext.define('iRISKClient.view.reports.Charts', {
  extend: 'Ext.form.Panel',
  xtype:'chartMain',
  //alias: "widget.main",
  requires: [
    'Ext.Component'
  ],
  config: {
    //centered: true,
    //fullscreen :true,
    //height: '600px',
    //autoHeight: 'true',
    layout:'fit'
    // items:[
    //   {
    //     html: "<div id='chart_" + this.xtype + "'>chart</div>"
    //   }
    // ]
    //styleHtmlContent: true
  },
  listeners: {

    afterrender1: function(layout, eOpts )
    {
      this.update("<div id='chart_" + this.reference + "'>chart</div>");
    },

    afterrender: function(layout, eOpts )
    {
      var entId = null;
      this.update("<div id='chart_" + this.reference + "'>chart</div>");

    var widget =  new TradingView.widget({
        //fullscreen: true,
        //height: '600px',
        debug: true,
        height: 600,//Ext.getCmp(Ext.get(this.el).id).height - 150,//this.ownerCt.ownerCt.ownerCt.getSize().height - 150,
        width: '100%',
        symbol: 'ENOYR-16',
        interval: 'D',
        container_id: "chart_" + this.reference,
        //	BEWARE: no trailing slash is expected in feed URL
        //datafeed: new Datafeeds.UDFCompatibleDatafeed("http://demo_feed.tradingview.com"),
        datafeed: new Datafeeds.UDFCompatibleDatafeed("http://yellow.irisk.no/Chart",this),
        library_path: "charting_library/",
        locale: "en",
        //	Regression Trend-related functionality is not implemented yet, so it's hidden for a while
        drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } ] },
        disabled_features: ["use_localstorage_for_settings"],
        charts_storage_url: 'http://saveload.tradingview.com',
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
      //  toolbar_bg: #454545,
        overrides: {
         "paneProperties.background": "#222222",
         "paneProperties.gridProperties.color": "#454545",
         "symbolWatermarkProperties.transparency": 90,
         "scalesProperties.textColor": "#AAA"
        }
      });

      widget.onSymbolChange(function(symbolData) {

        //  window.chat.server.subscribeCurve(symbolData.name);
      });

      widget.onChartReady(function() {
          // now it's safe to call any other widget's methods

          widget.createButton()
            .attr('title', "Save chart")
            .on('click', function (e) {
              widget.save(function(data) {
                //savedWidgetContent = data;
                //alert('Saved');
              //  debugger;
              })
             })
            .append($('<span>save</span>'));


            widget.createButton()
              .on('click', function (e) {
              //  debugger;
                widget.createStudy("MA Cross", false, false, null, function(guid){
                entId = guid;
                });

               })
              .append($('<span>+ MA cross</span>'));

              widget.createButton()
                .on('click', function (e) {
                //  debugger;
                  widget.removeEntity(entId);
                 })
                .append($('<span>- MA cross</span>'));


                // widget.createButton()
                //   .attr('title', "Add item")
                //   .on('click', function (e) {
                //     widget.createStudy("Bollinger Bands", false, false, [
                //         10 + parseInt(Math.random() * 10),
                //         3 + parseInt(Math.random() * 3)
                //       ], function (guid) {
                //         console.log(guid);
                //       }
                //     );
                //    })
                //   .append($('<span>+BB</span>'));

            widget.createButton()
              .on('click', function (e) {
                widget.createOrderLine();
               })
              .append($('<span>new order</span>'));
      });

    }
  }



  //launch: function() {
  //  this.callParent(arguments);
    //alert("aa");

    // this.mainchartview = new TradingView.widget({
    //   fullscreen: false,
    //   symbol: 'AA',
    //   interval: 'D',
    //   container_id: "tv_chart_container",
    //   //	BEWARE: no trailing slash is expected in feed URL
    //   datafeed: new Datafeeds.UDFCompatibleDatafeed("http://demo_feed.tradingview.com"),
    //   library_path: "charting_library/",
    //   locale: "en",
    //   //	Regression Trend-related functionality is not implemented yet, so it's hidden for a while
    //   drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } ] },
    //   disabled_features: ["use_localstorage_for_settings"],
    //   charts_storage_url: 'http://saveload.tradingview.com',
    //   client_id: 'tradingview.com',
    //   user_id: 'public_user_id'
    // });



//  }

});
