int id = 0;
ExclusiveLockKey lockKey = new ExclusiveLockKey();
BatchJobType jobType = "";
boolean resetExecutionAttempts = false;

FreeExclusiveJobBatchBuilder requestBuilder = BatchService.freeexclusivejob(id, lockKey, jobType, resetExecutionAttempts)
    .setCompletion(new OnCompletion<Response<FreeJobResponse>>() {
        @Override
        public void onComplete(Response<FreeJobResponse> result) {
            System.out.println(result);
        }
    });