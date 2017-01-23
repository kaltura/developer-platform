<?php

  $captionAsset = new KalturaCaptionAsset();
  $entryId = "";

  try {
    $result = $client->captionAsset->add($captionAsset, $entryId);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>