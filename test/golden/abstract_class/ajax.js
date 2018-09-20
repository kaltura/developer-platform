var cuePoint = null /* KalturaCuePoint is an abstract class, please select an implementation */;

KalturaCuePointService.add(cuePoint)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });