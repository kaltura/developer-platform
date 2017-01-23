<%- codegen.assignAllParameters(parameters, answers) %>
<% var args = parameterNames.join(',\n'); %>
client.<%- service %>.<%- action %>(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
}<%- args ? ',\n' + args : '' %>);
