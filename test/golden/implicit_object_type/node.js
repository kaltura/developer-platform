var searchParams = new Kaltura.kc.objects.KalturaESearchParams();
searchParams.searchOperator = new Kaltura.kc.objects.KalturaESearchOperator();
searchParams.searchOperator.operator = Kaltura.kc.enums.KalturaESearchOperatorType.AND_OP;
searchParams.searchOperator.searchItems = [];
searchParams.searchOperator.searchItems[0] = new Kaltura.kc.objects.KalturaESearchCaptionItem();
searchParams.searchOperator.searchItems[0].searchTerm = "asdf";
var pager = new Kaltura.kc.objects.KalturaPager();

client.eSearch.searchEntry(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
searchParams,
pager);