<?php
  $entryId = "abcde";
  $version = -1;

  try {
    $result = $client->media->get($entryId, $version);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>