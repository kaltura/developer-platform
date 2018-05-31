var filter = MediaEntryFilter()
var pager = FilterPager()

let requestBuilder = MediaService.list(filter: filter, pager: pager)
requestBuilder.set(completion: {(result: MediaListResponse?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))