<%- codegen.assignAllParameters(parameters, answers) %>
<% args = parameterNames.join(',\n') -%>

client.<%- service %>.<%- action %>(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
}<%- args ? ',\n' + args : '' %>);
