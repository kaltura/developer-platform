var entryId = "";
var captionAsset = {};

KalturaCaptionAssetService.add(entryId, captionAsset)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });