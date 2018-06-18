<?php
  $elasticSearchPlugin = KalturaElasticSearchClientPlugin::get($client);
  $searchParams = new KalturaESearchEntryParams();
  $searchParams->searchOperator = new KalturaESearchEntryOperator();
  $searchParams->searchOperator->searchItems = [];
  $searchParams->searchOperator->searchItems[0] = new KalturaESearchUnifiedItem();
  $searchParams->searchOperator->searchItems[0]->itemType = KalturaESearchItemType::PARTIAL;
  $searchParams->searchOperator->searchItems[0]->searchTerm = "cat";
  $result = $elasticSearchPlugin->eSearch->searchEntry($searchParams);
?>
