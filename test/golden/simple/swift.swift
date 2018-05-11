var filter = MediaEntryFilter()
var pager = FilterPager()

var requestBuilder = MediaService.list(filter: filter, pager: pager)
requestBuilder.set(completion: {(result: MediaListResponse?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))