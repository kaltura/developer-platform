
entryId = ""
conversionProfileId = 0
dynamicConversionAttributes = []
dynamicConversionAttributes[0] = KalturaConversionAttribute()
dynamicConversionAttributes[0].flavorParamsId = 3

result = client.media.convert(entryId, conversionProfileId, dynamicConversionAttributes);
print(result);
