//var colorArray = [Red, Green, Blue, Magenta, Purple, Cyan, Lime, DarkBlue];
var colorArray = ["255", "32768", "16711680", "16711935", "8388736", "16776960", "65280", "9109504"];

var functionParameterMap = {};

var clipboard = null;

var lastGeneratedId = 0;

var generateNewId = function (store) {
    var newId = lastGeneratedId - 1;
    while (store.getById(newId))
        newId--;
    lastGeneratedId = newId;
    return newId;
};

var deepCopyWithNewIds = function(sourceNode, targetStore) {
    var data = {
        id: generateNewId(targetStore),
        itemId: sourceNode.data.itemId,
        text: sourceNode.data.text,
        expanded: sourceNode.data.expanded,
        leaf: sourceNode.data.leaf,
        iconCls: sourceNode.data.iconCls,
        isCurve: sourceNode.data.isCurve,
        isFunction: sourceNode.data.isFunction,
        properties: {},
        minChildren: sourceNode.data.minChildren,
        maxChildren: sourceNode.data.maxChildren,
        children: []
    };
    for (var propKey in sourceNode.data.properties) {
        data.properties[propKey] = sourceNode.data.properties[propKey];
    }
    if (sourceNode.data.iconCls == 'derivedIcon') {
        data.minChildren = 0;
        data.maxChildren = 0;
    }
    else {
        for (var i = 0; i < sourceNode.childNodes.length; i++) {
            var childData = deepCopyWithNewIds(sourceNode.childNodes[i], targetStore);
            data.children.push(childData);
        }
    }
    return data;
}

var toISODateString = function (date) {
    var year = "0000" + date.getFullYear().toString();
    var month = "0" + (date.getMonth() + 1).toString();
    var day = "0" + date.getDate().toString();
    return year.substr(year.length - 4) + "-" + month.substr(month.length - 2) + "-" + day.substr(day.length - 2);
}

var updateFormula = function (tree) {
    var url = Settings.HostUrl + 'Formula/UpdateFormula';
    Ext.Ajax.request({
        url: url, method: "POST", jsonData: Ext.JSON.encode(tree),
        success: function(response, opts) {
            console.log('Succeeded to update! Status code: ' + response.status);
        },
        failure: function(response, opts) {
            console.log('Failed to update! Status code: ' + response.status);
        }

    });
};

var validateFunction = function (node) {
    if (node.data.isFunction && (node.data.iconCls == 'functionIcon' || node.data.iconCls == 'errorIcon')) {
        if (node.childNodes.length < node.data.minChildren || node.childNodes.length > node.data.maxChildren) {
            node.set({iconCls: 'errorIcon'});
        }
        else {
            node.set({iconCls: 'functionIcon'});
        }
        node.set({text: generateItemText(node.data)});
    }
};

var generateItemText = function (item, properties) {
    if (!properties)
        properties = item.properties;
    var text = item.text.split('(')[0];

    if (item.iconCls == 'timeseriesIcon' || item.iconCls == 'forecastIcon') {
        if (properties["SelectedCurveSet"])
            text += "(" + properties["SelectedCurveSet"] + ")";

        if (properties["ForecastIssueDate"]) {
            var forecastIssueDate = properties["ForecastIssueDate"];
            if (forecastIssueDate == "9999-12-31")
                forecastIssueDate = "Last date";
            text += "(" + forecastIssueDate + ")";
        }
    }

    if (item.iconCls == 'functionIcon' || item.iconCls == 'errorIcon') {
        var parameters = "";
        for (var propertyName in properties) {
            if (propertyName.substr(0, 9) == "Function/") {
                if (parameters.length > 0)
                    parameters += '; ';
                parameters += properties[propertyName];
            }
        }
        if (parameters.length > 0)
            text += "(" + parameters + ")";

        var children = '';
        for (var i = 0; i < item.children.length; i++) {
            if (children.length > 0)
                children += '; ';
            children += item.children[i].text.split('(')[0];
        }
        if (children.length > 0)
            text += "(" + children + ")";
    }
    
    return text;
};

