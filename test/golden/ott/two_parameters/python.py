
filter = KalturaAssetHistoryFilter()
filter.assetIdIn = "id_in"
filter.orderBy = 0
pager = KalturaFilterPager()
pager.pageIndex = 3
pager.pageSize = 7

result = client.assetHistory.list(filter, pager)
print(result)
