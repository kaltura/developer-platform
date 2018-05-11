import KalturaClient

let client = Client()
var sessionRequestBuilder = SessionService.start(
    secret: "YOUR_KALTURA_SECRET",
    userId: "YOUR_USER_ID",
    type: SessionType.ADMIN,
    partnerId: YOUR_PARTNER_ID)
sessionRequestBuilder.set(completion: {(ks: String?, error: ApiException?) in
  self.client!.ks = ks
  var accessControlProfile = AccessControlProfile()
  accessControlProfile.name = "foo"
  accessControlProfile.rules = []
  accessControlProfile.rules[0] = Rule()
  accessControlProfile.rules[0].code = "thiscode"
  accessControlProfile.rules[0].contexts = []
  accessControlProfile.rules[0].contexts[0] = ContextTypeHolder()
  accessControlProfile.rules[0].contexts[0].type = ContextType.PLAY
  accessControlProfile.rules[0].contexts[1] = ContextTypeHolder()
  accessControlProfile.rules[0].conditions = []
  accessControlProfile.rules[0].conditions[0] = DeliveryProfileCondition()
  accessControlProfile.rules[0].conditions[0].description = "cond 1"
  accessControlProfile.rules[0].conditions[1] = DeliveryProfileCondition()
  accessControlProfile.rules[0].conditions[1].description = "cond 2"
  accessControlProfile.rules[1] = Rule()
  accessControlProfile.rules[1].code = "second code"

  var requestBuilder = AccessControlProfileService.add(accessControlProfile: accessControlProfile)
  requestBuilder.set(completion: {(result: AccessControlProfile?, error: ApiException?) in
    print(result)
  })
  executor.send(request: requestBuilder.build(client!))
})
executor.send(request: sessionRequestBuilder.build(client!))