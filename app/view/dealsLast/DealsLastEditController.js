Ext.define('iRISKClient.view.dealsLast.DealsLastEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dealsLastEditController',

    afterrender: function (layout, eOpts) {

        var me = this;

        var menu = me.getView().headerCt.getMenu();

        menu.on('beforeshow', function (itemMenu) {
            var currentDataIndex = menu.activeHeader.dataIndex;
            menu.removeAll();

            //debugger;
            var mainGrid = menu.ownerCmp.ownerCt.ownerCt;

            mainGrid.columnsSelectData[currentDataIndex].forEach(function (selectValue) {
                menu.add({
                    text: selectValue.Value,
                    handler: function (ehItem) {

                        mainGrid.getColumns().forEach(function (item) {
                            if (item.dataIndex == currentDataIndex) {
                                item.setText(ehItem.text);
                                item.setStyle("color", "rgb(13, 122, 255)");

                                mainGrid.changedValue[currentDataIndex] = selectValue.Key
                            }
                        });
                    }
                });
            });
        });
    },


    cancelClick: function (sender, event) {

        var listGrid = this.view.ownerCt.items.items[1];

        this.view.setVisible(false);
        listGrid.setVisible(true);

        listGrid.selModel.deselectAll()
    },

    saveClick: function (sender, event) {
        this.save(sender, false);
    },

    saveUpdateClick: function (sender, event) {
        this.save(sender, true);
    },


    save: function (sender, update) {

        var me = this;
        var changedValue = sender.ownerCt.ownerCt.changedValue;

        var dealsEdit = new Object();
        dealsEdit.Trade = changedValue.TraderName;
        dealsEdit.Portfolio = changedValue.PorfolioName;
        dealsEdit.Counterpart = changedValue.CounterpartName;
        dealsEdit.Broker = changedValue.BrokerName;
        dealsEdit.Strategy = changedValue.Strategy;
        dealsEdit.Status = changedValue.Status;
        dealsEdit.Export = changedValue.Export;

        var DealsId = [];

        sender.ownerCt.ownerCt.store.data.items.forEach(function (item) {
            DealsId.push(item.data.DealId);
        });

        dealsEdit.DealsId = DealsId.toString();

        dealsEdit.SaveUpdate = true;

        $.ajax({
            type: "POST",
            dataType: "json",
            url: Settings.HostUrl + 'Deals/DealEdit',
            data: dealsEdit,
            complete: function (msg) {
                if (msg.responseText != "") {
                    alert(msg.responseText);
                }

                me.cancelClick(sender);
            }
        });

    }

});
