const kaltura = require('kaltura-client');
const config = new kaltura.Configuration();
config.serviceUrl = 'https://www.kaltura.com';
const client = new kaltura.Client(config);
kaltura.services.session.start(
    "YOUR_KALTURA_SECRET",
    "YOUR_USER_ID",
    kaltura.enums.SessionType.ADMIN,
    12345)
.completion((success, ks) => {
    if (!success) throw new Error(ks.message);
    client.setKs(ks);
    let id = "";
    let tokenHash = "";
    let userId = "YOUR_USER_ID";
    let type = kaltura.enums.SessionType.USER;
    let expiry = 0;
    let sessionPrivileges = "";

    kaltura.services.appToken.startSession(id, tokenHash, userId, type, expiry, sessionPrivileges)
    .execute(client)
    .then(result => {
        console.log(result);
    });
})
.execute(client);