searchParams = KalturaESearchEntryParams()
searchParams.searchOperator = KalturaESearchEntryOperator()
searchParams.searchOperator.searchItems = []
searchParams.searchOperator.searchItems[0] = KalturaESearchUnifiedItem()
searchParams.searchOperator.searchItems[0].addHighlight = True
searchParams.searchOperator.searchItems[0].searchTerm = "cat"

result = client.elasticsearch.eSearch.searchEntry(searchParams);
print(result);
