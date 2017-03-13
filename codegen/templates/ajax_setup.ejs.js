<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="/js/kaltura/KalturaFullClient.min.js"></script>

<script>
  var config = new KalturaConfiguration(<%- answers.partnerId %>);
  config.serviceUrl = 'https://www.kaltura.com';
  var client = new KalturaClient(config);
  // Note: this is meant only as a sample.
  // You should NEVER generate sessions on the client,
  // as this exposes your Admin Secret to users.
  // Instead, generate a session on the server and pass the
  // KS to the client.
  KalturaSessionService.start(
        <%- codegen.constant(answers.secret) %>,
        <%- codegen.constant(answers.userId) %>,
        <%- answers.sessionType === undefined ? 2 : answers.sessionType %>,
        <%- answers.partnerId || 'YOUR_PARTNER_ID' %>)
  .execute(client, function(success, ks) {
    if (!success || (ks.code && ks.message)) {
      console.log('Error starting session', success, ks);
    } else {
      client.setKs(ks);
<% if (serviceID !== 'session' && actionID !== 'start') { -%>
<%- codegen.indent(code, 6) %>
<% } -%>
    }
  });
</script>
