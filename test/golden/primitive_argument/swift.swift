var entryId = "abcde"
var version = -1

var requestBuilder = MediaService.get(entryId: entryId, version: version)
requestBuilder.set(completion: {(result: MediaEntry?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))