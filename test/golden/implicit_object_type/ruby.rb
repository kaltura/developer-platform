
search_params = KalturaESearchParams.new()
search_params.search_operator = KalturaESearchOperator.new()
search_params.search_operator.operator = KalturaESearchOperatorType::AND_OP
search_params.search_operator.search_items = []
search_params.search_operator.search_items[0] = KalturaESearchCaptionItem.new()
search_params.search_operator.search_items[0].search_term = "asdf"
pager = KalturaPager.new()

results = client.e_search_service.search_entry(search_params, pager)
puts results.inspect
