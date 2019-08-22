<?php
  require_once('lib/KalturaClient.php');

  $config = new KalturaConfiguration(123456);
  $config->setServiceUrl('https://www.kaltura.com');
  $client = new KalturaClient($config);

  $secret = "********************";
  $userId = "user@example.com";
  $type = KalturaSessionType::USER;
  $partnerId = 123456;
  $expiry = 86400;
  $privileges = "";

  try {
    $result = $client->session->start($secret, $userId, $type, $partnerId, $expiry, $privileges);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>
