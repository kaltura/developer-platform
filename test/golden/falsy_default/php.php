<?php
  $id = 0;
  $lockKey = new KalturaExclusiveLockKey();
  $jobType = "";
  $resetExecutionAttempts = false;

  try {
    $result = $client->batch->freeExclusiveJob($id, $lockKey, $jobType, $resetExecutionAttempts);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>