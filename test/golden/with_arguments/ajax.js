var filter = {};
filter.nameLike = "foobar";
filter.statusEqual = "2" /* KalturaEntryStatus.READY */;
filter.orderBy = "+createdAt" /* KalturaMediaEntryOrderBy.CREATED_AT_ASC */;
filter.advancedSearch = {};
filter.advancedSearch.value = "baz";
var pager = {};
pager.pageSize = 3;

KalturaMediaService.listAction(filter, pager)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });