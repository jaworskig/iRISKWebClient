Ext.define('iRISKClient.overrides.data.Connection', {
    override: 'Ext.data.Connection',
    requires: [
        'iRISKClient.util.GlobalSettings'
    ],

    /**
     * Template method for overriding url
     * @private
     * @param {Object} options
     * @param {String} url
     * @return {String} The modified url
     */
    setupUrl: function(options, url) {
        var form = this.getForm(options),
            hostUrl = Settings.HostUrl;

        if (form) {
            url = url || form.action;
        }

        if(url) {
            if (url.lastIndexOf(hostUrl) < 0) {
                url = Settings.HostUrl + url;
            }
        }
        else {
            url = hostUrl;
        }

        return url;
    }
});