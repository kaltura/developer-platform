import KalturaClient

let executor: RequestExecutor = USRExecutor.shared
let config: ConnectionConfiguration = ConnectionConfiguration()
let client = Client(config)
let sessionRequestBuilder = SessionService.start(
    secret: "YOUR_KALTURA_SECRET",
    userId: "YOUR_USER_ID",
    type: SessionType.ADMIN,
    partnerId: 12345)
sessionRequestBuilder.set(completion: {(ks: String?, error: ApiException?) in
    client.ks = ks
  var id = ""
  var tokenHash = ""
  var userId = "YOUR_USER_ID"
  var type = SessionType.USER
  var expiry = 0
  var sessionPrivileges = ""

  let requestBuilder = AppTokenService.startSession(id: id, tokenHash: tokenHash, userId: userId, type: type, expiry: expiry, sessionPrivileges: sessionPrivileges)
  requestBuilder.set(completion: {(result: SessionInfo?, error: ApiException?) in
  	print(result!)
  	done()
  })
  executor.send(request: requestBuilder.build(client))
})
executor.send(request: sessionRequestBuilder.build(client))