<?php
  require_once('lib/KalturaClient.php');

  $config = new KalturaConfiguration(1234);
  $config->serviceUrl = 'https://www.kaltura.com';
  $client = new KalturaClient($config);
  $ks = $client->session->start(
    "secretsauce",
    "YOUR_USER_ID",
    KalturaSessionType::ADMIN,
    1234);
  $client->setKS($ks);

?>