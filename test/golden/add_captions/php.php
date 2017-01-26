<?php

  $entryId = "";
  $captionAsset = new KalturaCaptionAsset();

  try {
    $result = $client->captionAsset->add($entryId, $captionAsset);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>