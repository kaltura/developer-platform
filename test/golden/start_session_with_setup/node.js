var Kaltura = require('kaltura');
var config = new Kaltura.kc.KalturaConfiguration(2018872);
config.serviceUrl = 'https://www.kaltura.com';
var client = new Kaltura.kc.KalturaClient(config);
client.session.start(function(ks) {
  if (ks.code && ks.message) {
    console.log('Error starting session', ks);
  } else {
    client.setKs(ks);
  }
}, "81b50515b869628777617f454cdca7f5",
"bobby.brennan@gmail.com",
Kaltura.kc.enums.KalturaSessionType.USER,
2018872)