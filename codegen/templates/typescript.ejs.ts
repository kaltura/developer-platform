<%- codegen.assignAllParameters(parameters, answers) -%>
client.request(new <%- service %><%- action %>Action({<%- parameterNames.join(', ') %>}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })
