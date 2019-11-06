<?php
  $secret = "a1b2c3d4e5f6g7h8i9j0";
  $userId = "you@email.com";
  $type = KalturaSessionType::ADMIN;
  $partnerId = 0000000;
  $expiry = 86400;
  $privileges = "";
  $result = $client->session->start($secret, $userId, $type, $partnerId, $expiry, $privileges);
  var_dump($result);
?>
