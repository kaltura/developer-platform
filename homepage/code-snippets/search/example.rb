search_params = KalturaESearchEntryParams.new()
search_params.search_operator = KalturaESearchEntryOperator.new()
search_params.search_operator.operator = KalturaESearchOperatorType::AND_OP
search_params.search_operator.search_items = []
search_params.search_operator.search_items[0] = KalturaESearchUnifiedItem.new()
search_params.search_operator.search_items[0].item_type = KalturaESearchItemType::PARTIAL
search_params.search_operator.search_items[0].search_term = "cat"

results = client.e_search_service.search_entry(search_params)
puts results.inspect
