let id = 0;
let lockKey = new kaltura.objects.ExclusiveLockKey();
let jobType = "";
let resetExecutionAttempts = false;

kaltura.services.batch.freeExclusiveJob(id, lockKey, jobType, resetExecutionAttempts)
.execute(client)
.then(result => {
    console.log(result);
});