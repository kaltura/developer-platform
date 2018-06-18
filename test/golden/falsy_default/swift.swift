var id = 0
var lockKey = ExclusiveLockKey()
var jobType = ""
var resetExecutionAttempts = false

let requestBuilder = BatchService.freeExclusiveJob(id: id, lockKey: lockKey, jobType: jobType, resetExecutionAttempts: resetExecutionAttempts)
requestBuilder.set(completion: {(result: FreeJobResponse?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))