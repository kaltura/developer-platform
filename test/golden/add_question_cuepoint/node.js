var cuePoint = new Kaltura.kc.objects.KalturaQuestionCuePoint();
cuePoint.entryId = "0_mej0it92";
cuePoint.question = "hello world";

client.cuePoint.add(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
cuePoint);