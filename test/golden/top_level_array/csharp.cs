string entryId = "";
int conversionProfileId = 0;
array dynamicConversionAttributes = new List<ConversionAttribute>();
dynamicConversionAttributes.Add(new ConversionAttribute());
dynamicConversionAttributes[0].FlavorParamsId = 3;

OnCompletedHandler<int> handler = new OnCompletedHandler<int>(
      (int result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
MediaService.Convert(entryId, conversionProfileId, dynamicConversionAttributes)
   .SetCompletion(handler)
   .Execute(client);