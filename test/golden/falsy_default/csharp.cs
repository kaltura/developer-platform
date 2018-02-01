int id = 0;
ExclusiveLockKey lockKey = new ExclusiveLockKey();
BatchJobType jobType = "";
boolean resetExecutionAttempts = false;

OnCompletedHandler<FreeJobResponse> handler = new OnCompletedHandler<FreeJobResponse>(
      (FreeJobResponse result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
BatchService.FreeExclusiveJob(id, lockKey, jobType, resetExecutionAttempts)
   .SetCompletion(handler)
   .Execute(client);