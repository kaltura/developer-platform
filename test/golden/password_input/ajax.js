var loginId = "";
var password = "*************";
var partnerId = 0;
var expiry = 86400;
var privileges = "*";
var otp = "";

KalturaUserService.loginByLoginId(loginId, password, partnerId, expiry, privileges, otp)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });