import KalturaClient

let executor: RequestExecutor = USRExecutor.shared
let config: ConnectionConfiguration = ConnectionConfiguration()
let client = Client(config)
let sessionRequestBuilder = SessionService.start(
    secret: "YOUR_KALTURA_SECRET",
    userId: "YOUR_USER_ID",
    type: SessionType.ADMIN,
    partnerId: YOUR_PARTNER_ID)
sessionRequestBuilder.set(completion: {(ks: String?, error: ApiException?) in
    client.ks = ks
  var uploadTokenId = "abcde"
  var fileData = "foobar"
  var resume = false
  var finalChunk = true
  var resumeAt = -1

  let requestBuilder = UploadTokenService.upload(uploadTokenId: uploadTokenId, fileData: fileData, resume: resume, finalChunk: finalChunk, resumeAt: resumeAt)
  requestBuilder.set(completion: {(result: UploadToken?, error: ApiException?) in
  	print(result!)
  	done()
  })
  executor.send(request: requestBuilder.build(client))
})
executor.send(request: sessionRequestBuilder.build(client))