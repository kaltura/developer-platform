<?php
  require_once('lib/KalturaClient.php');

  $config = new KalturaConfiguration(2018872);
  $config->serviceUrl = 'https://www.kaltura.com';
  $client = new KalturaClient($config);
  $ks = $client->session->start(
    "81b50515b869628777617f454cdca7f5",
    "bobby.brennan@gmail.com",
    KalturaSessionType::USER,
    2018872);
  $client->setKS($ks);

?>