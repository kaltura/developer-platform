
searchParams = KalturaESearchEntryParams()
searchParams.searchOperator = KalturaESearchEntryOperator()
searchParams.searchOperator.operator = KalturaESearchOperatorType.AND_OP
searchParams.searchOperator.searchItems = []
searchParams.searchOperator.searchItems[0] = KalturaESearchCaptionItem()
searchParams.searchOperator.searchItems[0].searchTerm = "asdf"
pager = KalturaPager()

result = client.elasticsearch.eSearch.searchEntry(searchParams, pager);
print(result);
