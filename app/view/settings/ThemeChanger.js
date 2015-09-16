
Ext.define('iRISKClient.view.settings.ThemeSwitcherButton', {
    extend: 'Ext.Button',
    xtype: 'themeSwitcherButton',

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {

        });

        this.menu = Ext.create('Ext.menu.Menu', {

            items: [{
                text: 'Dark style',
                handler: function (item) {
                    localStorage.setItem("AppTheme", "neptune");
                    location.reload();
                }
            }, {
                text: 'Light style',
                handler: function (item) {
                    localStorage.setItem("AppTheme", "neptune-touch");
                    location.reload();
                }
            }, '-', {
                text: 'English',
                handler: function (item) {
                    localStorage.setItem("AppLocale", "EN");
                    location.reload();
                }
            }, {
                text: 'Norwegian',
                handler: function (item) {
                    localStorage.setItem("AppLocale", "NO");
                    location.reload();
                }
            }]
        });

        me.callParent(arguments);
    }

});