<?php
  $captionPlugin = KalturaCaptionClientPlugin::get($client);
  $entryId = "";
  $captionAsset = new KalturaCaptionAsset();
  $captionAsset->tags = "stuff";
  $captionAsset->language = "Arabic";

  try {
    $result = $captionPlugin->captionAsset->add($entryId, $captionAsset);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>