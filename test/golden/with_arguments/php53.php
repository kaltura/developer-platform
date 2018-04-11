<?php
  $filter = new MediaEntryFilter();
  $filter->nameLike = "foobar";
  $filter->statusEqual = EntryStatus::READY;
  $filter->orderBy = MediaEntryOrderBy::CREATED_AT_ASC;
  $filter->advancedSearch = new AttributeCondition();
  $filter->advancedSearch->value = "baz";
  $pager = new FilterPager();
  $pager->pageSize = 3;

  try {
    $result = $client->getMediaService()->listAction($filter, $pager);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>