var updatePropertiesPanel = function (propertiesPanel, selectedItem) {
    var issueDateCombo = propertiesPanel.lookupReference('issueDateCombo');
    if (issueDateCombo)
        issueDateCombo.hide();

    var componentsToRemove = [];
    for (var i = 0; i < propertiesPanel.items.length; i++) {
        var key = propertiesPanel.items.keys[i];
        if (key.split('-')[0] != 'combobox')
            componentsToRemove.push(key);
    }
    for (var i = 0; i < componentsToRemove.length; i++) {
        propertiesPanel.remove(propertiesPanel.getComponent(componentsToRemove[i]));
    }

    if (selectedItem == null)
        return

    if (selectedItem.data.isCurve) {
        var forecastIssueDate = selectedItem.data.properties['ForecastIssueDate'];
        if (issueDateCombo && forecastIssueDate) {
            issueDateCombo.selectedItem = selectedItem;
            if (forecastIssueDate == '9999-12-31')
                forecastIssueDate = "Last date";
            issueDateCombo.store.loadRawData([[forecastIssueDate]]);
            issueDateCombo.setValue(forecastIssueDate);
            Ext.Ajax.request({
                url: Settings.HostUrl + 'Formula/CurveIssueDates?curveId=' + selectedItem.data.itemId,
                success: function(response, opts) {
                    var resp = response.responseText;
                    if (resp) {
                        var returnData = Ext.JSON.decode(resp);
                        issueDateCombo.store.loadRawData([["Last date"]].concat(returnData));
                    }
                    issueDateCombo.setValue(forecastIssueDate);
                }
            });
            issueDateCombo.show();
        }
    }
    else if (selectedItem.data.isFunction) {
        var parameters = functionParameterMap[selectedItem.data.text.split('(')[0]];
        if (parameters) {
            for (var paramIndex = 0; paramIndex < parameters.length; paramIndex++) {
                var key = 'Function/' + parameters[paramIndex].name;
                var propertyValue = selectedItem.data.properties[key];
                var component = {
                    xtype: null,
                    fieldLabel: parameters[paramIndex].name,
                    margin: 10,
                    value: propertyValue,
                    selectedItem: selectedItem,
                    propertyName: key,
                    listeners: {
                        change: 'onFunctionParameterChange'
                    }
                };
                if (propertyValue && parameters[paramIndex].valueType == 'System.DateTime') {
                    component.xtype = 'datefield';
                    component.format = 'Y-m-d';
                    component.listeners['select'] = 'onFunctionParameterSelect';
                }
                else if (propertyValue && parameters[paramIndex].valueType == 'System.Double') {
                    component.xtype = 'numberfield';
                    component.decimalPrecision = 10;
                }
                else if (propertyValue && parameters[paramIndex].valueType == 'System.Int32') {
                    component.xtype = 'numberfield';
                    component.decimalPrecision = 0;
                }
                else if (propertyValue && parameters[paramIndex].valueType == 'System.String') {
                    component.xtype = 'textfield';
                }
                if (component.xtype != null)
                    propertiesPanel.add(component);
            }
        }
    }
};

var canCopyNode = function(source, target) {
    if (source && source.data.iconCls != 'multiviewIcon') {
        if (source.data.iconCls == 'chartsplitIcon')
            return target.data.iconCls == 'multiviewIcon';
        else if (target.data.isFunction && target.data.iconCls != 'multiviewIcon')
            return target.childNodes.length < target.data.maxChildren;
        else if (target.data.isCurve && target.data.iconCls == 'derivedIcon')
            return target.childNodes.length < target.data.maxChildren;
        else
            return target.data.iconCls == 'chartsplitIcon';
    }
    return false;
}

