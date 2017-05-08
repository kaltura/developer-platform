KalturaAssetHistoryFilter filter = new KalturaAssetHistoryFilter();
filter.assetIdIn = "id_in";
filter.orderBy = 0;
KalturaFilterPager pager = new KalturaFilterPager();
pager.pageIndex = 3;
pager.pageSize = 7;

Object result = client.getAssetHistoryService().list(filter, pager);
System.out.println(result);