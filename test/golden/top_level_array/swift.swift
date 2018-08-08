var entryId = ""
var conversionProfileId = 0
var dynamicConversionAttributes = []
dynamicConversionAttributes[0] = ConversionAttribute()
dynamicConversionAttributes[0].flavorParamsId = 3

let requestBuilder = MediaService.convert(entryId: entryId, conversionProfileId: conversionProfileId, dynamicConversionAttributes: dynamicConversionAttributes)
requestBuilder.set(completion: {(result: Int?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))