<?php
  $id = "abc";

  try {
    $result = $client->getAppTokenService()->get($id);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>