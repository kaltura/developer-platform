<?php
<% var getImport = function(name, type) { -%>
<%   var plugin = plugins.filter(function(p) { return name.toLowerCase().indexOf(p) === 0 }).pop() -%>
<%   if (plugin) return "use Kaltura\\Client\\Plugin\\" + plugin.charAt(0).toUpperCase() + plugin.substring(1) + "\\" + type + "\\" + name + ";" -%>
<%   return "use Kaltura\\Client\\" + type + "\\" + name + ";" -%>
<% } -%>
<% if (showSetup) { -%>
use Kaltura\Client\Configuration as KalturaConfiguration;
use Kaltura\Client\Client as KalturaClient;
<%   if (enums.indexOf('SessionType') === -1) { -%>
use Kaltura\Client\Enum\SessionType;
<%   } -%>
<%   for (var i = 0; i < enums.length; ++i) { -%>
<%- getImport(enums[i], 'Enum') %>
<%   } -%>
<%   for (var i = 0; i < objects.length; ++i) { -%>
<%- getImport(objects[i], 'Type') %>
<%   } -%>
use Kaltura\Client\ApiException;
<% plugins.forEach(function(p) { -%>
use Kaltura\Client\Plugin\<%- p.charAt(0).toUpperCase() + p.substring(1) %>\<%- p.charAt(0).toUpperCase() + p.substring(1) %>Plugin;
<% }) -%>

require_once(dirname(__FILE__).'/ClassLoader/ClassLoader.php');
$loader = new Symfony\Component\ClassLoader\ClassLoader();
$loader->addPrefix('Kaltura', dirname(__FILE__).'/php53/library');
$loader->register();

$config = new KalturaConfiguration(<%- codegen.constant(answers.partnerId) %>);
$config->setServiceUrl('https://www.kaltura.com');
$client = new KalturaClient($config);
<%   if (!noSession) { -%>
    $ks = $client->generateSessionV2(
    <%- codegen.constant(answers.secret) %>, 
    <%- codegen.constant(answers.userId) %>, 
    <%- answers.sessionType === 0 ? 'KalturaSessionType::USER' : 'KalturaSessionType::ADMIN' %>, 
    <%- answers.partnerId || 'YOUR_PARTNER_ID' %>, 
    86400,
    ''
);
$client->setKS($ks);
<%   } -%>
<% plugins.forEach(function(p) { -%>
$<%-p %>Plugin = <%- p.charAt(0).toUpperCase() + p.substring(1) %>Plugin::get($client);
<% }) -%>
<% } -%>
<%- codegen.assignAllParameters(parameters, answers, 2) -%>
try {
<% if (plugins.length) { -%>
    $result = $<%- plugins[0] %>Plugin-><%- service %>-><%- action %>(<%- parameterNames.join(', ') %>);
<% } else { -%>
    $result = $client->get<%- service.charAt(0).toUpperCase() + service.substring(1) %>Service()-><%- action %>(<%- parameterNames.join(', ') %>);
<% } -%>
    var_dump($result);
} catch (Exception $e) {
    echo $e->getMessage();
}
?>
