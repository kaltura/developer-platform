<?php
  $accessControl = new AccessControl();

  try {
    $result = $client->getAccessControlService()->add($accessControl);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>