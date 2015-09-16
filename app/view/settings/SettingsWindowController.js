Ext.define('iRISKClient.view.settings.SettingsWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings',


    onItemCheck: function (item) {
        
    },

    onSaveFormClick: function () {

        // This would be the ideal location to verify the user's credentials via 
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true

        //var form = this.lookupReference('form');

        //var name = form.getForm().findField("username").getValue();

        //localStorage.setItem("TutorialLoggedIn", true);
        //localStorage.setItem("UserName", name);

        //// Remove Login Window
        //this.getView().destroy();

        //// Add the main view to the viewport
        //Ext.widget('app-main');
        //debugger;
        //var form = this.lookupReference('formSettings');

        //var form2 = this.getView().getForm();

        //var styleSettings = form.getForm().findField("fav-style").getValue();

        localStorage.setItem("SetStyle", "Dark");
        this.getView().close();
    }

 
});