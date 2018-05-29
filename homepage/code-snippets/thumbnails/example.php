<?php
  $entry_id = 'xyz_123'
  $resource = new KalturaUrlResource();
  $resource->url = "https://example.com/catThumbnail.jpeg";
  $thumbAsset = new KalturaThumbAsset();
  $result = $client->thumbAsset->add($entry_id, $thumbAsset);
  $client->thumbAsset->setContent($result->id, $resource);
?>
