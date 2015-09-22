Ext.define('iRISKClient.Application.GlobalSettings', {
    singleton: true,

    config : {

    },
    constructor : function(config){
        this.initConfig(config);
    },

    HostUrl: 'http://yellow.irisk.no/',
    //HostUrl: 'http://lenovoyoga/',
    //HostUrl: 'http://192.168.1.42/',
    CellBlinkColor: 'F4B084',




    getStatusCellColor: function (status) {

        var nColor = "#FFFFFF";
        switch (status) {
            case "Pending":
                {
                    nColor = '#FF0000';
                    break;
                }
            case "Active":
                {
                    nColor = '#A9D08E';
                    break;
                }
            case "Approved":
                {
                    nColor = '#00B050';
                    break;
                }
            case "Deleted":
                {
                    nColor = '#BFBFBF';
                    break;
                }
        }

        return nColor;
    }


});

Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

isUndefinedOrNull = function(value) {
    return value === undefined || value === null;
};





var blinkCellsOnUpdate = false;
