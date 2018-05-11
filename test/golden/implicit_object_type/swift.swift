var searchParams = ESearchEntryParams()
searchParams.searchOperator = ESearchEntryOperator()
searchParams.searchOperator.operator = ESearchOperatorType.AND_OP
searchParams.searchOperator.searchItems = []
searchParams.searchOperator.searchItems[0] = ESearchCaptionItem()
searchParams.searchOperator.searchItems[0].searchTerm = "asdf"
var pager = Pager()

var requestBuilder = ESearchService.searchEntry(searchParams: searchParams, pager: pager)
requestBuilder.set(completion: {(result: ESearchResponse?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))