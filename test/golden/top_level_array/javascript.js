var entryId = "";
var conversionProfileId = 0;
var dynamicConversionAttributes = [];
dynamicConversionAttributes[0] = new KalturaConversionAttribute();
dynamicConversionAttributes[0].flavorParamsId = 3;

client.media.convert(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
entryId,
conversionProfileId,
dynamicConversionAttributes);