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
var PIChannelInstance = (function () {
    function PIChannelInstance(id, startTime, lastMessageSentTime, sentMessageCount, webException) {
        if (id != null) {
            this.Id = id;
        }
        if (startTime != null) {
            this.StartTime = startTime;
        }
        if (lastMessageSentTime != null) {
            this.LastMessageSentTime = lastMessageSentTime;
        }
        if (sentMessageCount != null) {
            this.SentMessageCount = sentMessageCount;
        }
        if (webException != null) {
            this.WebException = webException;
        }
    }
    return PIChannelInstance;
}());
exports.PIChannelInstance = PIChannelInstance;
