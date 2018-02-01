var id = 0;
var lockKey = {objectType: "KalturaExclusiveLockKey"};
var jobType = "";
var resetExecutionAttempts = false;

KalturaBatchService.freeExclusiveJob(id, lockKey, jobType, resetExecutionAttempts)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });