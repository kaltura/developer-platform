var secret = "*******************";
var userId = "YOUR_USER_ID";
var type = 0 /* KalturaSessionType.USER */;
var partnerId = 0;
var expiry = 86400;
var privileges = "";

KalturaSessionService.start(secret, userId, type, partnerId, expiry, privileges)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });