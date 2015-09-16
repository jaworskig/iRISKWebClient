Ext.define('iRISKClient.view.lists.ContextMenu', {
    extend: 'Ext.menu.Menu',
    xtype: 'listsContextMenu',
    items: [
        {
            text: 'New List',
            iconCls: 'tasks-new-list',
            id: 'new-list-item'
        },
        {
            text: 'New Folder',
            iconCls: 'tasks-new-folder',
            id: 'new-folder-item'
        }
    ],

    /**
     * Associates this menu with a specific list.
     * @param {SimpleTasks.model.List} list
     */
    setList: function (list) {
        this.list = list;
    },

    /**
     * Gets the list associated with this menu
     * @return {Task.model.List}
     */
    getList: function () {
        return this.list;
    }

});