<%- codegen.assignAllParameters(parameters, answers) %>
<% args = parameterNames.join(', ') -%>

<%- service %>.<%- action %>(<%- args %>)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });
