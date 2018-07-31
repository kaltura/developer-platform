<?php
  $liveStreamEntry = new LiveStreamEntry();
  $liveStreamEntry->liveStreamConfigurations = [];
  $liveStreamEntry->liveStreamConfigurations[0] = new LiveStreamConfiguration();
  $liveStreamEntry->liveStreamConfigurations[0]->backupUrl = "abcd";
  $sourceType = "";

  try {
    $result = $client->getLiveStreamService()->add($liveStreamEntry, $sourceType);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>