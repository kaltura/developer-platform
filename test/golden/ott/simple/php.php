<?php
  $id = "abc";

  try {
    $result = $client->appToken->get($id);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>