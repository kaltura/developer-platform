const kaltura = require('kaltura-client');
const config = new kaltura.Configuration();
config.serviceUrl = 'https://www.kaltura.com';
const client = new kaltura.Client(config);
kaltura.services.session.start(
    "YOUR_KALTURA_SECRET",
    "YOUR_USER_ID",
    kaltura.enums.SessionType.ADMIN,
    YOUR_PARTNER_ID)
.completion((success, ks) => {
    if (!success) throw new Error(ks.message);
    client.setKs(ks);
    let accessControlProfile = new kaltura.objects.AccessControlProfile();
    accessControlProfile.name = "foo";
    accessControlProfile.rules = [];
    accessControlProfile.rules[0] = new kaltura.objects.Rule();
    accessControlProfile.rules[0].code = "thiscode";
    accessControlProfile.rules[0].contexts = [];
    accessControlProfile.rules[0].contexts[0] = new kaltura.objects.ContextTypeHolder();
    accessControlProfile.rules[0].contexts[0].type = kaltura.enums.ContextType.PLAY;
    accessControlProfile.rules[0].contexts[1] = new kaltura.objects.ContextTypeHolder();
    accessControlProfile.rules[0].conditions = [];
    accessControlProfile.rules[0].conditions[0] = new kaltura.objects.DeliveryProfileCondition();
    accessControlProfile.rules[0].conditions[0].description = "cond 1";
    accessControlProfile.rules[0].conditions[1] = new kaltura.objects.DeliveryProfileCondition();
    accessControlProfile.rules[0].conditions[1].description = "cond 2";
    accessControlProfile.rules[1] = new kaltura.objects.Rule();
    accessControlProfile.rules[1].code = "second code";

    kaltura.services.accessControlProfile.add(accessControlProfile)
    .execute(client)
    .then(result => {
        console.log(result);
    });
})
.execute(client);