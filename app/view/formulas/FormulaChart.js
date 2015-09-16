var chart;

Ext.define('iRISKClient.view.formulas.FormulaChart', {
    //extend: 'Ext.form.Panel',

    extend: 'Ext.Component',

    xtype: 'formulaChart',
    //alias: "widget.main",
    requires: [
      'Ext.Component'
    ],
    config: {
        //centered: true,
        //fullscreen :true,
        //height: '600px',
        //autoHeight: 'true',
        //layout:'fit'
        closable: true

    },

    //tools: [{
    //    type: 'maximize',
    //    handler: function (a, b, c) {
    //        debugger;
    //        var v = c.up('viewport');
    //        var p = c.ownerCt;
    //        var config = p.initialConfig;
    //        var w = Ext.create('Ext.window.Window', {
    //            layout: 'fit'
    //        });
    //        w.add(p.initialConfig);
    //        w.show();
    //        w.maximize();
    //    }
    //}],

    myid: 0,

    getChart: function () {
        return chart;
    }, 

    listeners: {

        afterrender: function (layout, eOpts) {

           // debugger;
            var entId = "chart_live_" + this.id;
            this.update("<div id='" + entId + "'>chart</div>");

            chart = new Highcharts.StockChart({
                chart: {
                    renderTo: entId
                },

                rangeSelector: {
                    selected: 1
                },
                series: []
            });

            Ext.Ajax.request({
                url: this.config.url,
                success: function (response) {
                    //debugger;
                    var resp = response.responseText;
                    if (resp) {
                        returnData = Ext.JSON.decode(resp);
                        for (var i = 0; i < returnData.length; i++) {
                            for (var j = 0; j < returnData[i].length; j++) {
                                var data = [];
                                for (var k = 0; k < returnData[i][j].dates.length; k++) {
                                    data.push([new Date(returnData[i][j].dates[k]).getTime(), returnData[i][j].values[k]])
                                }
                                chart.addSeries({name: returnData[i][j].name, data: data, type: 'line', yAxis: i}, false);
                            }
                        }
                        chart.redraw();
                    }
                }
            });
        }
    }
});
