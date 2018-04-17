const kaltura = require('kaltura-client');
const config = new kaltura.Configuration();
config.serviceUrl = 'https://www.kaltura.com';
const client = new kaltura.Client(config);
kaltura.services.session.start(
    <%- codegen.constant(answers.secret) %>,
    <%- codegen.constant(answers.userId) %>,
    <%- answers.sessionType === 0 ? 'kaltura.enums.SessionType.USER' : 'kaltura.enums.SessionType.ADMIN' %>,
    <%- answers.partnerId || 'YOUR_PARTNER_ID' %>)
.completion((success, ks) => {
    if (!success) throw new Error(ks.message);
    client.setKs(ks);
<% if (serviceID !== 'session' && actionID !== 'start') { -%>
<%- codegen.indent(code, 4) %>
<% } -%>
})
.execute(client);
