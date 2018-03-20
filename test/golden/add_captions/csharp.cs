string entryId = "";
CaptionAsset captionAsset = new CaptionAsset();
captionAsset.Tags = "stuff";
captionAsset.Language = "Arabic";

OnCompletedHandler<CaptionAsset> handler = new OnCompletedHandler<CaptionAsset>(
      (CaptionAsset result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
CaptionAssetService.Add(entryId, captionAsset)
   .SetCompletion(handler)
   .Execute(client);