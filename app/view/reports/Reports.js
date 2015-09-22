Ext.define('iRISKClient.view.reports.Reports2', {
    extend: 'Ext.tree.Panel',
    xtype: 'reports',
    layout: 'fit',
    height: 400,
    requires: [
        'iRISKClient.store.ReportStore',
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*'
    ],
    animate: false,
    //singleExpand: false,
    rowLines: true,
    //sortableColumns: false,
    trackMouseOver: false,
    viewConfig: {
        trackOver: false
    },
    //tools: [
    //    {
    //        type: 'gear',
    //        title: 'Edit',
    //        callback: function() {
    //            // show help here
    //        }
    //    }
    //],

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

    constructor: function (cfg) {
        // debugger;
        var me = this;
       
        if (cfg.reportId == null) {
            me.reportName = cfg.$initParent.title;
            me.reportId = cfg.$initParent._partConfig.reportId;
            me.reportGUID = cfg.$initParent._partConfig.reportGUID;

            me.report_type = cfg.$initParent._partConfig.report_type;
            me.report_split = cfg.$initParent._partConfig.report_split;
            me.report_sort = cfg.$initParent._partConfig.report_sort;
            me.report_groupId = cfg.$initParent._partConfig.report_groupId;

        } else {
            me.reportName = cfg.reportName;
            me.reportId = cfg.reportId;
        }


        var returnData = null;

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

            cfg.$initParent.setTitle(me.reportName + " - " + returnData.reportDateUpdate);
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


            this.on({
                columnschanged: { fn: iRISKClient.view.main.MainController.storeLayoutBuffred, scope: this },
                columnresize: { fn: iRISKClient.view.main.MainController.storeLayoutBuffred, scope: this }
            });



            var me = this;
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


            if (layout.ownerCt.header != null) {

                layout.ownerCt.header.insert(1, {
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

                //layout.ownerCt.header.insert(0, {
                //    xtype: 'button',
                //    text: 'Edit Full',
                //    scope: this,
                //    handler: function (btn, evt) {

                //        var w = Ext.create('Ext.window.Window', {
                //            //requires: [
                //            //    'Ext.layout.container.HBox'
                //            //],
                //            width: 600,
                //            minWidth: 350,
                //            height: 350,
                //            layout: {
                //                type: 'border',
                //                padding: 0
                //            },
                //            items: [
                //                 {
                //                     region: 'center',
                //                     //  xtype: 'tabpanel',
                //                     items: [{
                //                         xtype: 'reports',
                //                         title: this.reportName,
                //                         reportName: this.reportName,
                //                         reportId: this.reportId
                //                     }]
                //                 },
                //                 {
                //                     region: 'east',
                //                     //title: 'Configuration',
                //                     width: 350,
                //                     split: true,
                //                     collapsible: false,
                //                     floatable: false,
                //                     items: [{
                //                         xtype: 'report_config',
                //                         reportId: this.reportId
                //                     }]
                //                 }
                //            ]


                //            //layout: 'column',
                //            //items: [
                //            //    {
                //            //        xtype: 'reports',
                //            //        title: this.reportName,
                //            //        reportName: this.reportName,
                //            //        reportId: this.reportId,
                //            //        columnWidth: 0.5
                //            //    }, {
                //            //        xtype: 'report_config',
                //            //        reportId: this.reportId,
                //            //        columnWidth: 0.5
                //            //    }
                //            //]
                //        });
                //        w.show();
                //        w.maximize();


                //        //btn.setHidden(true);
                //        //this.setHidden(true);
                //        //this.ownerCt.add({
                //        //    xtype: 'report_config',
                //        //    reportId: me.reportId
                //        //});
                //        evt.stopPropagation()
                //        return false;
                //    }
                //});
            }

            //layout.ownerCt.header.insert(2, {

            //    xtype: 'container',
            //    flex: 1
            //});

        }
    }




});

