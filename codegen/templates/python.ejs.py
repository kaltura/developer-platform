<% if (showSetup) { -%>
from KalturaClient import *
from KalturaClient.Plugins.Core import *
<% plugins.forEach(function(p) { -%>
from KalturaClient.Plugins.<%- p.charAt(0).toUpperCase() + p.substring(1) %> import *
<% }) -%>

config = KalturaConfiguration(<%- answers.partnerId %>)
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)
ks = client.session.start(
      <%- codegen.constant(answers.secret) %>,
      <%- codegen.constant(answers.userId) %>,
      <%- answers.sessionType === 0 ? 'KalturaSessionType.USER' : 'KalturaSessionType.ADMIN' %>,
      <%- codegen.constant(answers.partnerId) || 'YOUR_PARTNER_ID' %>)
client.setKs(ks)
<% } -%>

<%- codegen.assignAllParameters(parameters, answers) %>

result = client.<%- service %>.<%- action %>(<%- parameterNames.join(', ') %>);
print(result);
