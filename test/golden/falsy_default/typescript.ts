let id = 0;
let lockKey = new KalturaExclusiveLockKey();
let jobType = "";
let resetExecutionAttempts = false;

client.request(new BatchFreeExclusiveJobAction({id, lockKey, jobType, resetExecutionAttempts}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })