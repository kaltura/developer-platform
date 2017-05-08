
filter = KalturaAssetHistoryFilter.new()
filter.asset_id_in = "id_in"
filter.order_by = 0
pager = KalturaFilterPager.new()
pager.page_index = 3
pager.page_size = 7

results = client.asset_history_service.list(filter, pager)
puts results.inspect
