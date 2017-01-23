<%- codegen.assignAllParameters(parameters, answers) %>

Object result = client.<%- service %>.<%- action %>(<%- parameterNames.join(', ') %>);
System.out.println(result);

