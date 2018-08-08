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
    let filter = new kaltura.objects.MetadataProfileFilter();
    let pager = new kaltura.objects.FilterPager();

    kaltura.services.metadataProfile.list(filter, pager)
    .execute(client)
    .then(result => {
        console.log(result);
    });
})
.execute(client);