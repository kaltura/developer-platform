<?php
  $entryId = "abcde";
  $version = -1;

  try {
    $result = $client->getMediaService()->get($entryId, $version);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>