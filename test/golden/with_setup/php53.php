<?php
  /**
   * @namespace
   */
  namespace KalturaCode;
  use Kaltura\Client\Configuration as KalturaConfiguration;
  use Kaltura\Client\Client as KalturaClient;
  use Kaltura\Client\Enum\SessionType as KalturaSessionType;
  use Kaltura\Client\ApiException;
  use Exception;

  $config = new KalturaConfiguration();
  $config->serviceUrl = 'https://www.kaltura.com';
  $client = new KalturaClient($config);
  $ks = $client->generateSession(
      "YOUR_KALTURA_SECRET",
      "YOUR_USER_ID",
      KalturaSessionType::ADMIN,
      "YOUR_PARTNER_ID");
  $client->setKS($ks);
  $filter = new KalturaMediaEntryFilter();
  $pager = new KalturaFilterPager();

  try {
    $result = $client->getMediaService()->listAction($filter, $pager);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>