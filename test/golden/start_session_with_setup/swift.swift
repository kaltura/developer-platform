import KalturaClient

let executor: RequestExecutor = USRExecutor.shared
let config: ConnectionConfiguration = ConnectionConfiguration()
let client = Client(config)
let sessionRequestBuilder = SessionService.start(
    secret: "12341234123412341234",
    userId: "user@example.com",
    type: SessionType.USER,
    partnerId: 123456)
sessionRequestBuilder.set(completion: {(ks: String?, error: ApiException?) in
    client.ks = ks
  var secret = "********************"
  var userId = "user@example.com"
  var type = SessionType.USER
  var partnerId = 123456
  var expiry = 86400
  var privileges = ""

  let requestBuilder = SessionService.start(secret: secret, userId: userId, type: type, partnerId: partnerId, expiry: expiry, privileges: privileges)
  requestBuilder.set(completion: {(result: String?, error: ApiException?) in
  	print(result!)
  	done()
  })
  executor.send(request: requestBuilder.build(client))
})
executor.send(request: sessionRequestBuilder.build(client))