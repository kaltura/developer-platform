var cuePoint = {objectType: "KalturaQuestionCuePoint"};
cuePoint.entryId = "0_mej0it92";
cuePoint.question = "hello world";

KalturaCuePointService.add(cuePoint)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });