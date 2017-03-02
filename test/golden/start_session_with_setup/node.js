var Kaltura = require('kaltura');
var config = new Kaltura.kc.KalturaConfiguration(1234);
config.serviceUrl = 'https://www.kaltura.com';
var client = new Kaltura.kc.KalturaClient(config);
client.session.start(function(ks) {
  if (ks.code && ks.message) {
    console.log('Error starting session', ks);
  } else {
    client.setKs(ks);
  }
}, "secretsauce",
"YOUR_USER_ID",
Kaltura.kc.enums.KalturaSessionType.ADMIN,
1234)