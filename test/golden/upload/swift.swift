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