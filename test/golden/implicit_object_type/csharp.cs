ESearchParams searchParams = new ESearchParams();
searchParams.SearchOperator = new ESearchOperator();
searchParams.SearchOperator.Operator = ESearchOperatorType.AND_OP;
searchParams.SearchOperator.SearchItems = new List<ESearchBaseItem>();
searchParams.SearchOperator.SearchItems.Add(new ESearchCaptionItem());
searchParams.SearchOperator.SearchItems[0].SearchTerm = "asdf";
Pager pager = new Pager();

OnCompletedHandler<ESearchResponse> handler = new OnCompletedHandler<ESearchResponse>(
      (ESearchResponse result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
ESearchService.SearchEntry(searchParams, pager)
   .SetCompletion(handler)
   .Execute(client);