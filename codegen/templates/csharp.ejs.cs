<%- codegen.assignAllParameters(parameters, answers) %>

<% var handlerType = null;
   if (typeof responseListType !== 'undefined') {
     handlerType = 'ListResponse<' + responseListType + '>';
   } else if (typeof responseType !== 'undefined') {
     handlerType = responseType
   } -%>
<% if (handlerType) { -%>
OnCompletedHandler<<%- handlerType %>> handler = new OnCompletedHandler<<%- handlerType %>>(
      (<%- handlerType %> result, Exception e) => Console.WriteLine(result));
<% } -%>
<%- service %>.<%- action %>(<%- parameterNames.join(', ') %>)
<% if (handlerType) { -%>
   .SetCompletion(handler)
<% } -%>
   .Execute(client);
