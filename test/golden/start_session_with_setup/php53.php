<?php
  /**
   * @namespace
   */
  namespace KalturaCode;
  use Kaltura\Client\Configuration as KalturaConfiguration;
  use Kaltura\Client\Client as KalturaClient;
  use Kaltura\Client\Enum\SessionType as KalturaSessionType;
  use Kaltura\Client\Enum\KalturaSessionType;
  use Kaltura\Client\ApiException;
  use Exception;

  $config = new KalturaConfiguration(2018872);
  $config->serviceUrl = 'https://www.kaltura.com';
  $client = new KalturaClient($config);
  $secret = "81b50515b869628777617f454cdca7f5";
  $userId = "bobby.brennan@gmail.com";
  $type = KalturaSessionType::USER;
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