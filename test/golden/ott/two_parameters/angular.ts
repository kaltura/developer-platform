let filter = new KalturaAssetHistoryFilter();
filter.assetIdIn = "id_in";
filter.orderBy = 0;
let pager = new KalturaFilterPager();
pager.pageIndex = 3;
pager.pageSize = 7;

this.kaltura.request(new AssetHistoryListAction({filter, pager}))
    .map(result => {
      console.log(result);
    },
    error => {
      throw error;
    })