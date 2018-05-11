var secret = "*******************"
var userId = "YOUR_USER_ID"
var type = SessionType.USER
var partnerId = 0
var expiry = 86400
var privileges = ""

var requestBuilder = SessionService.start(secret: secret, userId: userId, type: type, partnerId: partnerId, expiry: expiry, privileges: privileges)
requestBuilder.set(completion: {(result: String?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))