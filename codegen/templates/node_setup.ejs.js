var Kaltura = require('kaltura');
var config = new Kaltura.kc.KalturaConfiguration(<%- answers.partnerId %>);
config.serviceUrl = 'https://www.kaltura.com';
var client = new Kaltura.kc.KalturaClient(config);
client.session.start(function(ks) {
  if (ks.code && ks.message) {
    console.log('Error starting session', ks);
  } else {
    client.setKs(ks);
<%- codegen.indent(code, 4) %>
  }
}, <%- codegen.constant(answers.secret) %>,
<%- codegen.constant(answers.userId) %>,
<%- answers.sessionType === 0 ? 'Kaltura.kc.enums.KalturaSessionType.USER' : 'Kaltura.kc.enums.KalturaSessionType.ADMIN' %>,
<%- answers.partnerId || 'YOUR_PARTNER_ID' %>)
