Ext.define('iRISKClient.view.mainnew.Main', {
    extend: 'Ext.Panel',
    plugins: 'viewport',
    xtype: 'app-main',
    id: 'irisk-main-view',
    requires: [
        'iRISKClient.view.mainnew.MainModel',
        'iRISKClient.view.mainnew.MainController',
        'iRISKClient.view.dashboardsnew.Dashboard',
        'iRISKClient.view.leftareanew.LeftArea',
        'iRISKClient.view.rightArea.RigthArea',
        'iRISKClient.view.toolbar.BottomTollbar',
        'iRISKClient.util.GlobalSettings',
        'Ext.tab.Bar'
    ],
    controller: 'mainnew',
    viewModel: {
        type: 'mainnew'
    },
    stateful: true,
    stateId: 'main',
    layout: 'border',
    tbar: [
        // Title Component
        {
            xtype: 'component',
            cls: 'irisk-title',
            margin: '0 10',
            padding: '5 0 0 0',
            html: 'iRISK'
        },

        // Workspace Buttons
        { 
            text: '1',
            reference: 'workspaceBtn1',
            enableToggle: true,
            toggleGroup: 'workspace',
            toggleHandler: 'onWorkspaceBtnClick'
        },
        { 
            text: '2',
            reference: 'workspaceBtn2',
            enableToggle: true,
            toggleGroup: 'workspace',
            toggleHandler: 'onWorkspaceBtnClick'
        },
        { 
            text: '3',
            reference: 'workspaceBtn3',
            enableToggle: true,
            toggleGroup: 'workspace',
            toggleHandler: 'onWorkspaceBtnClick'
        },
        { 
            text: '4',
            reference: 'workspaceBtn4',
            enableToggle: true,
            toggleGroup: 'workspace',
            toggleHandler: 'onWorkspaceBtnClick'
        },

        // Products Combo
        {
            xtype: 'combo',
            name: 'product-query',
            autoSelect: true,
            editable: false,
            minChars: 0,
            bind: {
                store: '{products}'
            },
            displayField: 'name',
            valueField: 'name',
            listeners: {
                select: 'onProductSelect'
            }
        },

        // Curves Combo
        {
            xtype: 'combo',
            minChars: 3,
            queryParam: 'query',
            queryMode: 'remote',
            valueField: 'full_name',
            displayField: 'full_name',
            bind: {
                store: '{curves}'
            },
            listeners: {
                select: 'onCurveSelect'
            }
        },

        {
            text: 'Store',
            xtype: 'button',
            handler: 'onStoreLayoutClick'
        },

        // Spacer
        {
            xtype: 'component',
            flex: 1
        },

        {
            xtype: 'component',
            id: 'feed-status-text',
            cls: 'irisk-feed-status',
            padding: 3
        },

        {
            xtype: 'button',
            reference: 'statusButton',
            html: '#',
            handler: 'onCheckWsState'
        },

        {
            xtype: 'themeSwitcherButton',
            text: 'Change style'
        },

        {
            xtype: 'button',
            iconCls: 'x-fa fa-cog',
            handler: 'onShowSettingsClick'
        },

        {
            xtype: 'button',
            cls: 'irisk-logout-button',
            bind: {
                html: '{username}'
            },
            handler: 'onShowLogoutClick'
        }
    ],
    listeners: {
        afterrender: 'onAfterRender'
    },

    initComponent: function(){
        var me = this,
            formulaEditor = Settings.UseFormulaEditor,
            items = [];

        items = [
            {
                xtype: 'leftareanew',
                reference: 'leftArea',
                region: 'west'
            },
            {
                xtype: 'iriskdashboard',
                reference: 'dashboard',
                region: 'center'
            },
            {
                region: 'south',
                xtype: 'bottomTollbar',
                collapseMode: 'header'
            }
        ];

        if(formulaEditor){
            items.push({
                xtype: 'functions'
            });
        }
        else {
            items.push({
                xtype: 'rightAreaPnl'
            });
        }

        me.items = items;

        me.callParent(arguments);
    }
});