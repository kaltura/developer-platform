var Kaltura = require('kaltura');
var config = new Kaltura.kc.KalturaConfiguration();
config.serviceUrl = 'https://www.kaltura.com';
var client = new Kaltura.kc.KalturaClient(config);
client.session.start(function(ks) {
  if (ks.code && ks.message) {
    console.log('Error starting session', ks);
  } else {
    client.setKs(ks);
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
  }
}, "YOUR_KALTURA_SECRET",
"YOUR_USER_ID",
Kaltura.kc.enums.KalturaSessionType.ADMIN,
YOUR_PARTNER_ID)