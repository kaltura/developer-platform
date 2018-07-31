<?php
  $liveStreamEntry = new KalturaLiveStreamEntry();
  $liveStreamEntry->liveStreamConfigurations = [];
  $liveStreamEntry->liveStreamConfigurations[0] = new KalturaLiveStreamConfiguration();
  $liveStreamEntry->liveStreamConfigurations[0]->backupUrl = "abcd";
  $sourceType = "";

  try {
    $result = $client->liveStream->add($liveStreamEntry, $sourceType);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>