"use strict";
/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
exports.__esModule = true;
var PITimeRule = (function () {
    function PITimeRule(webId, id, name, description, path, configString, configStringStored, displayString, editorType, isConfigured, isInitializing, mergeDuplicatedItems, plugInName, links, webException) {
        if (webId != null) {
            this.WebId = webId;
        }
        if (id != null) {
            this.Id = id;
        }
        if (name != null) {
            this.Name = name;
        }
        if (description != null) {
            this.Description = description;
        }
        if (path != null) {
            this.Path = path;
        }
        if (configString != null) {
            this.ConfigString = configString;
        }
        if (configStringStored != null) {
            this.ConfigStringStored = configStringStored;
        }
        if (displayString != null) {
            this.DisplayString = displayString;
        }
        if (editorType != null) {
            this.EditorType = editorType;
        }
        if (isConfigured != null) {
            this.IsConfigured = isConfigured;
        }
        if (isInitializing != null) {
            this.IsInitializing = isInitializing;
        }
        if (mergeDuplicatedItems != null) {
            this.MergeDuplicatedItems = mergeDuplicatedItems;
        }
        if (plugInName != null) {
            this.PlugInName = plugInName;
        }
        if (links != null) {
            this.Links = links;
        }
        if (webException != null) {
            this.WebException = webException;
        }
    }
    return PITimeRule;
}());
exports.PITimeRule = PITimeRule;
