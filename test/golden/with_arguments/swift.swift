var filter = MediaEntryFilter()
filter.nameLike = "foobar"
filter.statusEqual = EntryStatus.READY
filter.orderBy = MediaEntryOrderBy.CREATED_AT_ASC
filter.advancedSearch = AttributeCondition()
filter.advancedSearch.value = "baz"
var pager = FilterPager()
pager.pageSize = 3

var requestBuilder = MediaService.list(filter: filter, pager: pager)
requestBuilder.set(completion: {(result: MediaListResponse?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))