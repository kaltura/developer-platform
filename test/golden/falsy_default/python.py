
id = 0
lock_key = KalturaExclusiveLockKey()
job_type = ""
reset_execution_attempts = False

result = client.batch.freeExclusiveJob(id, lock_key, job_type, reset_execution_attempts)
print(result)
