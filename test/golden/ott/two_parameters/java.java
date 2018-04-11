AssetHistoryFilter filter = new AssetHistoryFilter();
filter.setAssetIdIn("id_in");
filter.setOrderBy(0);
FilterPager pager = new FilterPager();
pager.setPageIndex(3);
pager.setPageSize(7);

ListAssetHistoryBuilder requestBuilder = AssetHistoryService.list(filter, pager)
    .setCompletion(new OnCompletion<Response<ListResponse<AssetHistory>>>() {
        @Override
        public void onComplete(Response<ListResponse<AssetHistory>> result) {
            System.out.println(result);
        }
    });