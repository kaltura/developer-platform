<?php
<% if (showSetup) { -%>
  use Kaltura\Client\Configuration as KalturaConfiguration;
  use Kaltura\Client\Client as KalturaClient;
<%   if (enums.indexOf('SessionType') === -1) { -%>
  use Kaltura\Client\Enum\SessionType;
<%   } -%>
<%   for (var i = 0; i < enums.length; ++i) { -%>
  use Kaltura\Client\Enum\<%- enums[i] %>;
<%   } -%>
<%   for (var i = 0; i < objects.length; ++i) { -%>
  use Kaltura\Client\Type\<%- objects[i] %>;
<%   } -%>
  use Kaltura\Client\ApiException;

  // load zend framework 2
  require_once(dirname(__FILE__).'/ClassLoader/ClassLoader.php');
  $loader = new Symfony\Component\ClassLoader\ClassLoader();
  $loader->addPrefix('Kaltura', dirname(__FILE__).'/php53/library');
  $loader->register();

  $config = new KalturaConfiguration(<%- codegen.constant(answers.partnerId) %>);
  $config->setServiceUrl('https://www.kaltura.com');
  $client = new KalturaClient($config);
<%   if (serviceID !== 'session' || actionID !== 'start') { -%>
  $ks = $client->generateSession(
      <%- codegen.constant(answers.secret) %>,
      <%- codegen.constant(answers.userId) %>,
      <%- answers.sessionType === 0 ? 'SessionType::USER' : 'SessionType::ADMIN' %>,
      <%- answers.partnerId || '"YOUR_PARTNER_ID"' %>);
  $client->setKS($ks);
<%   } -%>
<% } -%>
<%- codegen.assignAllParameters(parameters, answers, 2) -%>
  try {
    $result = $client-><%- service %>-><%- action %>(<%- parameterNames.join(', ') %>);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>
