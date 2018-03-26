var searchParams = {objectType: "KalturaESearchParams"};
searchParams.searchOperator = {objectType: "KalturaESearchOperator"};
searchParams.searchOperator.operator = 1 /* KalturaESearchOperatorType.AND_OP */;
searchParams.searchOperator.searchItems = [];
searchParams.searchOperator.searchItems[0] = {objectType: "KalturaESearchCaptionItem"};
searchParams.searchOperator.searchItems[0].searchTerm = "asdf";
var pager = {objectType: "KalturaPager"};

KalturaESearchService.searchEntry(searchParams, pager)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });