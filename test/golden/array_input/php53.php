<?php
  use Kaltura\Client\Configuration as KalturaConfiguration;
  use Kaltura\Client\Client as KalturaClient;
  use Kaltura\Client\Enum\SessionType;
  use Kaltura\Client\Enum\ContextType;
  use Kaltura\Client\Type\AccessControlProfile;
  use Kaltura\Client\Type\Rule;
  use Kaltura\Client\Type\ContextTypeHolder;
  use Kaltura\Client\Type\Condition;
  use Kaltura\Client\ApiException;

  // load zend framework 2
  require_once(dirname(__FILE__).'/ClassLoader/ClassLoader.php');
  $loader = new Symfony\Component\ClassLoader\ClassLoader();
  $loader->addPrefix('Kaltura', dirname(__FILE__).'/php53/library');
  $loader->register();

  $config = new KalturaConfiguration();
  $config->setServiceUrl('https://www.kaltura.com');
  $client = new KalturaClient($config);
  $ks = $client->generateSession(
      "YOUR_KALTURA_SECRET",
      "YOUR_USER_ID",
      SessionType::ADMIN,
      "YOUR_PARTNER_ID");
  $client->setKS($ks);
  $accessControlProfile = new AccessControlProfile();
  $accessControlProfile->name = "foo";
  $accessControlProfile->rules = [];
  $accessControlProfile->rules[0] = new Rule();
  $accessControlProfile->rules[0]->code = "thiscode";
  $accessControlProfile->rules[0]->contexts = [];
  $accessControlProfile->rules[0]->contexts[0] = new ContextTypeHolder();
  $accessControlProfile->rules[0]->contexts[0]->type = 1;
  $accessControlProfile->rules[0]->contexts[1] = new ContextTypeHolder();
  $accessControlProfile->rules[0]->conditions = [];
  $accessControlProfile->rules[0]->conditions[0] = new Condition();
  $accessControlProfile->rules[0]->conditions[0]->description = "cond 1";
  $accessControlProfile->rules[0]->conditions[1] = new Condition();
  $accessControlProfile->rules[0]->conditions[1]->description = "cond 2";
  $accessControlProfile->rules[1] = new Rule();
  $accessControlProfile->rules[1]->code = "second code";

  try {
    $result = $client->getAccessControlProfileService()->add($accessControlProfile);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>