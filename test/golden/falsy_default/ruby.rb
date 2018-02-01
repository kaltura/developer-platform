
id = 0
lock_key = KalturaExclusiveLockKey.new()
job_type = ""
reset_execution_attempts = false

results = client.batch_service.free_exclusive_job(id, lock_key, job_type, reset_execution_attempts)
puts results.inspect
