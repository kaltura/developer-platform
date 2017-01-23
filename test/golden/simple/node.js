var filter = new Kaltura.kc.objects.KalturaMediaEntryFilter();
var pager = new Kaltura.kc.objects.KalturaFilterPager();

client.media.listAction(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
filter,
pager);