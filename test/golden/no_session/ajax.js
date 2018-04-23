<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="/js/kaltura/KalturaFullClient.min.js"></script>

<script>
  var config = new KalturaConfiguration();
  config.serviceUrl = 'https://www.kaltura.com';
  var client = new KalturaClient(config);
  var loginId = "foobar";
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
</script>