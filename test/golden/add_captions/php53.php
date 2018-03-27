<?php
  $entryId = "";
  $captionAsset = new KalturaCaptionAsset();
  $captionAsset->tags = "stuff";
  $captionAsset->language = "Arabic";

  try {
    $result = $client->getCaptionAssetService()->add($entryId, $captionAsset);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>