let filter = new KalturaMediaEntryFilter();
filter.nameLike = "foobar";
filter.statusEqual = KalturaEntryStatus.ready;
filter.orderBy = KalturaMediaEntryOrderBy.createdAtAsc;
filter.advancedSearch = new KalturaAttributeCondition();
filter.advancedSearch.value = "baz";
let pager = new KalturaFilterPager();
pager.pageSize = 3;

this.kaltura.request(new MediaListAction({filter, pager}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })