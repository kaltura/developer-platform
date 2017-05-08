<?php
  $channel = new KalturaChannel();
  $channel->description = "foo";
  $channel->isActive = true;
  $channel->assetTypes = [];
  $channel->assetTypes[0] = new KalturaIntegerValue();
  $channel->assetTypes[0]->value = 0;
  $channel->assetTypes[0]->description = "assetValDesc";
  $channel->assetTypes[1] = new KalturaIntegerValue();
  $channel->assetTypes[1]->value = 1;
  $channel->assetTypes[1]->description = "assetDesc2";

  try {
    $result = $client->channel->add($channel);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>