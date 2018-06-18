const kaltura = require('kaltura-client');
const config = new kaltura.Configuration();
config.serviceUrl = 'https://www.kaltura.com';
const client = new kaltura.Client(config);
let secret = "********************";
let userId = "user@example.com";
let type = kaltura.enums.SessionType.USER;
let partnerId = 123456;
let expiry = 86400;
let privileges = "";

kaltura.services.session.start(secret, userId, type, partnerId, expiry, privileges)
.execute(client)
.then(result => {
    console.log(result);
});