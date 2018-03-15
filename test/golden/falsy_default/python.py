
id = 0
lockKey = KalturaExclusiveLockKey()
jobType = ""
resetExecutionAttempts = False

result = client.batch.freeExclusiveJob(id, lockKey, jobType, resetExecutionAttempts);
print(result);
