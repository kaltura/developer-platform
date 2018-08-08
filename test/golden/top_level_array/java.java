String entryId = "";
int conversionProfileId = 0;
ArrayList<ConversionAttribute> dynamicConversionAttributes = new ArrayList<ConversionAttribute>(0);
dynamicConversionAttributes.set(0, new ConversionAttribute());
dynamicConversionAttributes.get(0).setFlavorParamsId(3);

ConvertMediaBuilder requestBuilder = MediaService.convert(entryId, conversionProfileId, dynamicConversionAttributes)
    .setCompletion(new OnCompletion<Response<int>>() {
        @Override
        public void onComplete(Response<int> result) {
            System.out.println(result);
        }
    });