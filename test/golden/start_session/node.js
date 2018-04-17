let secret = "*******************";
let userId = "YOUR_USER_ID";
let type = kaltura.enums.SessionType.USER;
let partnerId = 0;
let expiry = 86400;
let privileges = "";

kaltura.services.session.start(secret, userId, type, partnerId, expiry, privileges)
.execute(client)
.then(result => {
    console.log(result);
});