<?php
  $user = new KalturaUser();
  $user->email = "you@email.com";
  $user->id = "username";
  $result = $client->user->add($user);
?>
