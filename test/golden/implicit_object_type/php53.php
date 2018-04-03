<?php
  $searchParams = new ESearchEntryParams();
  $searchParams->searchOperator = new ESearchEntryOperator();
  $searchParams->searchOperator->operator = ESearchOperatorType::AND_OP;
  $searchParams->searchOperator->searchItems = [];
  $searchParams->searchOperator->searchItems[0] = new ESearchCaptionItem();
  $searchParams->searchOperator->searchItems[0]->searchTerm = "asdf";
  $pager = new Pager();

  try {
    $result = $client->getESearchService()->searchEntry($searchParams, $pager);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>