var searchParams = new KalturaESearchParams();
searchParams.searchOperator = new KalturaESearchOperator();
searchParams.searchOperator.operator = KalturaESearchOperatorType.AND_OP;
searchParams.searchOperator.searchItems = [];
searchParams.searchOperator.searchItems[0] = new KalturaESearchCaptionItem();
searchParams.searchOperator.searchItems[0].searchTerm = "asdf";
var pager = new KalturaPager();

client.eSearch.searchEntry(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
searchParams,
pager);