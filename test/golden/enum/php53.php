<?php
  $secret = "*******************";
  $userId = "YOUR_USER_ID";
  $type = SessionType::USER;
  $partnerId = 0;
  $expiry = 86400;
  $privileges = "";

  try {
    $result = $client->getSessionService()->start($secret, $userId, $type, $partnerId, $expiry, $privileges);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>