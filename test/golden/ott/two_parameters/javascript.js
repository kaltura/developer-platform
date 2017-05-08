var filter = new KalturaAssetHistoryFilter();
filter.assetIdIn = "id_in";
filter.orderBy = 0;
var pager = new KalturaFilterPager();
pager.pageIndex = 3;
pager.pageSize = 7;

client.assetHistory.listAction(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
filter,
pager);