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
var PIEnumerationValue = (function () {
    function PIEnumerationValue(webId, id, name, description, value, path, parent, links, serializeWebId, serializeId, serializeDescription, serializePath, serializeLinks, webException) {
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
        if (value != null) {
            this.Value = value;
        }
        if (path != null) {
            this.Path = path;
        }
        if (parent != null) {
            this.Parent = parent;
        }
        if (links != null) {
            this.Links = links;
        }
        if (serializeWebId != null) {
            this.SerializeWebId = serializeWebId;
        }
        if (serializeId != null) {
            this.SerializeId = serializeId;
        }
        if (serializeDescription != null) {
            this.SerializeDescription = serializeDescription;
        }
        if (serializePath != null) {
            this.SerializePath = serializePath;
        }
        if (serializeLinks != null) {
            this.SerializeLinks = serializeLinks;
        }
        if (webException != null) {
            this.WebException = webException;
        }
    }
    return PIEnumerationValue;
}());
exports.PIEnumerationValue = PIEnumerationValue;
