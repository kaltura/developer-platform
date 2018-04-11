var entryId = "";
var captionAsset = {objectType: "KalturaCaptionAsset"};
captionAsset.tags = "stuff";
captionAsset.language = "Arabic";

KalturaCaptionAssetService.add(entryId, captionAsset)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });