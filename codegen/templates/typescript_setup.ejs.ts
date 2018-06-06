export {}
import {KalturaClient} from 'kaltura-typescript-client';
import {SessionStartAction} from "kaltura-typescript-client/api/types/SessionStartAction";
<% if (service !== 'Session' && action !== 'Start') { -%>
import {<%- service %><%- action %>Action} from "kaltura-typescript-client/api/types/<%- service %><%- action %>Action";
<% } -%>
<% if (enums.indexOf('KalturaSessionType') === -1) { -%>
import {KalturaSessionType} from "kaltura-typescript-client/api/types/KalturaSessionType";
<% } -%>
<% for (var i = 0; i < enums.length; ++i) { -%>
import {<%- enums[i] %>} from "kaltura-typescript-client/api/types/<%- enums[i] %>";
<% } -%>
<% for (var i = 0; i < objects.length; ++i) { -%>
import {<%- objects[i] %>} from "kaltura-typescript-client/api/types/<%- objects[i] %>";
<% } -%>

let config = {
  clientTag: 'sample-code',
  endpointUrl: 'https://www.kaltura.com',
}
let client = new KalturaClient(config);
<% if (noSession) { -%>
<%- code %>
<% } else { -%>
client.request(new SessionStartAction({
    secret: <%- codegen.constant(answers.secret) %>,
    userId: <%- codegen.constant(answers.userId) %>,
    type: <%- answers.sessionType === 0 ? 'KalturaSessionType.user' : 'KalturaSessionType.admin' %>,
    partnerId: <%- answers.partnerId || 'YOUR_PARTNER_ID' %>,
})).then(ks => {
  client.setDefaultRequestOptions({ks});
<%- codegen.indent(code, 2) %>
}, err => {
  console.error(err);
})
<% } -%>
