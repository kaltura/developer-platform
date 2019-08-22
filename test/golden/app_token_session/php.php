<?php
  require_once('lib/KalturaClient.php');

  $config = new KalturaConfiguration(12345);
  $config->setServiceUrl('https://www.kaltura.com');
  $client = new KalturaClient($config);
  $ks = $client->session->start(
    "YOUR_KALTURA_SECRET",
    "YOUR_USER_ID",
    KalturaSessionType::ADMIN,
    12345);
  $client->setKS($ks);

  $id = "";
  $tokenHash = "";
  $userId = "YOUR_USER_ID";
  $type = KalturaSessionType::USER;
  $expiry = 0;
  $sessionPrivileges = "";

  try {
    $result = $client->appToken->startSession($id, $tokenHash, $userId, $type, $expiry, $sessionPrivileges);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>