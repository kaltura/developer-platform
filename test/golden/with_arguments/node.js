let filter = new kaltura.objects.MediaEntryFilter();
filter.nameLike = "foobar";
filter.statusEqual = kaltura.enums.EntryStatus.READY;
filter.orderBy = kaltura.enums.MediaEntryOrderBy.CREATED_AT_ASC;
filter.advancedSearch = new kaltura.objects.AttributeCondition();
filter.advancedSearch.value = "baz";
let pager = new kaltura.objects.FilterPager();
pager.pageSize = 3;

kaltura.services.media.list(filter, pager)
.execute(client)
.then(result => {
    console.log(result);
});