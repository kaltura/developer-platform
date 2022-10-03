<% if (typeof showSetup !== undefined && showSetup) { -%>
require 'kaltura'
include Kaltura

config = KalturaConfiguration.new()
config.service_url = 'https://www.kaltura.com'
client = KalturaClient.new(config);
<% if (!noSession) { -%>

client.ks = client.generate_session_v2(<%- codegen.constant(answers.secret) %>, <%- codegen.constant(answers.userId) %>,<%- answers.sessionType === 0 ? 'Kaltura::KalturaSessionType::USER' : 'Kaltura::KalturaSessionType::ADMIN' %>, <%- codegen.constant(answers.partnerId) || 'YOUR_PARTNER_ID' %>)
<% } -%>
<% } -%>

<%- codegen.assignAllParameters(parameters, answers) -%>
results = client.<%- service %>.<%- action %>(<%- parameterNames.join(', ') %>)
puts results.inspect
<% -%>
