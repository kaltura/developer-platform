KalturaESearchParams searchParams = new KalturaESearchParams();
searchParams.searchOperator = new KalturaESearchOperator();
searchParams.searchOperator.operator = KalturaESearchOperatorType.AND_OP;
searchParams.searchOperator.searchItems = new ArrayList<KalturaESearchBaseItem>(1);
searchParams.searchOperator.searchItems.set(0, new KalturaESearchCaptionItem());
searchParams.searchOperator.searchItems.get(0).searchTerm = "asdf";
KalturaPager pager = new KalturaPager();

Object result = client.getESearchService().searchEntry(searchParams, pager);
System.out.println(result);