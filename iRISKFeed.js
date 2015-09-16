var mainFeedContextList = [];
var dealUpdateContextList = [];
var reportUpdateContextList = [];
var portfolioFeedList = [];

var HubService = (function () {
    var topics = {};
    var hOP = topics.hasOwnProperty;
    var socketHub = null;
    var initated = false;
    var updateView = true;
    var lastServerUpdate = null;


    return {

        Init: function () {

            $.ajaxSetup({ async: true });

            $.connection.hub.logging = true;
            $.connection.hub.start({ jsonp: true, transport: 'webSockets' })
            .done(function () {
                console.log('Now connected, connection ID=' + $.connection.hub.id);

            })
            .fail(function () {
                console.log('Could not Connect!');

            });

            $.connection.hub.disconnected(function () {

                iRISKClient.view.main.MainController.checkWsState(null);

                setTimeout(function () { $.connection.hub.start(); }, 5000); // Restart connection after 5 seconds.
            });


            this.socketHub.client.Broadcast = function (feed) {
                var message = JSON.parse(feed);

                if (message.hasOwnProperty("ReportName")) {

                    reportUpdateContextList.forEach(function (item) {
                        setTimeout(item.handleReportUpdate(message), 0);
                    });

                }
                else if (message.hasOwnProperty("Deals")) {

                    dealUpdateContextList.forEach(function (item) {
                        setTimeout(item.handleDealUpdate(message), 0);
                    });

                } else {
                    mainFeedContextList.forEach(function (item) {
                        setTimeout(item.handleLiveUpdateFeed(message), 0);
                    });
                }

                //HubService.Publish(message.ProductName, message);
                //Ext.getCmp('wsIndicator').setText('Feed: ' + feed.ProductName);
                //HubService.mainContext.handleLiveUpdateFeed(message);
            }


            this.socketHub.client.ServerStatusMassage = function (msg) {

                HubService.lastServerUpdate = Date.now();
                HubService.serverUpdateCount = msg.Count;

            }

            initated = true;
        },


        AddContext: function (context) {
            mainFeedContextList.push(context);
        },


        RemoveUpdateContext: function (context) {
            var ctxIndex = dealUpdateContextList.indexOf(context);
            dealUpdateContextList.splice(ctxIndex, 1);
        },

        RemoveContext: function (context) {
            var ctxIndex = mainFeedContextList.indexOf(context);
            mainFeedContextList.splice(ctxIndex, 1);
        },

        Subscribe: function (topic, context, listener) {
            this.socketHub.server.subscribe(topic);
        },


        SubscribeFeed: function (topic, context) {

            if (mainFeedContextList.indexOf(context) == -1) {
                mainFeedContextList.push(context);
            }

            this.socketHub.server.subscribe(topic);
        },

        SubscribeFeedArray: function (topicArray, context) {

            if (mainFeedContextList.indexOf(context) == -1) {
                mainFeedContextList.push(context);
            }

            topicArray.forEach(function (item) {
                HubService.socketHub.server.subscribe(item);
            });
        },

        // Only for portfolio list
        SubscribeFeedPortfolio: function (topicArray, context) {

            if (mainFeedContextList.indexOf(context) == -1) {
                mainFeedContextList.push(context);
            }

            topicArray.forEach(function (item) {

                if (portfolioFeedList.indexOf(item) == -1) {

                    portfolioFeedList.push(item);

                    HubService.socketHub.server.subscribe(item);
                }
            });
        },

        ReSubscribeFeedPortfolio: function () {

            portfolioFeedList.forEach(function (item) {
                HubService.socketHub.server.subscribe(item);
            });
        },


        SubscribeDealUpdate: function (context) {

            if (dealUpdateContextList.indexOf(context) == -1) {
                dealUpdateContextList.push(context);
            }

            this.socketHub.server.subscribe("#deal_update_notifcation");
        },


        SubscribeReportUpdate: function (context) {

            if (reportUpdateContextList.indexOf(context) == -1) {
                reportUpdateContextList.push(context);
            }

            this.socketHub.server.subscribe("#report_update_notifcation");
        },

        RemoveReportUpdate: function (context) {
            var ctxIndex = reportUpdateContextList.indexOf(context);
            reportUpdateContextList.splice(ctxIndex, 1);
        }

    };
})();



STX.QuoteFeed.MyFeed = function (url, fromDate) {
    this.url = url;
    this.fromDate = fromDate;
};

STX.QuoteFeed.MyFeed.stxInheritsFrom(STX.QuoteFeed);


STX.QuoteFeed.MyFeed.prototype.fetch = function (params, cb) {
    var query = this.url + "?symbol=" + params.symbol + "&interval=" + params.interval;

    query += "&from=" + STX.yyyymmdd(this.fromDate);


    // If you are here, the chart needs initial date, or it needs older data for a scroll.
    // The chart gives you a hint in params.ticks to tell you how many bars 
    // are needed to fill the chart. This should be the *minimum* to load. 
    // We recommend loading twice this much so that the chart can be scrolled without reloading and so that 
    // studies have enough back data to render.


    if (params.startDate) {
        // This means the chart is asking for refresh (stream) of most recent data
        // according to the interval you have specified in behavior.refreshInterval
        // when you attached the quote feed (attachQuoteFeed). 
        // If you don't support streaming, then just do nothing and return.
        // Otherwise fetch your data, and return it in the callback fiction. 

        query += "&startDate=" + STX.yyyymmddhhmm(params.startDate);

        // open your javascript console on your browser to see when the engine calls for a refresh!
        console.log("engine called for a refresh");
        console.log(query);
    }


    query += "&records=" + (params.ticks * 2);

    if (params.endDate) {
        // This means the user has scrolled past the end of the chart. 
        // The chart needs older data, if it's available.
        // If you don't support pagination just return and do nothing.
        // Otherwise fetch your data, and return it in the callback fiction. 

        query += "&endDate=" + STX.yyyymmddhhmm(params.endDate);

        // open your javascript console to see when the engine calls for older data!
        console.log("engine called for older data");
    } else {
        // open your javascript console to see when the engine calls for initial load!
        console.log("engine called for initial load");
    }


    //open your javascript console to see the formated query string for your data call!
    console.log(query);

    STX.postAjax(query, null, function (status, response) {
        if (status != 200) {
            // something went wrong, use callback function to return your error
            cb({
                error: status
            });
            return;
        }

        // This sample assumes the response returns only the data and in the right format.
        // Put your code here to format the response according to the specs 
        // and return it in the callback.
        // Example code to iterate trough the reformated responses and load them one at a time:
        //	var quotes=formatQuotes(response);  // your function to creates a properly formated array.
        //	var newQuotes=[];
        //	for(var i=0;i<quotes.length;i++){
        //		newQuotes[i]={};
        //		newQuotes[i].Date=quotes[i][0]; // Or set newQuotes[i].DT if you have a JS Date
        //		newQuotes[i].Open=quotes[i][1];
        //		newQuotes[i].High=quotes[i][2];
        //		newQuotes[i].Low=quotes[i][3];
        //		newQuotes[i].Close=quotes[i][4];
        //		newQuotes[i].Volume=quotes[i][5];
        //		newQuotes[i].Adj_Close=quotes[i][6];
        //	}

        // Set 'moreAvailable' to 'true' if you know that more, older, 
        // data is available for when the user scrolls back in time.
        // Your feed should send back an indicator you can use to determine if more data is available.
        // Our sample does not have more data, so we set to 'false'.
        cb({
            quotes: JSON.parse(response),
            moreAvailable: false
        });
    });
};