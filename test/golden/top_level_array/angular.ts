let entryId = "";
let conversionProfileId = 0;
let dynamicConversionAttributes = [];
dynamicConversionAttributes[0] = new KalturaConversionAttribute();
dynamicConversionAttributes[0].flavorParamsId = 3;

this.kaltura.request(new MediaConvertAction({entryId, conversionProfileId, dynamicConversionAttributes}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })