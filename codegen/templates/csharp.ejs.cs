<%- codegen.assignAllParameters(parameters, answers) %>

Object result = client.<%- service %>.<%- action %>(<%- parameterNames.join(', ') %>);
Console.WriteLine(result);
