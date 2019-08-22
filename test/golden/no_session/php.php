<?php
  require_once('lib/KalturaClient.php');

  $config = new KalturaConfiguration();
  $config->setServiceUrl('https://www.kaltura.com');
  $client = new KalturaClient($config);

  $loginId = "foobar";
  $password = "*************";
  $partnerId = 0;
  $expiry = 86400;
  $privileges = "*";
  $otp = "";

  try {
    $result = $client->user->loginByLoginId($loginId, $password, $partnerId, $expiry, $privileges, $otp);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>
