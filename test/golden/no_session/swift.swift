import KalturaClient

let client = Client()
var sessionRequestBuilder = SessionService.start(
    secret: "YOUR_KALTURA_SECRET",
    userId: "YOUR_USER_ID",
    type: SessionType.ADMIN,
    partnerId: YOUR_PARTNER_ID)
sessionRequestBuilder.set(completion: {(ks: String?, error: ApiException?) in
  self.client!.ks = ks
  var loginId = "foobar"
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
})
executor.send(request: sessionRequestBuilder.build(client!))