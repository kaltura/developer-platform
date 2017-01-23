<?php
<% if (showSetup) { -%>
  require_once('lib/KalturaClient.php');

  $config = new KalturaConfiguration(<%- codegen.constant(answers.partnerId) %>);
  $config->serviceUrl = 'https://www.kaltura.com';
  $client = new KalturaClient($config);
  $ks = $client->session->start(
    <%- codegen.constant(answers.secret) %>,
    <%- codegen.constant(answers.userId) %>,
    <%- answers.sessionType === 0 ? 'KalturaSessionType::USER' : 'KalturaSessionType::ADMIN' %>,
    <%- answers.partnerId || 'YOUR_PARTNER_ID' %>);
  $client->setKS($ks);

<% } -%>

<%- codegen.assignAllParameters(parameters, answers, 2) %>

  try {
    $result = $client-><%- service %>-><%- action %>(<%- parameterNames.join(', ') %>);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>
