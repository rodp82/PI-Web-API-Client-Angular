"use strict";
/**
* Copyright 2017 OSIsoft, LLC
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
var PIUserInfo = (function () {
    function PIUserInfo(identityType, name, isAuthenticated, sID, impersonationLevel) {
        if (identityType != null) {
            this.IdentityType = identityType;
        }
        if (name != null) {
            this.Name = name;
        }
        if (isAuthenticated != null) {
            this.IsAuthenticated = isAuthenticated;
        }
        if (sID != null) {
            this.SID = sID;
        }
        if (impersonationLevel != null) {
            this.ImpersonationLevel = impersonationLevel;
        }
    }
    return PIUserInfo;
}());
exports.PIUserInfo = PIUserInfo;