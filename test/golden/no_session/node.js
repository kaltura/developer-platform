const kaltura = require('kaltura-client');
const config = new kaltura.Configuration();
config.serviceUrl = 'https://www.kaltura.com';
const client = new kaltura.Client(config);
let loginId = "foobar";
let password = "*************";
let partnerId = 0;
let expiry = 86400;
let privileges = "*";
let otp = "";

kaltura.services.user.loginByLoginId(loginId, password, partnerId, expiry, privileges, otp)
.execute(client)
.then(result => {
    console.log(result);
});