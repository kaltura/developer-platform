var entryId = "";
var conversionProfileId = 0;
var dynamicConversionAttributes = [];
dynamicConversionAttributes[0] = {objectType: "KalturaConversionAttribute"};
dynamicConversionAttributes[0].flavorParamsId = 3;

KalturaMediaService.convert(entryId, conversionProfileId, dynamicConversionAttributes)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });