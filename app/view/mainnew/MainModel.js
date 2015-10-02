Ext.define('iRISKClient.view.mainnew.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainnew',
    requires: [
        'iRISKClient.proxy.CachedRestProxy'
    ],
    formulas: {
        username: function(){
            return localStorage.getItem("UserName");
        },
        workspace: function () {
            return Settings.workspace;
        }
    },
    stores: {
        products: {
            fields: ['name'],
            proxy: {
                type: 'cachedAjax',
                cacheName: 'Products',
                url: 'AppsForOffice/ProductQueries',
                reader: {
                    type: 'json',
                    rootProperty: 'ProductQueries',
                    transform: function (data) {
                        data = data.map(function (val) {
                            return { name: val };
                        });
                        return { ProductQueries: data };
                    }
                }
            }
        },
        curves: {
            proxy: {
                type: 'ajax',
                url: 'Chart/Search'
            }
        }
    }
});