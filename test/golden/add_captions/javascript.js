var entryId = "";
var captionAsset = new KalturaCaptionAsset();
captionAsset.tags = "stuff";
captionAsset.language = "Arabic";

client.captionAsset.add(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
entryId,
captionAsset);