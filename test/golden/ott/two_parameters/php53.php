<?php
  $filter = new AssetHistoryFilter();
  $filter->assetIdIn = "id_in";
  $filter->orderBy = 0;
  $pager = new FilterPager();
  $pager->pageIndex = 3;
  $pager->pageSize = 7;

  try {
    $result = $client->getAssetHistoryService()->listAction($filter, $pager);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>