let loginId = "";
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