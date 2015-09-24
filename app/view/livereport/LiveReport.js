/**
 * @class iRISKClient.view.livereport.LiveReport
 * @extend Ext.grid.Panel
 * Base class for live updates reports such as LivePrices and LivePositions
 */
Ext.define('iRISKClient.view.livereport.LiveReport', {
    extend: 'Ext.grid.Panel',
    bind: '{livestore}',
    viewConfig: {
        trackOver: false
    },
    height: 400
});