let secret = "*******************";
let userId = "YOUR_USER_ID";
let type = KalturaSessionType.user;
let partnerId = 0;
let expiry = 86400;
let privileges = "";

this.kaltura.request(new SessionStartAction({secret, userId, type, partnerId, expiry, privileges}))
    .map(result => {
      console.log(result);
    },
    error => {
      throw error;
    })