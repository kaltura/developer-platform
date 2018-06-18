<%- codegen.assignAllParameters(parameters, answers) -%>
<% var args = parameterNames.join(', '); -%>
kaltura.services.<%- service %>.<%- action %>(<%- args %>)
.execute(client)
.then(result => {
    console.log(result);
});
