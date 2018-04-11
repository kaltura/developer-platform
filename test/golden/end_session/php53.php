<?php
  try {
    $result = $client->getSessionService()->end();
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>