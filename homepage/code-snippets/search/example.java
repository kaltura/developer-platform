ESearchEntryParams searchParams = new ESearchEntryParams();
searchParams.setSearchOperator(new ESearchEntryOperator());
searchParams.getSearchOperator().setSearchItems(new ArrayList<ESearchEntryBaseItem>(1));
searchParams.getSearchOperator().getSearchItems().set(0, new ESearchUnifiedItem());
searchParams.getSearchOperator().getSearchItems().get(0).setAddHighlight(true);
searchParams.getSearchOperator().getSearchItems().get(0).setSearchTerm("cat");

SearchEntryESearchBuilder requestBuilder = ESearchService.searchentry(searchParams);
