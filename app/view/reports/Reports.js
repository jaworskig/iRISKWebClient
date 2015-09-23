Ext.define('iRISKClient.view.reports.Reports2', {
    extend: 'Ext.tree.Panel',
    xtype: 'reports',
    layout: 'fit',
    height: 400,
    requires: [
        'iRISKClient.store.ReportStore',
        'iRISKClient.view.reports.ReportsController',
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*'
    ],

    controller: 'reportscontroller',

    reportName: null,
    reportId: null,
    reportGUID: null,
    lastUpdate: null,

    report_type: null,
    report_split: null,
    report_sort: null,
    report_groupId: null,

    report_lastUpdate: new Date(),
    updateCheckTask: null,

    animate: false,
    rowLines: true,
    trackMouseOver: false,
    viewConfig: {
        trackOver: false
    },

    constructor: function (cfg) {
        var me = this,
            partConfig = cfg.partConfig || cfg.$initParent._partConfig,
            returnData;

        if (cfg.reportId == null) {
            me.reportName = partConfig.title;
            me.reportId = partConfig.reportId;
            me.reportGUID = partConfig.reportGUID;

            me.report_type = partConfig.report_type;
            me.report_split = partConfig.report_split;
            me.report_sort = partConfig.report_sort;
            me.report_groupId = partConfig.report_groupId;

        } else {
            me.reportName = partConfig.reportName;
            me.reportId = partConfig.reportId;
        }

        me.partConfig = partConfig;

        Ext.Ajax.request({
            async: false,
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Report/ReportData?name=' + me.reportName + '&reportTempId=' + me.reportGUID,
            success: function (response) {
                var resp = response.responseText;
                if (resp) {
                    returnData = Ext.JSON.decode(resp);
                }
            }
        });

        if (returnData.ReportTempDisposed == true) {

            me.recreateReport();

        } else {
            me.columns = returnData.columns;
            me.columns[0].width = 200;

            me.store = new iRISKClient.store.ReportStore();
            var model = me.store.getModel();
            model.fields = returnData.fields;

            me.store.setRootNode(returnData.data);
            me.setBorder(1);

            //cfg.$initParent.setTitle(me.reportName + " - " + returnData.reportDateUpdate);
            me.report_lastUpdate = new Date();

        }


        HubService.SubscribeReportUpdate(me);

        this.startReportUpdateCheck();

        me.callParent();
    },

    recreateReport: function () {

        var me = this;

        Ext.Ajax.request({
            async: false,
            params: {
                reportTempId: me.reportGUID,
                groupId: me.report_groupId,
                name: me.reportName,
                type: me.report_type,
                split: me.report_split,
                sort: me.report_sort
            },
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Report/PostionReportCreateNew',
            success: function (response) {
                var resp = response.responseText;
                me.reportGUID = resp;
            }
        });
    },

    startReportUpdateCheck: function () {

        updateClockTask = {
            run: this.updateClock,
            scope: this,
            interval: 600000
        };

        this.updateCheckTask = new Ext.util.TaskRunner(); //Ext.TaskManager.start(updateClockTask);
        this.updateCheckTask.start(updateClockTask);
    },

    updateClock: function () {

        var nowDate = new Date();
        var diff = (nowDate - this.report_lastUpdate) / 1000;
        //console.log("Report update diff :" + diff)
        //5min dealy 300
        if (diff > 3000 && iRISKServerConnected) {
            this.recreateReport();
        }
    },

    handleReportUpdate: function (msg) {
        var me = this;
        // debugger;-

        console.log("HandleReportUpdate for ReportId: " + msg.ReportId + " ReportTempId: " + msg.ReportTempId + " for " + me.reportGUID + " - " + me.reportId);

        if ((msg.ReportId > 0 && msg.ReportId == me.reportId) || (msg.ReportTempId != null && msg.ReportTempId == me.reportGUID)) {

            // me.setVisible(true) Not updating hidden grid

            me.updateReportData(msg);

        }
    },


    updateReportData: function (msg) {
        var me = this;
        var returnData = null;
        Ext.Ajax.request({
            async: false,
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Report/ReportData?name=' + me.reportName + '&reportTempId=' + me.reportGUID,
            success: function (response) {

                var resp = response.responseText;
                if (resp) {
                    returnData = Ext.JSON.decode(resp);
                    // debugger;

                    me.report_lastUpdate = new Date();

                    var title = msg.ReportName + " - " + returnData.reportDateUpdate;

                    if (me.ownerCt != null)
                        me.ownerCt.setTitle(title);
                    else
                        me.ownerGrid.setTitle(title);

                    if (returnData.columns) {
                        returnData.columns[0].width = 200;
                    }

                    me.setColumns(returnData.columns);

                    var newStore = new iRISKClient.store.ReportStore();
                    newStore.setFields(returnData.fields);
                    newStore.setRootNode(returnData.data);

                    me.setStore(newStore);
                }
            }
        });

    },

    onZoomClick: function(){
        var me = this,
            partConfig = me.partConfig;

        Ext.GlobalEvents.fireEvent('showfullscreen', 'reports', partConfig);
    },

    onUnzoomClick: function(){
        Ext.GlobalEvents.fireEvent('closefullscreen');
    },

    listeners: {

        destroy: function (me, eOpts) {

            if (me.reportGUID != null) {
                Ext.Ajax.request({
                    url: iRISKClient.Application.GlobalSettings.HostUrl + 'Report/PostionReportDispose?reportTempId=' + me.reportGUID
                });
            }

            me.updateCheckTask.destroy();
            HubService.RemoveReportUpdate(me);
            iRISKClient.view.main.MainController.storeLayoutBuffred();
        },

        afterrender: function (layout, eOpts) {
            var me = this,
                header = me.container.component.header,
                partConfig = me.partConfig,
                zoomed = false;

            this.on({
                columnschanged: { fn: iRISKClient.view.main.MainController.storeLayoutBuffred, scope: this },
                columnresize: { fn: iRISKClient.view.main.MainController.storeLayoutBuffred, scope: this }
            });

            if(!header){
                zoomed = true;
            }

            if(!zoomed) {
                header.addTool({
                    type: 'maximize',
                    title: 'Zoom',
                    handler: me.onZoomClick,
                    scope: me
                });
            }
            else {
                me.addTool({
                    type: 'close',
                    title: 'Close',
                    handler: me.onUnzoomClick,
                    scope: me
                });
            }

            //if (me.stateValue != undefined)
            //    me.applyState(me.stateValue);

            //layout.ownerCt.addTool({
            //    type: 'gear',
            //    callback: function (gridOwner) {
            //        gridOwner.items.items[0].setHidden(true);
            //        gridOwner.add({
            //            xtype: 'report_config',
            //            reportId: me.reportId
            //        });
            //    }
            //});


            //layout.ownerCt.header.insert(1, {
            //    items: [
            //    {
            //      //  xtype: 'tool',
            //        xtype: 'button',
            //        iconCls: 'x-tool-img x-tool-gear',
            //        text: 'Edit'
            //    }]
            //});

            if(zoomed){
                header = me.getHeader();
            }

            if (header) {

                header.insert(1, {
                    xtype: 'button',
                    margin: '0 5 0 0',// (top, right, bottom, left)
                    text: 'Edit',//(me.reportId > 0) ? 'Edit' : 'Save',
                    scope: this,
                    handler: function (btn, evt) {

                        btn.setHidden(true);
                        this.setHidden(true);
                        this.ownerCt.add({
                            xtype: 'report_config',
                            reportId: me.reportId,
                            reportGUID: me.reportGUID
                        });
                        evt.stopPropagation()
                        return false;
                    }
                });

            }

        }
    }

});

