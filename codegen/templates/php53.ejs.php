<?php
<% if (showSetup) { -%>
  /**
   * @namespace
   */
  namespace KalturaCode;
  use Kaltura\Client\Configuration as KalturaConfiguration;
  use Kaltura\Client\Client as KalturaClient;
<%   if (enums.indexOf('SessionType') === -1) { -%>
  use Kaltura\Client\Enum\SessionType as KalturaSessionType;
<%   } -%>
<%   for (var i = 0; i < enums.length; ++i) { -%>
  use Kaltura\Client\Enum\<%- enums[i] %>;
<%   } -%>
<%   for (var i = 0; i < objects.length; ++i) { -%>
  use Kaltura\Client\Type\<%- objects[i] %>;
<%   } -%>
  use Kaltura\Client\ApiException;
  use Exception;

  $config = new KalturaConfiguration(<%- codegen.constant(answers.partnerId) %>);
  $config->serviceUrl = 'https://www.kaltura.com';
  $client = new KalturaClient($config);
<%   if (serviceID !== 'session' || actionID !== 'start') { -%>
  $ks = $client->generateSession(
      <%- codegen.constant(answers.secret) %>,
      <%- codegen.constant(answers.userId) %>,
      <%- answers.sessionType === 0 ? 'KalturaSessionType::USER' : 'KalturaSessionType::ADMIN' %>,
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
