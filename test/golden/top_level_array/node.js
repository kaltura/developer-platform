let entryId = "";
let conversionProfileId = 0;
let dynamicConversionAttributes = [];
dynamicConversionAttributes[0] = new kaltura.objects.ConversionAttribute();
dynamicConversionAttributes[0].flavorParamsId = 3;

kaltura.services.media.convert(entryId, conversionProfileId, dynamicConversionAttributes)
.execute(client)
.then(result => {
    console.log(result);
});