<% if (typeof showSetup !== undefined && showSetup) { -%>
require 'kaltura'
include Kaltura

config = KalturaConfiguration.new()
config.service_url = 'https://www.kaltura.com'
client = KalturaClient.new(config);
client.ks = client.session_service.start(
    <%- codegen.constant(answers.secret) %>,
    <%- codegen.constant(answers.userId) %>,
    <%- answers.sessionType === 0 ? 'Kaltura::KalturaSessionType::USER' : 'Kaltura::KalturaSessionType::ADMIN' %>,
    <%- codegen.constant(answers.partnerId) || 'YOUR_PARTNER_ID' %>)

<% } -%>

<%- codegen.assignAllParameters(parameters, answers) %>

results = client.<%- service %>.<%- action %>(<%- parameterNames.join(', ') %>)
puts results.inspect

