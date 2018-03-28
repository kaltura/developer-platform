<?php
  $channel = new Channel();
  $channel->description = "foo";
  $channel->isActive = true;

  try {
    $result = $client->getChannelService()->add($channel);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>