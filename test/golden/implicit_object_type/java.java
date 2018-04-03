ESearchParams searchParams = new ESearchParams();
searchParams.setSearchOperator(new ESearchOperator());
searchParams.getSearchOperator().setOperator(ESearchOperatorType.AND_OP);
searchParams.getSearchOperator().setSearchItems(new ArrayList<ESearchBaseItem>(1));
searchParams.getSearchOperator().getSearchItems().set(0, new ESearchCaptionItem());
searchParams.getSearchOperator().getSearchItems().get(0).setSearchTerm("asdf");
Pager pager = new Pager();

SearchEntryESearchBuilder requestBuilder = ESearchService.searchentry(searchParams, pager)
    .setCompletion(new OnCompletion<Response<ESearchResponse>>() {
        @Override
        public void onComplete(Response<ESearchResponse> result) {
            System.out.println(result);
        }
    });