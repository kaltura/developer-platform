
filter = KalturaMediaEntryFilter.new()
pager = KalturaFilterPager.new()

results = client.media_service.list(filter, pager)
puts results.inspect