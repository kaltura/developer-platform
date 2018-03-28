<?php
  $filter = new MediaEntryFilter();
  $pager = new FilterPager();

  try {
    $result = $client->getMediaService()->listAction($filter, $pager);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>