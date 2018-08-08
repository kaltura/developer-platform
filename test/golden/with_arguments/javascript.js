var filter = new KalturaMediaEntryFilter();
filter.nameLike = "foobar";
filter.statusEqual = KalturaEntryStatus.READY;
filter.orderBy = KalturaMediaEntryOrderBy.CREATED_AT_ASC;
filter.advancedSearch = new KalturaAttributeCondition();
filter.advancedSearch.value = "baz";
var pager = new KalturaFilterPager();
pager.pageSize = 3;

client.media.list(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
filter,
pager);