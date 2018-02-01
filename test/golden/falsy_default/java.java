int id = 0;
KalturaExclusiveLockKey lockKey = new KalturaExclusiveLockKey();
KalturaBatchJobType jobType = "";
boolean resetExecutionAttempts = false;

Object result = client.getBatchService().freeExclusiveJob(id, lockKey, jobType, resetExecutionAttempts);
System.out.println(result);