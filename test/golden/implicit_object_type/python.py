
search_params = KalturaESearchEntryParams()
search_params.searchOperator = KalturaESearchEntryOperator()
search_params.searchOperator.operator = KalturaESearchOperatorType.AND_OP
search_params.searchOperator.searchItems = []
search_params.searchOperator.searchItems.append(KalturaESearchCaptionItem())
search_params.searchOperator.searchItems[0].searchTerm = "asdf"
pager = KalturaPager()

result = client.elasticSearch.eSearch.searchEntry(search_params, pager)
print(result)