Ext.define('iRISKClient.view.formulas.FormulaEditorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formulaEditorController',
    requires: [
        'Ext.tree.*',
        'Ext.data.*',
        'Ext.layout.container.Border',
        'iRISKClient.util.GlobalSettings'
    ],

    init: function(application) {
        if (!functionParameterMap.IsInitialized) {
            var url = Settings.HostUrl + 'Formula/FunctionListData';
            Ext.Ajax.request({
                url: url,
                success: function(response, opts) {
                    var resp = response.responseText;
                    if (resp) {
                        functionParameterMap = {};
                        var count = 0;
                        var functionGroups = Ext.JSON.decode(resp);
                        for (var groupIndex = 0; groupIndex < functionGroups.length; groupIndex++) {
                            for (var functionIndex = 0; functionIndex < functionGroups[groupIndex].children.length; functionIndex++) {
                                var func = functionGroups[groupIndex].children[functionIndex];
                                functionParameterMap[func.text] = func.parameters;
                                count++;
                            }
                        }
                    }
                    functionParameterMap.IsInitialized = true;
                    console.log('Succeeded to to get function list! Funtion parameter map populated with ' + count + ' functions.');
                },
                failure: function(response, opts) {
                    console.log('Failed to to get function list! Status code: ' + response.status);
                }

            });
        }
    },

    onSave: function (item, e, eOpts) {
        var url = Settings.HostUrl + 'Formula/StoreFormula';
        Ext.Ajax.request({
            url: url, method: "POST", jsonData: Ext.JSON.encode(item.tree.store.root.childNodes[0].data),
            success: function(response, opts) {
                console.log('Succeeded to save! Status code: ' + response.status);
            },
            failure: function(response, opts) {
                console.log('Failed to save! Status code: ' + response.status);
            }

        });
    },

    onAddSplit: function(item, e, eOpts) {
        var multiView = item.tree.store.root.childNodes[0];
        if (multiView.data.iconCls == 'multiviewIcon') {
            var chartSplit = {
                    id: generateNewId(item.tree.store),
                    itemId: 650,
                    text: 'Chart Split',
                    expanded: false,
                    leaf: true,
                    iconCls: 'chartsplitIcon',
                    isCurve: false,
                    isFunction: true,
                    properties: {},
                    minChildren: 1,
                    maxChildren: 999,
                    children: []
                };
            // TODO: Avoid double appending
            multiView.appendChild(chartSplit, false, true);
            multiView.data.children.push(chartSplit);
            multiView.expand();
        }
    },

    onMoveUp: function(item, e, eOpts) {
        var parentNode = item.record.parentNode;
        var beforeNode = item.record.previousSibling;
        var copyNode = item.record.copy(item.record.data.id, true);
        if (parentNode && beforeNode && copyNode) {
            // TODO: Avoid double moving
            var index = parentNode.indexOf(item.record);
            parentNode.removeChild(item.record, true);
            parentNode.insertBefore(copyNode, beforeNode);
            parentNode.data.children.splice(index, 1);
            parentNode.data.children.splice(index - 1, 0, copyNode.data);
            copyNode.getOwnerTree().setSelection(copyNode);
            updateFormula(item.record.getOwnerTree().store.root.childNodes[0].data);
        }
    },

    onMoveDown: function(item, e, eOpts) {
        var parentNode = item.record.parentNode;
        var afterNode = item.record.nextSibling;
        var copyNode = item.record.copy(item.record.data.id, true);
        if (parentNode && afterNode && copyNode) {
            // TODO: Avoid double moving
            var index = parentNode.indexOf(item.record);
            var beforeNode = afterNode.nextSibling;
            parentNode.removeChild(item.record, true);
            parentNode.insertBefore(copyNode, beforeNode);
            parentNode.data.children.splice(index, 1);
            parentNode.data.children.splice(index + 1, 0, copyNode.data);
            copyNode.getOwnerTree().setSelection(copyNode);
            updateFormula(item.record.getOwnerTree().store.root.childNodes[0].data);
       }
    },

    onCopy: function(item, e, eOpts) {
        clipboard = item.record.copy(item.record.data.id, true);
    },

    onCut: function(item, e, eOpts) {
        clipboard = item.record.copy(item.record.data.id, true);
        var parentNode = item.record.parentNode;
        if (parentNode ) {
            var index = parentNode.indexOf(item.record);
            parentNode.removeChild(item.record, true);
            parentNode.data.children.splice(index, 1);
            if (parentNode.data.isFunction)
                validateFunction(parentNode);
            updateFormula(parentNode.getOwnerTree().store.root.childNodes[0].data);
        }
    },

    onPaste: function(item, e, eOpts) {
        if (canCopyNode(clipboard, item.record)) {
            var copyNode = deepCopyWithNewIds(clipboard, item.record.getOwnerTree().store);
            // TODO: Avoid double appending
            item.record.appendChild(copyNode, false, true);
            item.record.data.children.push(copyNode);
            item.record.expand();
            if (item.record.isFunction)
                validateFunction(item.record);
            updateFormula(item.record.getOwnerTree().store.root.childNodes[0].data);
        }
    },

    onDelete: function(item, e, eOpts) {
        var parentNode = item.record.parentNode;
        if (parentNode ) {
            var index = parentNode.indexOf(item.record);
            parentNode.removeChild(item.record, true);
            parentNode.data.children.splice(index, 1);
            if (parentNode.data.isFunction)
                validateFunction(parentNode);
            updateFormula(parentNode.getOwnerTree().store.root.childNodes[0].data);
        }
    },

    onUnderlyingCurve: function (item, e, eOpts) {
        var properties = item.record.get('properties');
        properties["SelectedCurveSet"] = item.text;
        var text = generateItemText(item.record.data, properties);
        item.record.set({text: text, properties: properties});
        item.parentMenu.parentMenu.close();
        updateFormula(item.record.getOwnerTree().store.root.childNodes[0].data);
    },

    onForecastIssueDate: function (combo, record, eOpts) {
        var item = combo.selectedItem;
        var properties = item.get('properties');
        properties["ForecastIssueDate"] = record.data.field1;
        var text = generateItemText(item.data, properties);
        item.set({text: text, properties: properties});
        updateFormula(item.getOwnerTree().store.root.childNodes[0].data);
    },

    onFunctionParameterChange: function (component, newValue, oldValue, eOpts ) {
        var item = component.selectedItem;
        var properties = item.get('properties');
        properties[component.propertyName] = component.xtype == 'datefield' ? toISODateString(newValue) : component.xtype == 'numberfield' ? newValue.toString() : newValue;
        var text = generateItemText(item.data, properties);
        item.set({text: text, properties: properties});
        updateFormula(item.getOwnerTree().store.root.childNodes[0].data);
    },

    onFunctionParameterSelect: function (component, newValue, eOpts ) {
        var item = component.selectedItem;
        var properties = item.get('properties');
        properties[component.propertyName] = component.xtype == 'datefield' ? toISODateString(newValue) : component.xtype == 'numberfield' ? newValue.toString() : newValue;
        var text = generateItemText(item.data, properties);
        item.set({text: text, properties: properties});
        updateFormula(item.getOwnerTree().store.root.childNodes[0].data);
    },

    beforeDropOnFormulaTree: function(node, data, overModel, dropPosition, dropHandlers, eOpts) {
        dropHandlers.cancelDrop();
        var treeStore = overModel.getTreeStore();
        var changed = false;
        for (var i = 0; i < data.records.length; i++) {
            var item = data.records[i].data;
            if (item.hasOwnProperty('curveType')) {
                var type = item.curveType;
                var child = {
                    id: generateNewId(treeStore),
                    itemId: item.id,
                    text: item.name,
                    expanded: false,
                    leaf: true,
                    iconCls: type == 'Forecast' ? 'forecastIcon' : type == 'Derived' ? 'derivedIcon' : 'timeseriesIcon',
                    isCurve: true,
                    isFunction: false,
                    properties: {
                        CurveColor: "255",
                        CurveStyle: "Line",
                        From: "2015-05-25",
                        Issue: "2015-08-25",
                        Resolution: "Daily",
                        SelectedCurveSet: "Close",
                        To: "2016-08-25"
                    },
                    children: []
                }
                if (type == 'Forecast') {
                    child.properties["ForecastIssueDate"] = "9999-12-31";
                }
                child.text = generateItemText(child);
                var node = treeStore.getById(overModel.id);
                // TODO: Avoid double appending
                node.appendChild(child, false, true);
                node.data.children.push(child);
                if (node.data.isFunction)
                    validateFunction(node);
                node.expand();
                changed = true;
            }
            else if (item.hasOwnProperty('description')) {
                var properties = {};
                var parameters = functionParameterMap[item.text];
                if (parameters) {
                    for (var paramIndex = 0; paramIndex < parameters.length; paramIndex++) {
                        var key = 'Function/' + parameters[paramIndex].name;
                        properties[key] = parameters[paramIndex].defaultValue;
                    }
                }
                var child = {
                    id: generateNewId(treeStore),
                    itemId: item.itemId,
                    text: item.text,
                    expanded: false,
                    leaf: true,
                    iconCls: 'functionIcon',
                    isCurve: false,
                    isFunction: true,
                    properties: properties,
                    minChildren: item.minCurves,
                    maxChildren: item.maxCurves,
                    children: []
                }
                child.text = generateItemText(child);
                var node = treeStore.getById(overModel.id);
                // TODO: Avoid double appending
                node.appendChild(child, false, true);
                node.data.children.push(child);
                validateFunction(node.lastChild);
                if (node.data.isFunction)
                    validateFunction(node);
                node.expand();
                changed = true;
            }
            else if (item.hasOwnProperty('isCurve') && item.hasOwnProperty('isFunction') && item.hasOwnProperty('iconCls')) {
                var node = treeStore.getById(overModel.id);
                if (canCopyNode(data.records[i], node)) {
                    var copyNode = deepCopyWithNewIds(data.records[i], treeStore);
                    // TODO: Avoid double appending
                    node.appendChild(copyNode, false, true);
                    node.data.children.push(copyNode);
                    node.expand();
                    if (node.data.isFunction)
                        validateFunction(node);
                    changed = true;
                }
            }
        }
        if (changed) {
            updateFormula(treeStore.root.childNodes[0].data);
        }
    },

    nodeDragOverFormulaTree: function (targetNode, position, dragData, e, eOpts) {
        var allowDrop = false;
        if (dragData.records.length > 0) {
            if (dragData.records[0].data.iconCls == 'chartsplitIcon') {
                allowDrop = targetNode.data.iconCls == 'multiviewIcon';
            }
            else if (dragData.records[0].data.iconCls != 'multiviewIcon' && targetNode.data.iconCls != 'multiviewIcon') {
                allowDrop = targetNode.childNodes.length + dragData.records.length <= targetNode.data.maxChildren;
            }
        }
        return allowDrop;
    },

    formulaTreeItemContextMenu: function(tree, record, item, index, e, eOpts) {
        var selectedCurveSet = record.data.properties["SelectedCurveSet"];
        var propMenuItems = [
            { text: 'MinChildren: ' + record.data.minChildren },
            { text: 'MaxChildren: ' + record.data.maxChildren }
        ];
        for (var propertyName in record.data.properties)
            propMenuItems.push({ text: propertyName + ": " + record.data.properties[propertyName] });

        var isDerivedCurve = tree.store.root.childNodes[0].data.iconCls == 'derivedIcon';
        var formulaId = tree.store.root.childNodes[0].data.id;

        var menuItems = [
            { text: 'Add split', tree: tree, disabled: isDerivedCurve, handler: 'onAddSplit' },
            { xtype: 'menuseparator' },
            { text: 'Move up', record: record, handler: 'onMoveUp', disabled: !record.previousSibling },
            { text: 'Move down', record: record, handler: 'onMoveDown', disabled: !record.nextSibling },
            { xtype: 'menuseparator' },
            { text: 'Copy', record: record, handler: 'onCopy', disabled: record.data.id == formulaId },
            { text: 'Cut', record: record, handler: 'onCut', disabled: record.data.id == formulaId || (record.data.iconCls == 'chartsplitIcon' && record.parentNode.childNodes.length == 1) },
            { text: 'Paste', record: record, handler: 'onPaste', disabled: !canCopyNode(clipboard, record) },
            { text: 'Delete', record: record, handler: 'onDelete', disabled: record.data.id == formulaId || (record.data.iconCls == 'chartsplitIcon' && record.parentNode.childNodes.length == 1) },
            { xtype: 'menuseparator' },
            { text: 'Underlying curve', disabled: !record.data.isCurve || record.data.iconCls == 'derivedIcon', menu: { items: [
                { text: 'Open', checked: selectedCurveSet == 'Open', record: record, handler: 'onUnderlyingCurve' },
                { text: 'Close', checked: selectedCurveSet == 'Close', record: record, handler: 'onUnderlyingCurve' },
                { text: 'High', checked: selectedCurveSet == 'High', record: record, handler: 'onUnderlyingCurve' },
                { text: 'Low', checked: selectedCurveSet == 'Low', record: record, handler: 'onUnderlyingCurve' },
                { text: 'Volume', checked: selectedCurveSet == 'Volume', record: record, handler: 'onUnderlyingCurve' },
                { text: 'Ask', checked: selectedCurveSet == 'Ask', record: record, handler: 'onUnderlyingCurve' },
                { text: 'Bid', checked: selectedCurveSet == 'Bid', record: record, handler: 'onUnderlyingCurve' },
                { text: 'Last', checked: selectedCurveSet == 'Last', record: record, handler: 'onUnderlyingCurve' }
            ]}},
            { xtype: 'menuseparator' },
            { text: 'Save', tree: tree, handler: 'onSave' },
            { xtype: 'menuseparator' },
            { text: 'Properties', menu: { items: propMenuItems } }
        ];
        var contextMenu = new Ext.menu.Menu({
            controller: 'formulaEditorController',
            items: menuItems
        });
        e.stopEvent();
        contextMenu.showAt(e.getX(), e.getY());
    },

    formulaTreeSelectionChange: function(tree, selected, eOpts) {
        var item = null;
        if (selected.length == 1) {
            item = selected[0];
        }
        var propertiesPanel = tree.view.ownerCt.ownerCt.ownerCt.lookupReference('propertiesPanel');
        if (propertiesPanel)
            updatePropertiesPanel(propertiesPanel, item);
    }
});
