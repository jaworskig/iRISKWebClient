Ext.define('iRISKClient.view.workspaces.WorkSpace', {
    //extend: 'Ext.Component',
    extend: 'Ext.form.Panel',
    //extend: 'Ext.tab.Panel',
    xtype: 'workspace',
    region: 'center',
    layout: 'border',
    controller: 'workspace',
    requires: [
        'iRISKClient.util.GlobalSettings'
    ],

    requires: [
        'iRISKClient.view.workspaces.WorkSpaceController'
        // 'Ext.ux.TabReorderer'
    ],

    //plugins: 'tabreorderer',

    stateful: true,
    stateId: 'worskSpace',


    initComponent: function () {
        var me = this;
        //debugger;
        Ext.applyIf(me, {
            items: [{
                    xtype: 'leftArea',
                    stateId: 'leftArea_' + me.stateId,
                    reference: 'leftArea'

                }, Settings.UseFormulaEditor ? {
                    xtype: 'functions',
                    stateId: 'functions_' + me.stateId
                } : {
                    xtype: 'rightAreaPnl',
                    stateId: 'rightArea_' + me.stateId
                }

            , {
                region: 'center',
                xtype: 'centralPanel',
                reference: 'centerPanel',
                stateId: 'centralArea_' + me.stateId
            }

            , {
                region: 'south',
                xtype: 'bottomTollbar',
                collapseMode: 'header',
                stateId: 'bottomArea_' + me.stateId
            }

            ]
        });

        me.callParent(arguments);
    }



    //items: [{
    //    xtype: 'leftArea'
    //}, {
    //    xtype: 'rightAreaPnl'
    //}, {
    //    region: 'center',
    //    xtype: 'centralPanel',
    //    reference: 'centerPanel'
    //}, {
    //    region: 'south',
    //    xtype: 'bottomTollbar',
    //    collapseMode: 'header'
    //}]
});

