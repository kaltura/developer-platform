const kaltura = require('kaltura-client');
const config = new kaltura.Configuration();
config.serviceUrl = 'https://www.kaltura.com';
const client = new kaltura.Client(config);
kaltura.services.session.start(
    "12341234123412341234",
    "user@example.com",
    kaltura.enums.SessionType.USER,
    123456)
.completion((success, ks) => {
    if (!success) throw new Error(ks.message);
    client.setKs(ks);
})
.execute(client);