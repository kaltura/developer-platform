<?php
  $id = 0;
  $lockKey = new ExclusiveLockKey();
  $jobType = "";
  $resetExecutionAttempts = false;

  try {
    $result = $client->getBatchService()->freeExclusiveJob($id, $lockKey, $jobType, $resetExecutionAttempts);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>