var id = 0;
var lockKey = new Kaltura.kc.objects.KalturaExclusiveLockKey();
var jobType = "";
var resetExecutionAttempts = false;

client.batch.freeExclusiveJob(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
id,
lockKey,
jobType,
resetExecutionAttempts);