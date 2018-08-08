var filter = {objectType: "KalturaAssetHistoryFilter"};
filter.assetIdIn = "id_in";
filter.orderBy = 0;
var pager = {objectType: "KalturaFilterPager"};
pager.pageIndex = 3;
pager.pageSize = 7;

KalturaAssetHistoryService.list(filter, pager)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });