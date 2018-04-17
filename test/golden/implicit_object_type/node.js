let searchParams = new kaltura.objects.ESearchEntryParams();
searchParams.searchOperator = new kaltura.objects.ESearchEntryOperator();
searchParams.searchOperator.operator = kaltura.enums.ESearchOperatorType.AND_OP;
searchParams.searchOperator.searchItems = [];
searchParams.searchOperator.searchItems[0] = new kaltura.objects.ESearchCaptionItem();
searchParams.searchOperator.searchItems[0].searchTerm = "asdf";
let pager = new kaltura.objects.Pager();

kaltura.services.eSearch.searchEntry(searchParams, pager)
.execute(client)
.then(result => {
    console.log(result);
});