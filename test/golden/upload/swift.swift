var uploadTokenId = ""
var fileData = null
var resume = false
var finalChunk = true
var resumeAt = -1

var requestBuilder = UploadTokenService.upload(uploadTokenId: uploadTokenId, fileData: fileData, resume: resume, finalChunk: finalChunk, resumeAt: resumeAt)
requestBuilder.set(completion: {(result: UploadToken?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))