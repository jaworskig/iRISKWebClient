Ext.define('iRISKClient.view.chartsLive.ChartsLive', {
    extend: 'Ext.container.Container',
    xtype: 'chartsLive',
    requires: [
      'Ext.container.Container'
    ],
    config: {
        closable: true
    },

    myid: 0,
    stxx: null,
    curveName: null,

    chartContainer: null,
    chartIQState: null,
    feedProducts: [],

    dateRange: null,
    dateInterval: null,
    defaultResolution: null,


    constructor: function (cfg) {
        // debugger;
        var me = this;

        me.chartIQState = cfg.$initParent._partConfig.chartIQState;
        me.curveName = cfg.$initParent._partConfig.title;
        me.defaultResolution = cfg.$initParent._partConfig.resolution;

        var now = new Date();
        me.dateRange = new Date(new Date(now).setMonth(now.getMonth() - 3));

        me.feedProducts.push(me.curveName);

        HubService.SubscribeFeedArray(me.feedProducts, me);

        me.callParent();
    },


    listeners: {

        resize: function (item, width, height, oldWidth, oldHeight, eOpts) {
            //debugger;
            this.chartContainer.style.height = height + "px";
            this.stxx.resizeChart();
        },

        afterrender: function (layout, eOpts) {
            var me = this;

            me.curveDateRangeMenu(this.container.component.header, me);

            me.curvesSelectMenu(this.container.component.header, me);

            me.curveChartTypeMenu(this.container.component.header, me);

            me.curveResolutionMenu(this.container.component.header, me);

            me.curveToolsMenu(this.container.component.header, me);

            me.curveIndicatorsMenu(this.container.component.header, me);

            this.update("<div class='chartContainer' id='chart_live_" + this.id + "'style='height:460px'></div>");



            me.chartContainer = $$("chart_live_" + this.id);

            me.stxx = new STXChart({ container: me.chartContainer, layout: { "crosshair": true } });



            var startDate = new Date();
            startDate.setMonth(startDate.getMonth() - 3);

            var chartIQUrl = iRISKClient.Application.GlobalSettings.HostUrl + "Chart/ChartIQ";
            me.stxx.attachQuoteFeed(new STX.QuoteFeed.MyFeed(chartIQUrl, startDate), {
                refreshInterval: 0
            });

            me.stxx.callbacks.studyPanelEdit = function (params) {
                var stx = params.stx;
                var sd = params.sd;
                if (STX.Studies.studyLibrary[sd.type] && STX.Studies.studyLibrary[sd.type].name) $$("studyDialog").querySelectorAll(".title")[0].innerHTML = STX.Studies.studyLibrary[sd.type].name;
                else $$("studyDialog").querySelectorAll(".title")[0].innerHTML = sd.type.capitalize();
                STX.Studies.studyDialog(stx, sd.type, $$("studyDialog"), params);
                STX.DialogManager.displayDialog("studyDialog");
            };


            if (me.defaultResolution == "Hourly")
                me.stxx.setPeriodicityV2(60, 1);
            else
                me.stxx.setPeriodicityV2(1, "day");

            // me.stxx.newChart(me.curveName);

            me.stxx.chart.legend = {
                x: 100,
                y: 15
            };

            me.stxx.newChart(me.curveName, null, null, function () {    // call new chart to render your data

                if (me.chartIQState) {
                    me.stxx.reconstructDrawings(me.chartIQState.drawings);
                    me.stxx.importLayout(me.chartIQState.layout);

                    me.chartIQState.series.forEach(function (item) {
                        me.stxx.addSeries(item, { color: "red", data: { useDefaultQuoteFeed: true } });
                    });

                    me.stxx.draw();
                }

                //var d = new Date();
                //d.setMonth(d.getMonth() -3);

                //me.stxx.setSpan({
                //    multiplier: 3,
                //    span: "month",
                //    padding: 30
                //});

                // me.stxx.setStartDate(d);
            });

            if (localStorage.getItem("AppTheme") == 'neptune') {
                STX.ThemeManager.loadBuiltInTheme(me.stxx, "Dark");
            } else {
                STX.ThemeManager.loadBuiltInTheme(me.stxx, "Light");
            }

            me.stxx.changeCallback = function (stxx, change) {
                iRISKClient.view.main.MainController.storeLayoutBuffred();
            }

        }
    },

    handleLiveUpdateFeed: function (msg) {

        if (msg.ProductName == this.curveName) {
            var newData = [];
            newData[0] = {
            };

            msg.Data.forEach(function (item) {

                if (item.Name == "MarketClose" || item.Name == "LAST") {
                    newData[0].Close = item.Values[0];

                    var date = new Date(Date.parse(item.Dates[0]));
                    newData[0].DT = date;
                }



                if (item.Name == "Volume") {
                    newData[0].Volume = item.Values[0];
                }

                if (item.Name == "Open") {
                    newData[0].Open = item.Values[0];
                }

                if (item.Name == "High") {
                    newData[0].High = item.Values[0];
                }

                if (item.Name == "Low") {
                    newData[0].Low = item.Values[0];
                }



            });
            // debugger;

            if (newData[0].DT) {

                console.log(newData[0].Close + " " + newData[0].DT);

                if (this.stxx)
                    this.stxx.appendMasterData(newData);
            }
        }
    },


    changePeriodicity: function (newInterval, item) {

        this.dateInterval = newInterval;

        this.stxx.setPeriodicityV2(1, this.dateInterval, function (err) {

        });
    },


    changeDateRange: function (newDate) {

        this.dateRange = newDate;

        this.stxx.setRange({
            dtLeft: this.dateRange,
            dtRight: new Date()
        });
    },

    studyDialog: function (obj, item, study) {
        // debugger;
        if (!obj.stxx || !obj.stxx.chart.dataSet) return;

        $$("studyDialog").querySelectorAll(".title")[0].innerHTML = item.text;

        STX.Studies.studyDialog(obj.stxx, study, $$("studyDialog"));

        editStxx = obj.stxx;

        var delay = STX.ipad ? 400 : 0;  // so that touch devices don't register taps from menu selection on dialog

        setTimeout(function () {
            STX.DialogManager.displayDialog("studyDialog");
        }, delay);
    },

    renderStudyMenu: function (me) {

        var menu = new Ext.menu.Menu({
            plain: true
        });

        var group = new Ext.container.ButtonGroup({
            columns: 6,
            frame: false
        });


        var sortedStudies = [];

        for (var property in STX.Studies.studyLibrary) {
            if (STX.Studies.studyLibrary.hasOwnProperty(property)) {
                if (STX.Studies.studyLibrary[property].name != '') {
                    sortedStudies.push({
                        name: property,
                        fullName: STX.Studies.studyLibrary[property].name
                    });
                }
            }
        }

        sortedStudies.sort(function (a, b) {
            return a.fullName.localeCompare(b.fullName);
        });


        sortedStudies.forEach(function (item) {
            group.add({
                text: item.fullName,
                studyName: item.name,
                handler: function (btn, e, eOpts) {
                    me.studyDialog(me, this, btn.studyName);
                    menu.hide();
                }
            });
        });

        menu.add(group);

        return menu;
    },

    curveDateRangeMenu: function (header, me) {

        header.insert(1, {
            xtype: 'splitbutton',
            text: '3M',
            menu: new Ext.menu.Menu({
                items: [
                    {
                        text: 'D', handler: function () {

                            var startDate = new Date();
                            startDate.setDate(startDate.getDate() - 1);
                            me.stxx.quoteDriver.quoteFeed.fromDate = startDate;
                            me.stxx.newChart(me.curveName);

                            this.ownerCt.ownerCmp.setText('D');
                        }
                    },
                    {
                        text: 'W', handler: function () {

                            var startDate = new Date();
                            startDate.setDate(startDate.getDate() - 7);
                            me.stxx.quoteDriver.quoteFeed.fromDate = startDate;
                            // me.stxx.quoteDriver.updateChart();
                            me.stxx.newChart(me.curveName);

                            this.ownerCt.ownerCmp.setText('W');
                        }
                    },
                    {
                        text: 'M', handler: function () {

                            var startDate = new Date();
                            startDate.setMonth(startDate.getMonth() - 1);
                            me.stxx.quoteDriver.quoteFeed.fromDate = startDate;
                            me.stxx.newChart(me.curveName);

                            this.ownerCt.ownerCmp.setText('M');
                        }
                    },
                    {
                        text: '3M', handler: function () {


                            var startDate = new Date();
                            startDate.setMonth(startDate.getMonth() - 3);
                            me.stxx.quoteDriver.quoteFeed.fromDate = startDate;
                            me.stxx.newChart(me.curveName);


                            this.ownerCt.ownerCmp.setText('3M');
                        }
                    },
                    {
                        text: '6M', handler: function () {

                            var startDate = new Date();
                            startDate.setMonth(startDate.getMonth() - 6);
                            me.stxx.quoteDriver.quoteFeed.fromDate = startDate;
                            me.stxx.newChart(me.curveName);

                            this.ownerCt.ownerCmp.setText('6M');
                        }
                    },
                    {
                        text: 'YTD', handler: function () {

                            var startDate = new Date();
                            me.stxx.quoteDriver.quoteFeed.fromDate = new Date(startDate.getFullYear(), 0, 1);
                            me.stxx.newChart(me.curveName);


                            this.ownerCt.ownerCmp.setText('YTD');
                        }
                    },
                    {
                        text: '1Y', handler: function () {

                            var startDate = new Date();
                            startDate.setYear(startDate.getFullYear() - 1);
                            me.stxx.quoteDriver.quoteFeed.fromDate = startDate;
                            me.stxx.quoteDriver.updateChart();

                            this.ownerCt.ownerCmp.setText('1Y');
                        }
                    },
                    {
                        text: '2Y', handler: function () {

                            var startDate = new Date();
                            startDate.setYear(startDate.getFullYear() - 2);
                            me.stxx.quoteDriver.quoteFeed.fromDate = startDate;
                            me.stxx.newChart(me.curveName);

                            this.ownerCt.ownerCmp.setText('2Y');
                        }
                    },
                     {
                         text: 'X', handler: function () {

                             var startDate = new Date();
                             startDate.setYear(startDate.getFullYear() - 20);
                             me.stxx.quoteDriver.quoteFeed.fromDate = startDate;
                             me.stxx.quoteDriver.updateChart();

                             this.ownerCt.ownerCmp.setText('X');
                         }
                     }

                ]
            }),
            handler: function (btn, evt) {
                evt.stopPropagation();
                return false;
            },
            listeners: {
                arrowclick: function (btn, e, eOpts) {
                    e.stopPropagation();
                    return false;
                }
            }
        });


    },

    curvesSelectMenu: function (header, me) {


        header.insert(2, {
            xtype: 'splitbutton',
            text: 'Curves',
            menu: new Ext.menu.Menu({
                items: [
                {
                    xtype: 'fieldcontainer',
                    defaultType: 'radiofield',
                    defaults: {
                        flex: 1
                    },
                    layout: 'hbox',
                    margin: '5 0 5 5',// (top, right, bottom, left)
                    items: [
                        {
                            boxLabel: 'Replace',
                            name: 'action',
                            inputValue: 'replace',
                            checked: true
                        }, {
                            boxLabel: 'Add',
                            name: 'action',
                            inputValue: 'add'
                        }
                    ]
                }, {
                    xtype: 'combobox',
                    margin: '0 5 5 5',// (top, right, bottom, left)
                    minChars: 3,
                    queryParam: 'query',
                    queryMode: 'remote',

                    valueField: 'full_name',
                    displayField: 'full_name',

                    store: {
                        type: 'curve-list'
                    },

                    listeners: {
                        scope: this,
                        select: function (item, value) {
                            //debugger;
                            item.ownerCt.hide();


                            if (item.ownerCt.items.items[0].items.items[0].checked) {
                                me.stxx.newChart(value.data.full_name);
                                me.ownerCt.setTitle(value.data.full_name);

                                me.curveName = value.data.full_name;

                                me.feedProducts = [];
                                me.feedProducts.push(me.curveName);
                                HubService.SubscribeFeedArray(me.feedProducts, me);

                            } else {
                                me.stxx.addSeries(value.data.full_name, { color: "red", data: { useDefaultQuoteFeed: true } });
                            }


                        }
                    }
                }]
            }),
            handler: function (btn, evt) {
                evt.stopPropagation()
                return false;
            },
            listeners: {
                arrowclick: function (btn, e, eOpts) {
                    e.stopPropagation()
                    return false;
                }
            }
        });

    },

    curveChartTypeMenu: function (header, me) {
        header.insert(3, {
            xtype: 'splitbutton',
            text: 'Chart',
            menu: new Ext.menu.Menu({
                items: [
                    {
                        text: 'Candel', handler: function () { me.stxx.setChartType('candle'); }
                    },
                    {
                        text: 'Bar', handler: function () { me.stxx.setChartType('bar'); }
                    },
                    {
                        text: 'Colored Bar', handler: function () { me.stxx.setChartType('colored_bar'); }
                    },
                    {
                        text: 'Line', handler: function () { me.stxx.setChartType('line'); }
                    },
                    {
                        text: 'Hollow Candle', handler: function () { me.stxx.setChartType('hollow_candle'); }
                    },
                    { text: 'Mountain', handler: function () { me.stxx.setChartType('mountain'); } }
                ]
            }),
            handler: function (btn, evt) {
                evt.stopPropagation()
                return false;
            },
            listeners: {
                arrowclick: function (btn, e, eOpts) {
                    e.stopPropagation()
                    return false;
                }
            }
        });
    },

    curveResolutionMenu: function (header, me) {

        header.insert(4, {
            xtype: 'splitbutton',
            text: '1D',
            menu: new Ext.menu.Menu({
                items: [
                    {
                        text: '1 Min', handler: function () {
                            me.changePeriodicity(1);
                            this.ownerCt.ownerCmp.setText('');
                        }
                    },
                    {
                        text: '5 Min', handler: function () {
                            me.changePeriodicity(5);
                            this.ownerCt.ownerCmp.setText('5 Min');
                        }
                    },
                    {
                        text: '10 Min', handler: function () {
                            me.changePeriodicity(10);
                            this.ownerCt.ownerCmp.setText('10 Min');
                        }
                    },
                    {
                        text: '15 Min', handler: function () {
                            me.changePeriodicity(15);
                            this.ownerCt.ownerCmp.setText('15 Min');
                        }
                    },
                    {
                        text: '1 H', handler: function () {
                            me.changePeriodicity(60);
                            this.ownerCt.ownerCmp.setText('1 H');
                        }
                    },
                    {
                        text: '1D', handler: function () {
                            me.changePeriodicity('day');
                            this.ownerCt.ownerCmp.setText('1D');
                        }
                    },
                    {
                        text: '1W', handler: function () {
                            me.changePeriodicity('week');
                            this.ownerCt.ownerCmp.setText('1W');
                        }
                    },
                    {
                        text: '1M', handler: function () {
                            me.changePeriodicity('month');
                            this.ownerCt.ownerCmp.setText('1M');
                        }
                    }

                ]
            }),
            handler: function (btn, evt) {
                evt.stopPropagation();
                return false;
            },
            listeners: {
                arrowclick: function (btn, e, eOpts) {
                    e.stopPropagation();
                    return false;
                }
            }
        });

    },

    curveToolsMenu: function (header, me) {

        header.insert(5, {
            xtype: 'splitbutton',
            text: 'Select Tools',
            menu: new Ext.menu.Menu({
                items: [{
                    text: 'Crosshairs', handler: function () {
                        me.stx.layout.crosshair = true;
                    }
                }, {
                    text: 'Fibonacci', handler: function () {
                        me.stxx.changeVectorType('fibonacci');
                    }
                }, {
                    text: 'Horizontal', handler: function () {
                        me.stxx.changeVectorType('horizontal');
                    }
                }, {
                    text: 'Vertical', handler: function () {
                        me.stxx.changeVectorType('vertical');
                    }
                }, {
                    text: 'Line', handler: function () {
                        me.stxx.changeVectorType('line');
                    }
                }, {
                    text: 'Ray', handler: function () {
                        me.stxx.changeVectorType('ray');
                    }
                }, {
                    text: 'Segment', handler: function () {
                        me.stxx.changeVectorType('segment');
                    }
                }, {
                    text: 'Rectangle', handler: function () {
                        me.stxx.changeVectorType('rectangle');
                    }
                }, {
                    text: 'Measure', handler: function () {
                        me.stxx.changeVectorType('measure');
                    }
                }, {
                    text: 'Annotation', handler: function () {
                        me.stxx.changeVectorType('annotation');
                    }
                }, {
                    text: 'Continuous', handler: function () {
                        me.stxx.changeVectorType('continuous');
                    }
                }, {
                    text: 'Gartley', handler: function () {
                        me.stxx.changeVectorType('gartley');
                    }
                }, {
                    text: 'Ellipse', handler: function () {
                        me.stxx.changeVectorType('ellipse');
                    }
                }, {
                    text: 'Freeform', handler: function () {
                        me.stxx.changeVectorType('freeform');
                    }
                }
                ]
            }),


            handler: function (btn, evt) {
                evt.stopPropagation()
                return false;
            },
            listeners: {
                arrowclick: function (btn, e, eOpts) {
                    e.stopPropagation()
                    return false;
                }
            }
        });
    },

    curveIndicatorsMenu: function (header, me) {

        header.insert(6, {
            xtype: 'splitbutton',
            text: 'Indicators',
            menu: this.renderStudyMenu(me),
            handler: function (btn, evt) {
                evt.stopPropagation()
                return false;
            },
            listeners: {
                arrowclick: function (btn, e, eOpts) {
                    e.stopPropagation()
                    return false;
                }
            }
        });

    }


});