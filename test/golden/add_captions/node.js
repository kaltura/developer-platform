var entryId = "";
var captionAsset = new Kaltura.kc.objects.KalturaCaptionAsset();

client.captionAsset.add(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
entryId,
captionAsset);