Ext.define('iRISKClient.view.workspaces.WorkSpaceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.workspace',

    counter: 1,



    onLeftAreaBtnClick: function (sender, event) {
        //debugger;
        var tollbar = this.view;
            
        var leftArea = this.lookupReference('leftArea');
        var leftAreatabs = this.lookupReference('leftAreaTabs');

        var collapseState = leftArea.getCollapsed();
        // debugger;
        switch (sender.reference) {
            case 'portfoliosBtn':
                {
                    leftAreatabs.setActiveItem(0);
                    break;
                }
            case 'counterpartsBtn':
                {
                    leftAreatabs.setActiveItem(1);
                    break;
                }

            case 'curvesBtn':
                {
                    leftAreatabs.setActiveItem(2);
                    break;
                }

            case 'reportsBtn':
                {
                    //if (collapseState == false &&  leftAreatabs.activeTab.title == "Reports") {
                    //    leftArea.collapse();

                    //    event.stopPropagation();
                    //    return false;
                    //} 

                    leftAreatabs.setActiveItem(3);

                    break;
                }
        }

        leftAreatabs.header.setHidden(true);

        //  debugger;


        if (collapseState == false)
            event.stopPropagation();

        return false;

    }

});
