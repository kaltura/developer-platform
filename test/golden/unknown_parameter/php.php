<?php
  $accessControl = new KalturaAccessControl();

  try {
    $result = $client->accessControl->add($accessControl);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>