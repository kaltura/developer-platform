let secret = "a1b2c3d4e5f6g7h8i9j0";
let userId = "you@email.com";
let type = kaltura.enums.SessionType.ADMIN;
let partnerId = 00000;
let expiry = 86400;
let privileges = "";

kaltura.services.session.start(secret, userId, type, partnerId, expiry, privileges)
.execute(client)
.then(result => {
    console.log(result);
});
