var loginId = ""
var password = "*************"
var partnerId = 0
var expiry = 86400
var privileges = "*"
var otp = ""

var requestBuilder = UserService.loginByLoginId(loginId: loginId, password: password, partnerId: partnerId, expiry: expiry, privileges: privileges, otp: otp)
requestBuilder.set(completion: {(result: String?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))