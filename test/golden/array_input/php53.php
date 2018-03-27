<?php
  /**
   * @namespace
   */
  namespace KalturaCode;
  use Kaltura\Client\Configuration as KalturaConfiguration;
  use Kaltura\Client\Client as KalturaClient;
  use Kaltura\Client\Enum\SessionType as KalturaSessionType;
  use Kaltura\Client\Enum\KalturaContextType;
  use Kaltura\Client\Type\KalturaAccessControlProfile;
  use Kaltura\Client\Type\KalturaRule;
  use Kaltura\Client\Type\KalturaContextTypeHolder;
  use Kaltura\Client\Type\KalturaCondition;
  use Kaltura\Client\Type\KalturaCondition;
  use Kaltura\Client\Type\KalturaRule;
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
  $accessControlProfile = new KalturaAccessControlProfile();
  $accessControlProfile->name = "foo";
  $accessControlProfile->rules = [];
  $accessControlProfile->rules[0] = new KalturaRule();
  $accessControlProfile->rules[0]->code = "thiscode";
  $accessControlProfile->rules[0]->contexts = [];
  $accessControlProfile->rules[0]->contexts[0] = new KalturaContextTypeHolder();
  $accessControlProfile->rules[0]->contexts[0]->type = 1;
  $accessControlProfile->rules[0]->contexts[1] = new KalturaContextTypeHolder();
  $accessControlProfile->rules[0]->conditions = [];
  $accessControlProfile->rules[0]->conditions[0] = new KalturaCondition();
  $accessControlProfile->rules[0]->conditions[0]->description = "cond 1";
  $accessControlProfile->rules[0]->conditions[1] = new KalturaCondition();
  $accessControlProfile->rules[0]->conditions[1]->description = "cond 2";
  $accessControlProfile->rules[1] = new KalturaRule();
  $accessControlProfile->rules[1]->code = "second code";

  try {
    $result = $client->getAccessControlProfileService()->add($accessControlProfile);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>