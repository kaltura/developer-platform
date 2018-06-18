ESearchEntryParams searchParams = new ESearchEntryParams();
searchParams.SearchOperator = new ESearchEntryOperator();
searchParams.SearchOperator.Operator = ESearchOperatorType.AND_OP;
searchParams.SearchOperator.SearchItems = new List<ESearchEntryBaseItem>();
searchParams.SearchOperator.SearchItems.Add(new ESearchUnifiedItem());
searchParams.SearchOperator.SearchItems[0].ItemType = ESearchItemType.PARTIAL;
searchParams.SearchOperator.SearchItems[0].SearchTerm = "cat";

OnCompletedHandler<ESearchResponse> handler = new OnCompletedHandler<ESearchResponse>(
  (ESearchResponse result, Exception e) =>
  {
    done = true; });
ESearchService.SearchEntry(searchParams)
.SetCompletion(handler)
.Execute(client);
