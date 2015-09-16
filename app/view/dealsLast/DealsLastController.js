Ext.define('iRISKClient.view.dealsLast.DealsLastController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dealsLastController',

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
    },

    editClick: function (sender, event) {

        var editStore = Ext.data.StoreManager.lookup('dealsLastEditStore');
        var editGrid = this.view.ownerCt.items.items[0];

        editStore.removeAll();

        this.view.getSelection().forEach(function (item) {
            editStore.add(item.data);
        });
 
        var columns = editStore.getDealColumns();

        editGrid.reconfigure(editStore, columns);

        this.view.setVisible(false);
        editGrid.setVisible(true);
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
            url: iRISKClient.Application.GlobalSettings.HostUrl + 'Deals/DealEdit',
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
