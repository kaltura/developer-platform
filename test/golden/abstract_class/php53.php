<?php
  $cuePoint = NULL /* KalturaCuePoint is an abstract class, please select an implementation */;

  try {
    $result = $cuePointPlugin->cuePoint->add($cuePoint);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>