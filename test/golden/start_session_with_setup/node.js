var Kaltura = require('kaltura');
var config = new Kaltura.kc.KalturaConfiguration(123456);
config.serviceUrl = 'https://www.kaltura.com';
var client = new Kaltura.kc.KalturaClient(config);
client.session.start(function(ks) {
  if (ks.code && ks.message) {
    console.log('Error starting session', ks);
  } else {
    client.setKs(ks);
  }
}, "12341234123412341234",
"user@example.com",
Kaltura.kc.enums.KalturaSessionType.USER,
123456)