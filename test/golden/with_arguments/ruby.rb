
filter = KalturaMediaEntryFilter.new()
filter.name_like = "foobar"
filter.status_equal = KalturaEntryStatus::READY
filter.advanced_search = KalturaAttributeCondition.new()
filter.advanced_search.value = "baz"
pager = KalturaFilterPager.new()
pager.page_size = 3

results = client.media_service.list(filter, pager)
puts results.inspect