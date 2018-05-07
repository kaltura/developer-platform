<%- codegen.assignAllParameters(parameters, answers) -%>
this.kaltura.request(new <%- service %><%- action %>Action({<%- parameterNames.join(', ') %>}))
    .map(result => {
      console.log(result);
    },
    error => {
      throw error;
    })
