var entryId = ""
var captionAsset = CaptionAsset()
captionAsset.tags = "stuff"
captionAsset.language = "Arabic"

var requestBuilder = CaptionAssetService.add(entryId: entryId, captionAsset: captionAsset)
requestBuilder.set(completion: {(result: CaptionAsset?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))