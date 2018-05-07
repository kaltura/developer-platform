import {Component} from '@angular/core';
import 'rxjs/add/observable/throw';

import {KalturaClient} from "kaltura-ngx-client";
// Be sure to add KalturaClient to your app's providers array,
// and KalturaClientModule to your app's imports.
import {SessionStartAction} from "kaltura-ngx-client/api/types/SessionStartAction";
<% if (service !== 'Session' && action !== 'Start') { -%>
import {<%- service %><%- action %>Action} from "kaltura-ngx-client/api/types/<%- service %><%- action %>Action";
<% } -%>
<% if (enums.indexOf('SessionType') === -1) { -%>
import {KalturaSessionType} from "kaltura-ngx-client/api/types/KalturaSessionType";
<% } -%>
<% for (var i = 0; i < enums.length; ++i) { -%>
import {<%- enums[i] %>} from "kaltura-ngx-client/api/types/<%- enums[i] %>";
<% } -%>
<% for (var i = 0; i < objects.length; ++i) { -%>
import {<%- objects[i] %>} from "kaltura-ngx-client/api/types/<%- objects[i] %>";
<% } -%>

declare let window:any;

@Component({
    selector: 'widget',
    template: `<h1>Hello world</h1>`,
})
export class WidgetComponent {
  constructor(private kaltura:KalturaClient) {
    window.widget = this;
    this.kaltura.request(new SessionStartAction({
        secret: <%- codegen.constant(answers.secret) %>,
        userId: <%- codegen.constant(answers.userId) %>,
        type: <%- answers.sessionType === 0 ? 'KalturaSessionType.user' : 'KalturaSessionType.admin' %>,
        partnerId: <%- answers.partnerId || 'YOUR_PARTNER_ID' %>,
    }))
	.map(ks => {
		  this.kaltura.setDefaultRequestOptions({ks});
          this.runRequest();
		},
		error => {
		  console.error(`failed to create session with the following error "SessionStartAction"`);
		  throw error;
		})
  }

  runRequest() {
<%- codegen.indent(code, 4) %>
  }
}
