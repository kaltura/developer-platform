<?php
  $loginId = "";
  $password = "*************";
  $partnerId = 0;
  $expiry = 86400;
  $privileges = "*";
  $otp = "";

  try {
    $result = $client->getUserService()->loginByLoginId($loginId, $password, $partnerId, $expiry, $privileges, $otp);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>