<%- codegen.assignAllParameters(parameters, answers) -%>
<% var args = parameterNames.map(n => n + ': ' + n).join(', '); -%>
<% var resultType = '' -%>
<% if (typeof responseType !== 'undefined') resultType = responseType -%>
<% if (typeof responseListType !== 'undefined') resultType = service + action.charAt(0).toUpperCase() + action.substring(1) + 'Response' -%>
var requestBuilder = <%- service %>Service.<%- action %>(<%- args %>)
requestBuilder.set(completion: {(result: <%- resultType %>?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))

