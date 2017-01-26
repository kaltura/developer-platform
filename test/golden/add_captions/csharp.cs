string entryId = "";
CaptionAsset captionAsset = new CaptionAsset();

OnCompletedHandler<CaptionAsset> handler = new OnCompletedHandler<CaptionAsset>(
      (CaptionAsset result, Exception e) => Console.WriteLine(result));
CaptionAssetService.Add(entryId, captionAsset)
   .SetCompletion(handler)
   .Execute(client);