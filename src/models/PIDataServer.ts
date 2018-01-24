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

import * as Models from './models';

export class PIDataServer {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Path?: string;
	public IsConnected?: boolean;
	public ServerVersion?: string;
	public Links?: Models.PIDataServerLinks;
	public WebException?: Models.PIWebException;
	constructor(webId?: string, id?: string, name?: string, path?: string, isConnected?: boolean, serverVersion?: string, links?: Models.PIDataServerLinks, webException?: Models.PIWebException)
	{
		if (webId!=null)
		{
			this.WebId=webId
		}
		if (id!=null)
		{
			this.Id=id
		}
		if (name!=null)
		{
			this.Name=name
		}
		if (path!=null)
		{
			this.Path=path
		}
		if (isConnected!=null)
		{
			this.IsConnected=isConnected
		}
		if (serverVersion!=null)
		{
			this.ServerVersion=serverVersion
		}
		if (links!=null)
		{
			this.Links=links
		}
		if (webException!=null)
		{
			this.WebException=webException
		}
	}
}
