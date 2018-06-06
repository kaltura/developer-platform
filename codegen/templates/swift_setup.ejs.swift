import KalturaClient

let executor: RequestExecutor = USRExecutor.shared
let config: ConnectionConfiguration = ConnectionConfiguration()
let client = Client(config)
<% if (!noSession) { -%>
let sessionRequestBuilder = SessionService.start(
    secret: <%- codegen.constant(answers.secret) %>,
    userId: <%- codegen.constant(answers.userId) %>,
    type: <%- answers.sessionType === 0 ? 'SessionType.USER' : 'SessionType.ADMIN' %>,
    partnerId: <%- answers.partnerId || 'YOUR_PARTNER_ID' %>)
sessionRequestBuilder.set(completion: {(ks: String?, error: ApiException?) in
    client.ks = ks
<%- codegen.indent(code, 2) %>
})
executor.send(request: sessionRequestBuilder.build(client))
<% } else { -%>
<%- code %>
<% } -%>
