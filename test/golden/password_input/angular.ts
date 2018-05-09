let loginId = "";
let password = "*************";
let partnerId = 0;
let expiry = 86400;
let privileges = "*";
let otp = "";

this.kaltura.request(new UserLoginByLoginIdAction({loginId, password, partnerId, expiry, privileges, otp}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })