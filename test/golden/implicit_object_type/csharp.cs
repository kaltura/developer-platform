ESearchEntryParams searchParams = new ESearchEntryParams();
searchParams.SearchOperator = new ESearchEntryOperator();
searchParams.SearchOperator.Operator = ESearchOperatorType.AND_OP;
searchParams.SearchOperator.SearchItems = new List<ESearchEntryBaseItem>();
searchParams.SearchOperator.SearchItems.Add(new ESearchCaptionItem());
searchParams.SearchOperator.SearchItems[0].SearchTerm = "asdf";
Pager pager = new Pager();

OnCompletedHandler<ESearchEntryResponse> handler = new OnCompletedHandler<ESearchEntryResponse>(
      (ESearchEntryResponse result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
ESearchService.SearchEntry(searchParams, pager)
   .SetCompletion(handler)
   .Execute(client);