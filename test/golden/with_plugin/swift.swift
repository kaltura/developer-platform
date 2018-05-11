import KalturaClient

let client = Client()
var sessionRequestBuilder = SessionService.start(
    secret: "YOUR_KALTURA_SECRET",
    userId: "YOUR_USER_ID",
    type: SessionType.ADMIN,
    partnerId: YOUR_PARTNER_ID)
sessionRequestBuilder.set(completion: {(ks: String?, error: ApiException?) in
  self.client!.ks = ks
  var filter = MetadataProfileFilter()
  var pager = FilterPager()

  var requestBuilder = MetadataProfileService.list(filter: filter, pager: pager)
  requestBuilder.set(completion: {(result: MetadataProfileListResponse?, error: ApiException?) in
    print(result)
  })
  executor.send(request: requestBuilder.build(client!))
})
executor.send(request: sessionRequestBuilder.build(client!))