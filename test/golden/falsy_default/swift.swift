var id = 0
var lockKey = ExclusiveLockKey()
var jobType = ""
var resetExecutionAttempts = false

var requestBuilder = BatchService.freeExclusiveJob(id: id, lockKey: lockKey, jobType: jobType, resetExecutionAttempts: resetExecutionAttempts)
requestBuilder.set(completion: {(result: FreeJobResponse?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))