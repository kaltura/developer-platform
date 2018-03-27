<?php
  $cuePoint = new KalturaQuestionCuePoint();
  $cuePoint->entryId = "0_mej0it92";
  $cuePoint->question = "hello world";

  try {
    $result = $client->getCuePointService()->add($cuePoint);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>