(function(){

	function _stx_demo_js(_exports,_stxKernel) {
		
		var STX=_stxKernel.STX;
		var STXChart=_stxKernel.STXChart;
		var $$=_stxKernel.$$;
		var $$$=_stxKernel.$$$;
	
		// Declare a STXChart object. This is the main object for drawing charts
		var stxx=new STXChart({container:$$$(".chartContainer")});

		function processTickData(arr){
		  stxx.setPeriodicityV2(1, "tick");
		  stxx.newChart("SPY", arr);
		}
		/*
		 * Initial function that is called when chart loads. If you want the chart to default to a security, or if you're passing a security in with a query string then load it here
		*/
		function displayChart(){
		  stxx.setPeriodicityV2(1, "day");
		  stxx.newChart("SPY");
		}

		/**
		 * Create your own QuoteFeed class derived from STX.QuoteFeed. See documentation or stx.js on how to do this.
		 */
		stxx.attachQuoteFeed(new STX.QuoteFeed.Demo(),{"refreshInterval":10});
		 
		/*
		 * Modify the components in this function to establish the behavior of your UI.
		 */
		function runSampleUI(){
			STX.ThemeManager.builtInThemes={
				"Light":true,
				"Dark":true
			};
			// Set up menu manager
			STX.MenuManager.makeMenus();
			STX.MenuManager.registerChart(stxx);

			var currentTheme=STX.StorageManager.get("themes");
			if(currentTheme){
				STX.ThemeManager.setThemes(JSON.parse(currentTheme), stxx);
			}else{
				STX.ThemeManager.loadBuiltInTheme(stxx, "Light"); // Set "Light" as the default theme
			}
			STX.ThemeManager.themesToMenu($$("customThemeSelector"), $$("builtInThemeSelector"), stxx, STX.StorageManager.callbacker("themes"));

			var toolbar=new STX.DrawingToolbar($$$(".stx-wrapper .stx-toolbar"), stxx);
	
			STX.TimeZoneWidget.initialize(STX.StorageManager.get("timezone"), STX.StorageManager.callbacker("timezone"));

			$$("fullscreen").onclick=toggleFullScreenMode;
			$$("axislabel").onclick=toggleAxisLabel;
			$$("dismiss_study").onclick=STX.DialogManager.dismissDialog;
			$$("dismiss_theme").onclick=STX.DialogManager.dismissDialog;
			$$("dismiss_timezone").onclick=STX.DialogManager.dismissDialog;
			$$("create_study").onclick=function(){
				STX.Studies.go($$("studyDialog"), stxx);
				STX.DialogManager.dismissDialog();
			};
			$$("create_theme").onclick=function(){
				STX.ThemeManager.saveTheme($$("themeName").value, stxx);
				STX.DialogManager.dismissDialog();
			};
			$$("remove_timezone").onclick=function(){
				STX.TimeZoneWidget.removeTimeZone();
				STX.DialogManager.dismissDialog();
			};
			//$$("undo_last").onclick=stxx.undoLast;
			
			function textCallback(that, txt, filter, clicked){
				if(clicked) that.config.input.value="";

				// Here is dummy code that demonstrates the format which your lookup module should return

				var sampleResults=[
					{symbol:"S",description:"Sprint Corporation", exchange:"NYSE"},
					{symbol:"SPY",description:"SPDR S&amp;P 500 ETF", exchange:"NYSE"},
					{symbol:"^GSPC",description:"SPDR S&amp;P 500", exchange:""},
					{symbol:"CSCO",description:"Cisco Systems, Inc.", exchange:"NASDAQ"},
					{symbol:"SWKS",description:"Skyworks Solutions Inc.", exchange:"NASDAQ"},
					{symbol:"GLD",description:"SPDR Gold Shares", exchange:"NYSE"},
					{symbol:"WMT",description:"Wal-Mart Stores Inc.", exchange:"NYSE"},
					{symbol:"SLV",description:"iShares Silver Trust", exchange:"NYSE"},
					{symbol:"DDD",description:"3D Systems Corp.", exchange:"NYSE"},
					{symbol:"GS",description:"The Goldman Sachs Group, Inc.", exchange:"NYSE"},
					{symbol:"^USDCAD",description:"US Dollar Canadian Dollar", exchange:"FX"},
					{symbol:"^EURUSD",description:"Euro US Dollar", exchange:"FX"}
				];
			
				// This is a sample filtering function for sampleResults above.
				// You may want to do your filtering within own search method
				(function(filter){
					var myResults=[];
					if(filter){
						var elems={
							"STOCKS":[0,1,3,4,5,6,7,8,9],
							"FOREX":[10,11],
							"INDEXES":[2]
						};
						if(!elems[filter]) return;
						for(var i=0;i<elems[filter].length;i++){
							myResults.push(sampleResults[elems[filter][i]]);
						}
						sampleResults=[].concat(myResults);
					}
					myResults=[];
					for(var j=0;j<sampleResults.length;j++){
						if(sampleResults[j].description.toLowerCase().indexOf(txt.toLowerCase())>-1 ||
							sampleResults[j].symbol.toLowerCase().indexOf(txt.toLowerCase())===0){
							myResults.push(sampleResults[j]);
						}
					}
					sampleResults=[].concat(myResults);
				})(filter);
			
				// Display the results in the drop down
				that.displayResults(sampleResults); 

				/*
				// this is sample code for enabling simple suggestive search using an ajax query
				// have your server return a JSON object in the format of sampleResults above
				function processSearchResults(that){
				  return function(status, results){
					if(status==200){
					  that.displayResults(JSON.parse(results));
					}
				  };
				}
				var url="http://yourdomain.com?search=" + txt + "&filter=" + filter;
				STX.postAjax(url, null, processSearchResults(that));
				*/
			}
	
			function selectCallback(that, symbol, filter){
				stxx.newChart(symbol);
			}
	
			var config={
				input: $$$("#symbol"),								// input field from the GUI
				textCallback: textCallback,							// If you don't have a symbol lookup then just leave this blank
				selectCallback: selectCallback,						// Function used to act on the symbol selected. Normally used to create a new chart with the new symbol.
				filters:["ALL","STOCKS","FOREX","INDEXES"],			// Names of the filters you are supporting
			    stx: stxx									// the chart object -- needed for translations
			};
			var stxLookupWidget=new STX.LookupWidget(config);
			stxLookupWidget.init();
	
		}

		/*
		 * Everything from here on is code to support the stx-demo.html user interface. You should not need to modify most of this code.
		 */

		// Add any additional intervals that you support to the displayMap
		_exports.changePeriodicity=function(newInterval){
			var displayMap={
					"day":{"1":"1D"},
					"week":{"1":"1W"},
					"month":{"1":"1M"},
					"1":{"1":"1m"},
					"5":{"1":"5m"},
					"30":{"1":"30m"}
			};
		  stxx.setPeriodicityV2(1, newInterval, function(err){
			if(!err){
			  $$$("#periodBtn").childNodes[0].data=displayMap[newInterval][1];
			}
		  });
		};

		_exports.setChartType=function(type){
			return stxx.setChartType(type);
		};

		_exports.toggleLog=function(){
			stxx.layout.semiLog=!stxx.layout.semiLog;
			STX.swapClassName($$$(".stx-logscale"),stxx.layout.semiLog.toString(),(!stxx.layout.semiLog).toString());
			stxx.draw();
			stxx.changeOccurred("layout");
			stxx.doDisplayCrosshairs();
		};

		_exports.setDrawingTool=function(tool,crosshairOn){
			STX.DrawingToolbar.setDrawingType(tool,this);
			if(tool===""){
				STX.DrawingToolbar.setCrosshairs(crosshairOn,this);
			}
		};

		_exports.setLineWidth=function(width, pattern){
			STX.DrawingToolbar.setLine(width, pattern, this);
		};

		_exports.clearDrawings=function(){
			stxx.clearDrawings();
		};

		_exports.displayAndPopulateDialog=function(manager,name){
			STX.DialogManager.displayDialog(name);
			if(manager.toLowerCase()=="theme") STX.ThemeManager.populateDialog(name, stxx);
			else if(manager.toLowerCase()=="timezone") STX.TimeZoneWidget.populateDialog(name);
		};

		// Indirection function for creating the study dialog.
		_exports.studyDialog=function(study){
			if(!stxx || !stxx.chart.dataSet) return;
			$$("studyDialog").querySelectorAll(".title")[0].innerHTML=this.innerHTML;
			STX.Studies.studyDialog(stxx, study, $$("studyDialog"));
			var delay=STX.ipad?400:0;  // so that touch devices don't register taps from menu selection on dialog
			setTimeout(function(){
				STX.DialogManager.displayDialog("studyDialog");
			}, delay);
		};

		_exports.quickAddStudy=function(config){
			STX.Studies.quickAddStudy(stxx, config.studyName, config.inputs, config.outputs, config.parameters);
		};

		STXChart.prototype.prepend("headsUpHR", function(){
			var tick=Math.floor((STXChart.crosshairX-this.chart.left)/this.layout.candleWidth);
			var prices=this.chart.xaxis[tick];
	
			$$("huOpen").innerHTML="";
			$$("huClose").innerHTML="";
			$$("huHigh").innerHTML="";
			$$("huLow").innerHTML="";
			$$("huVolume").innerHTML="";
			if(prices){
				if(prices.data){
					$$("huOpen").innerHTML=this.formatPrice(prices.data.Open);
					$$("huClose").innerHTML=this.formatPrice(prices.data.Close);
					$$("huHigh").innerHTML=this.formatPrice(prices.data.High);
					$$("huLow").innerHTML=this.formatPrice(prices.data.Low);
					$$("huVolume").innerHTML=STX.condenseInt(prices.data.Volume);
				}
			}
		});

		/** This injection creates a legend for overlays that cannot be deleted with a right click  */
		STXChart.prototype.append("draw", function(){
		  if(!this.layout.studies) return;

		  function closure(stx, sd){
			return function(e){
				var removeFN=sd.libraryEntry.removeFN?sd.libraryEntry.removeFN:STX.Studies.removeStudy;
				removeFN(stx,sd);
				e.stopPropagation();
				STX.clearSafeClickTouches(e.target);
				e.target.style.display="";
			};
		  }
		  for(var id in this.layout.studies){
			var sd=this.layout.studies[id];
			if(!sd.libraryEntry.customRemoval) continue;
			var closeIcon=$$$("#studies #" + sd.name.replace(" ","-"));
			if(closeIcon){
			  closeIcon.style.display="inline-block";
			  if(!closeIcon.safeClickTouchEvents){
				STX.safeClickTouch(closeIcon, closure(this, sd));
			  }
			}
		  }
		});

		function resizeContainers(){
			if(STX.ipad && STX.isIOS7or8){
				// IOS7 bug in landscape mode doesn't report the pageHeight correctly. The fix is to fix the height
				// in css and then adjust the body height to the new size
				STX.appendClassName($$$("html"),"ipad ios7");
				$$$("body").style.height=STX.pageHeight()+"px";
			}

			var chartContainer=$$$(".chartContainer");
			var chartArea=$$$(".stx-wrapper");
			var sidePanel=$$$(".stx-panel-side");
			var panelWidth=2;
			if(sidePanel && sidePanel.offsetLeft){
				panelWidth=chartArea.offsetWidth-sidePanel.offsetLeft;
			}
	
			chartContainer.style.width=(chartArea.offsetWidth-panelWidth)+"px";
	
			var bottomMargin=2;
			if($$$(".stx-footer")) bottomMargin=$$$(".stx-footer").offsetHeight;

			chartContainer.style.height=(STX.pageHeight()-STX.getPos(chartContainer).y - bottomMargin) + "px";
			chartArea.style.height=(STX.pageHeight()-STX.getPos(chartArea).y - bottomMargin) + "px";
	
			if(stxx && stxx.chart.canvas){
				stxx.resizeChart();
			}
		}

		function toggleFullScreenMode(){
			var wrapper=$$$(".stx-wrapper");
			window.fullScreenMode=!window.fullScreenMode;
			var chartContainer=$$$(".chartContainer");
			if(!window.fullScreenMode){
				var rightSide=stxx.chart.maxTicks-stxx.chart.scroll;
				wrapper.style.position=null;
				wrapper.style.left=null;
				wrapper.style.top=null;
				wrapper.style.width=null;
				chartContainer.style.height=chartContainer.style.prevHeight;
				chartContainer.style.width=chartContainer.style.prevWidth;
				wrapper.style.height=null;
				wrapper.style.width=null;
				resizeScreen();
				stxx.chart.scroll=stxx.chart.maxTicks-rightSide;
			}else{
				// stx-wrapper must be at the body level of the page for full screen to work
				// and it must have a z-index greater than anything else on the page
				wrapper.style.position="absolute";
				wrapper.style.left="0px";
				wrapper.style.top="0px";
				wrapper.style.width="100%";
				chartContainer.style.prevHeight=chartContainer.style.height;
				chartContainer.style.prevWidth=chartContainer.style.width;
				resizeScreen();
			}
			stxx.draw();
		}

		function toggleAxisLabel(){
			STX.DrawingToolbar.toggleAxisLabel(this);
		}

		function resizeScreen(){
			if(stxx && stxx.chart.canvas){
				if(window.fullScreenMode){
					resizeContainers();
				}else{
					stxx.resizeChart();
				}
			}
		}

		window.onresize=resizeScreen;

		runSampleUI();

		displayChart();

		return _exports;
	}

	{
		var _stx_demo_exports={};
		if(typeof exports!=="undefined") _stx_demo_exports=exports;
	
		if ( typeof define === "function" && define.amd ) {
			var files=["stxLibrary"];
			if (!document.createElement('canvas').getContext) files.push("excanvas");
			define( files, function(_stxLibrary) { 
				STXUI=_stx_demo_js(_stx_demo_exports,_stxLibrary);
				return STXUI;
			} );
		}else{
			var _stxLibrary={
					"STX":STX,
					"STXChart":STXChart,
					"$$":$$,
					"$$$":$$$
			};
			STXUI=_stx_demo_js(_stx_demo_exports,_stxLibrary);
		}
	}

})();