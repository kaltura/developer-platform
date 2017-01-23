var captionAsset = new Kaltura.kc.objects.KalturaCaptionAsset();
var entryId = "";

client.captionAsset.add(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
captionAsset,
entryId);