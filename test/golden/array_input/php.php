<?php
  require_once('lib/KalturaClient.php');

  $config = new KalturaConfiguration();
  $config->setServiceUrl('https://www.kaltura.com');
  $client = new KalturaClient($config);
  $ks = $client->session->start(
    "YOUR_KALTURA_SECRET",
    "YOUR_USER_ID",
    KalturaSessionType::ADMIN,
    YOUR_PARTNER_ID);
  $client->setKS($ks);

  $accessControlProfile = new KalturaAccessControlProfile();
  $accessControlProfile->name = "foo";
  $accessControlProfile->rules = [];
  $accessControlProfile->rules[0] = new KalturaRule();
  $accessControlProfile->rules[0]->code = "thiscode";
  $accessControlProfile->rules[0]->contexts = [];
  $accessControlProfile->rules[0]->contexts[0] = new KalturaContextTypeHolder();
  $accessControlProfile->rules[0]->contexts[0]->type = KalturaContextType::PLAY;
  $accessControlProfile->rules[0]->contexts[1] = new KalturaContextTypeHolder();
  $accessControlProfile->rules[0]->conditions = [];
  $accessControlProfile->rules[0]->conditions[0] = new KalturaDeliveryProfileCondition();
  $accessControlProfile->rules[0]->conditions[0]->description = "cond 1";
  $accessControlProfile->rules[0]->conditions[1] = new KalturaDeliveryProfileCondition();
  $accessControlProfile->rules[0]->conditions[1]->description = "cond 2";
  $accessControlProfile->rules[1] = new KalturaRule();
  $accessControlProfile->rules[1]->code = "second code";

  try {
    $result = $client->accessControlProfile->add($accessControlProfile);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>