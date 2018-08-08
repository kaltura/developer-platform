let entryId = "";
let conversionProfileId = 0;
let dynamicConversionAttributes = [];
dynamicConversionAttributes[0] = new KalturaConversionAttribute();
dynamicConversionAttributes[0].flavorParamsId = 3;

client.request(new MediaConvertAction({entryId, conversionProfileId, dynamicConversionAttributes}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })