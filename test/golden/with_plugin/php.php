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
  $metadataPlugin = KalturaMetadataClientPlugin::get($client);

  $filter = new KalturaMetadataProfileFilter();
  $pager = new KalturaFilterPager();

  try {
    $result = $metadataPlugin->metadataProfile->listAction($filter, $pager);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>