<?php
  use Kaltura\Client\Configuration as KalturaConfiguration;
  use Kaltura\Client\Client as KalturaClient;
  use Kaltura\Client\Enum\SessionType;
  use Kaltura\Client\ApiException;

  require_once(dirname(__FILE__).'/ClassLoader/ClassLoader.php');
  $loader = new Symfony\Component\ClassLoader\ClassLoader();
  $loader->addPrefix('Kaltura', dirname(__FILE__).'/php53/library');
  $loader->register();

  $config = new KalturaConfiguration(12345);
  $config->setServiceUrl('https://www.kaltura.com');
  $client = new KalturaClient($config);
  $ks = $client->generateSession(
      "YOUR_KALTURA_SECRET",
      "YOUR_USER_ID",
      SessionType::ADMIN,
      12345);
  $client->setKS($ks);
  $id = "";
  $tokenHash = "";
  $userId = "YOUR_USER_ID";
  $type = SessionType::USER;
  $expiry = 0;
  $sessionPrivileges = "";

  try {
    $result = $client->getAppTokenService()->startSession($id, $tokenHash, $userId, $type, $expiry, $sessionPrivileges);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>