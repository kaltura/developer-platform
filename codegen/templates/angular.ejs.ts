<%- codegen.assignAllParameters(parameters, answers) -%>
this.kaltura.request(new <%- service %><%- action %>Action({<%- parameterNames.join(', ') %>}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })
