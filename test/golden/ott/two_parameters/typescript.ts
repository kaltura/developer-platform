let filter = new KalturaAssetHistoryFilter();
filter.assetIdIn = "id_in";
filter.orderBy = 0;
let pager = new KalturaFilterPager();
pager.pageIndex = 3;
pager.pageSize = 7;

client.request(new AssetHistoryListAction({filter, pager}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })