let loginId = "";
let password = "*************";
let partnerId = 0;
let expiry = 86400;
let privileges = "*";
let otp = "";

client.request(new UserLoginByLoginIdAction({loginId, password, partnerId, expiry, privileges, otp}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })