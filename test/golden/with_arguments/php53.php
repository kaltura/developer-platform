<?php
  $filter = new KalturaMediaEntryFilter();
  $filter->nameLike = "foobar";
  $filter->statusEqual = KalturaEntryStatus::READY;
  $filter->orderBy = KalturaMediaEntryOrderBy::CREATED_AT_ASC;
  $filter->advancedSearch = new KalturaAttributeCondition();
  $filter->advancedSearch->value = "baz";
  $pager = new KalturaFilterPager();
  $pager->pageSize = 3;

  try {
    $result = $client->getMediaService()->listAction($filter, $pager);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>