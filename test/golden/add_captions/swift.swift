var entryId = ""
var captionAsset = CaptionAsset()
captionAsset.tags = "stuff"
captionAsset.language = "Arabic"

let requestBuilder = CaptionAssetService.add(entryId: entryId, captionAsset: captionAsset)
requestBuilder.set(completion: {(result: CaptionAsset?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))