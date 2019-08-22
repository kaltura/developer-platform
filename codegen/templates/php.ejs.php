<?php
<% if (showSetup) { -%>
  require_once('lib/KalturaClient.php');

  $config = new KalturaConfiguration(<%- codegen.constant(answers.partnerId) %>);
  $config->setServiceUrl('https://www.kaltura.com');
  $client = new KalturaClient($config);
<% if (!noSession) { -%>
  $ks = $client->session->start(
    <%- codegen.constant(answers.secret) %>,
    <%- codegen.constant(answers.userId) %>,
    <%- answers.sessionType === 0 ? 'KalturaSessionType::USER' : 'KalturaSessionType::ADMIN' %>,
    <%- answers.partnerId || 'YOUR_PARTNER_ID' %>);
  $client->setKS($ks);
<% } -%>

<% } -%>
<% plugins.forEach(function(p) { -%>
  $<%-p %>Plugin = Kaltura<%- p.charAt(0).toUpperCase() + p.substring(1) %>ClientPlugin::get($client);
<% }) -%>
<%- codegen.assignAllParameters(parameters, answers, 2) -%>
  try {
    $result = $<%- plugins.length ? plugins[0] + 'Plugin' : 'client' %>-><%- service %>-><%- action %>(<%- parameterNames.join(', ') %>);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>
