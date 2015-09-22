Ext.define('iRISKClient.Application', {
    extend: 'Ext.app.Application',
    name: 'iRISKClient',


    launch: function () {

        Ext.Ajax.setUseDefaultXhrHeader(false);

        // Check whether the browser supports LocalStorage
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var supportsLocalStorage = Ext.supports.LocalStorage,
            loggedIn;

        if (!supportsLocalStorage) {

            // Alert the user if the browser does not support localStorage
            Ext.Msg.alert('Your Browser Does Not Support Local Storage');
            return;
        }

        Ext.Ajax.request({
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Account/LoginSenchaIsAuthenticated',
            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);

                if (obj.IsAuthenticated) {

                    localStorage.setItem("UserName", obj.UserName);

                    Ext.create({ xtype: 'app-main' });
                } else {
                    Ext.create({ xtype: 'login' });
                }
            },

            failure: function (response, opts) {
                alert('server-side failure with status code ' + response.status);
            }
        });
    }

});



//TypeError: child.activate is not a function :FIX
Ext.tab.Bar.prototype.beforeFocusableChildFocus = function (child, e) {
    var me = this,
        mixin = me.mixins.focusablecontainer;

    mixin.beforeFocusableChildFocus.call(me, child, e);

    if (!child.active && Ext.isFunction(child.activate)) {
        child.activate();
    }

    me.doActivateTab(child);
};