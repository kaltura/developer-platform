<% if (typeof responseListType !== 'undefined') responseType = 'ListResponse<' + responseListType + '>' -%>
<% if (typeof responseType === 'undefined') responseType = 'Void' -%>
<%- codegen.assignAllParameters(parameters, answers) -%>
<%- action %><%- service %>Builder requestBuilder = <%- service %>Service.<%- action.charAt(0).toLowerCase() + action.substring(1) %>(<%- parameterNames.join(', ') %>)
    .setCompletion(new OnCompletion<Response<<%- responseType %>>>() {
        @Override
        public void onComplete(Response<<%- responseType %>> result) {
            System.out.println(result);
        }
    });
