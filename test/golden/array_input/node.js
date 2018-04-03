var Kaltura = require('kaltura');
var config = new Kaltura.kc.KalturaConfiguration();
config.serviceUrl = 'https://www.kaltura.com';
var client = new Kaltura.kc.KalturaClient(config);
client.session.start(function(ks) {
  if (ks.code && ks.message) {
    console.log('Error starting session', ks);
  } else {
    client.setKs(ks);
    var accessControlProfile = new Kaltura.kc.objects.KalturaAccessControlProfile();
    accessControlProfile.name = "foo";
    accessControlProfile.rules = [];
    accessControlProfile.rules[0] = new Kaltura.kc.objects.KalturaRule();
    accessControlProfile.rules[0].code = "thiscode";
    accessControlProfile.rules[0].contexts = [];
    accessControlProfile.rules[0].contexts[0] = new Kaltura.kc.objects.KalturaContextTypeHolder();
    accessControlProfile.rules[0].contexts[0].type = Kaltura.kc.enums.KalturaContextType.PLAY;
    accessControlProfile.rules[0].contexts[1] = new Kaltura.kc.objects.KalturaContextTypeHolder();
    accessControlProfile.rules[0].conditions = [];
    accessControlProfile.rules[0].conditions[0] = new Kaltura.kc.objects.KalturaDeliveryProfileCondition();
    accessControlProfile.rules[0].conditions[0].description = "cond 1";
    accessControlProfile.rules[0].conditions[1] = new Kaltura.kc.objects.KalturaDeliveryProfileCondition();
    accessControlProfile.rules[0].conditions[1].description = "cond 2";
    accessControlProfile.rules[1] = new Kaltura.kc.objects.KalturaRule();
    accessControlProfile.rules[1].code = "second code";

    client.accessControlProfile.add(function(results) {
      if (results && results.code && results.message) {
        console.log('Kaltura Error', results);
      } else {
        console.log('Kaltura Result', results);
      }
    },
    accessControlProfile);
  }
}, "YOUR_KALTURA_SECRET",
"YOUR_USER_ID",
Kaltura.kc.enums.KalturaSessionType.ADMIN,
YOUR_PARTNER_ID)