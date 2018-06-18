let searchParams = new kaltura.objects.ESearchEntryParams();
searchParams.searchOperator = new kaltura.objects.ESearchEntryOperator();
searchParams.searchOperator.searchItems = [];
searchParams.searchOperator.searchItems[0] = new kaltura.objects.ESearchUnifiedItem();
searchParams.searchOperator.searchItems[0].addHighlight = true;
searchParams.searchOperator.searchItems[0].searchTerm = "cat";

kaltura.services.eSearch.searchEntry(searchParams)
.execute(client)
.then(result => {
    console.log(result);
});
