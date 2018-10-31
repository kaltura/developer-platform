<?php
  require_once('lib/KalturaClient.php');

  $config = new KalturaConfiguration();
  $config->serviceUrl = 'https://www.kaltura.com';
  $client = new KalturaClient($config);
  $ks = $client->session->start(
    "YOUR_KALTURA_SECRET",
    "YOUR_USER_ID",
    KalturaSessionType::ADMIN,
    YOUR_PARTNER_ID);
  $client->setKS($ks);

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