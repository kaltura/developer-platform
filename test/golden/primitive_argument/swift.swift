var entryId = "abcde"
var version = -1

let requestBuilder = MediaService.get(entryId: entryId, version: version)
requestBuilder.set(completion: {(result: MediaEntry?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))