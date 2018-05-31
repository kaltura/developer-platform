var filter = AssetHistoryFilter()
filter.assetIdIn = "id_in"
filter.orderBy = 0
var pager = FilterPager()
pager.pageIndex = 3
pager.pageSize = 7

let requestBuilder = AssetHistoryService.list(filter: filter, pager: pager)
requestBuilder.set(completion: {(result: AssetHistoryListResponse?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))