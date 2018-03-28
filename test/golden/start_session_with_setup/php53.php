<?php
  use Kaltura\Client\Configuration as KalturaConfiguration;
  use Kaltura\Client\Client as KalturaClient;
  use Kaltura\Client\Enum\SessionType;
  use Kaltura\Client\ApiException;

  // load zend framework 2
  require_once(dirname(__FILE__).'/ClassLoader/ClassLoader.php');
  $loader = new Symfony\Component\ClassLoader\ClassLoader();
  $loader->addPrefix('Kaltura', dirname(__FILE__).'/php53/library');
  $loader->register();

  $config = new KalturaConfiguration(2018872);
  $config->setServiceUrl('https://www.kaltura.com');
  $client = new KalturaClient($config);
  $secret = "81b50515b869628777617f454cdca7f5";
  $userId = "bobby.brennan@gmail.com";
  $type = SessionType::USER;
  $partnerId = 2018872;
  $expiry = 86400;
  $privileges = "";

  try {
    $result = $client->getSessionService()->start($secret, $userId, $type, $partnerId, $expiry, $privileges);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>