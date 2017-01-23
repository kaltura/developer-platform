<?php

  $filter = new KalturaMediaEntryFilter();
  $pager = new KalturaFilterPager();

  try {
    $result = $client->media->listAction($filter, $pager);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>