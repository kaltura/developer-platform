<?php
  $elasticSearchPlugin = KalturaElasticSearchClientPlugin::get($client);
  $searchParams = new KalturaESearchEntryParams();
  $searchParams->searchOperator = new KalturaESearchEntryOperator();
  $searchParams->searchOperator->operator = KalturaESearchOperatorType::AND_OP;
  $searchParams->searchOperator->searchItems = [];
  $searchParams->searchOperator->searchItems[0] = new KalturaESearchCaptionItem();
  $searchParams->searchOperator->searchItems[0]->searchTerm = "asdf";
  $pager = new KalturaPager();

  try {
    $result = $elasticSearchPlugin->eSearch->searchEntry($searchParams, $pager);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>