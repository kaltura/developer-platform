<?php
  try {
    $result = $client->session->end();
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>