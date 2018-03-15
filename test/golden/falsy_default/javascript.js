var id = 0;
var lockKey = new KalturaExclusiveLockKey();
var jobType = "";
var resetExecutionAttempts = false;

client.batch.freeExclusiveJob(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
id,
lockKey,
jobType,
resetExecutionAttempts);