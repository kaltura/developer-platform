KalturaCaptionAsset captionAsset = new KalturaCaptionAsset();
string entryId = "";

Object result = client.CaptionAssetService.Add(captionAsset, entryId);
Console.WriteLine(result);