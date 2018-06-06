let secret = "*******************";
let userId = "YOUR_USER_ID";
let type = KalturaSessionType.user;
let partnerId = 0;
let expiry = 86400;
let privileges = "";

client.request(new SessionStartAction({secret, userId, type, partnerId, expiry, privileges}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })