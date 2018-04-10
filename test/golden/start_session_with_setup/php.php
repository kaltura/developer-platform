<?php
  require_once('lib/KalturaClient.php');

  $config = new KalturaConfiguration(123456);
  $config->serviceUrl = 'https://www.kaltura.com';
  $client = new KalturaClient($config);
  $ks = $client->session->start(
    "12341234123412341234",
    "user@example.com",
    KalturaSessionType::USER,
    123456);
  $client->setKS($ks);

?>