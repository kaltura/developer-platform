<?php
  $uploadTokenId = "abcde";
  $fileData = "/path/to/file";
  $resume = false;
  $finalChunk = true;
  $resumeAt = -1;

  try {
    $result = $client->uploadToken->upload($uploadTokenId, $fileData, $resume, $finalChunk, $resumeAt);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>