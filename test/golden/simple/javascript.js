var filter = new KalturaMediaEntryFilter();
var pager = new KalturaFilterPager();

client.media.listAction(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
filter,
pager);