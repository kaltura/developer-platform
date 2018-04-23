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
    $result = $client->getUserService()->loginByLoginId($loginId, $password, $partnerId, $expiry, $privileges, $otp);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>