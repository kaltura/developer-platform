string entryId = "xyz_123";
UrlResource contentResource = new UrlResource();
contentResource.Url = "https://example.com/catThumbnail.jpeg";
ThumbAsset thumbAsset = new ThumbAsset();

OnCompletedHandler<ThumbAsset> handler = new OnCompletedHandler<ThumbAsset>(
(ThumbAsset result, Exception e) =>
{
  OnCompletedHandler<ThumbAsset> handler = new OnCompletedHandler<ThumbAsset>(
    (ThumbAsset result, Exception e) =>
    {
      done = true; });
  ThumbAssetService.SetContent(result.id, contentResource)
  .SetCompletion(handler)
  .Execute(client);

  done = true; });
ThumbAssetService.Add(entryId, thumbAsset)
.SetCompletion(handler)
.Execute(client);
