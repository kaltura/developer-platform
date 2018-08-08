var filter = {objectType: "KalturaMediaEntryFilter"};
var pager = {objectType: "KalturaFilterPager"};

KalturaMediaService.list(filter, pager)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });