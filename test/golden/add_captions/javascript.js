var captionAsset = new KalturaCaptionAsset();
var entryId = "";

client.captionAsset.add(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
captionAsset,
entryId);