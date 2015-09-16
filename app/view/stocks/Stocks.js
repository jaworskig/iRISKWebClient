Ext.define('iRISKClient.view.reports.Stocks', {
	//extend: 'Ext.panel.Panel',
	extend: 'Ext.Component',
	xtype: 'stocks',
	layout: 'fit',
	height: 300,


	loader: {

		url: 'http://lenovoyoga/Chart/TradingView',
		ajaxOptions: ['method','GET'],
		autoLoad: true
	}
});
