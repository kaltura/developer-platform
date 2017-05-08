var filter = new Kaltura.kc.objects.KalturaAssetHistoryFilter();
filter.assetIdIn = "id_in";
filter.orderBy = 0;
var pager = new Kaltura.kc.objects.KalturaFilterPager();
pager.pageIndex = 3;
pager.pageSize = 7;

client.assetHistory.listAction(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
filter,
pager);