var filter = new Kaltura.kc.objects.KalturaMediaEntryFilter();
filter.nameLike = "foobar";
filter.statusEqual = Kaltura.kc.enums.KalturaEntryStatus.READY;
filter.advancedSearch = new Kaltura.kc.objects.KalturaAttributeCondition();
filter.advancedSearch.value = "baz";
var pager = new Kaltura.kc.objects.KalturaFilterPager();
pager.pageSize = 3;

client.media.listAction(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
filter,
pager);