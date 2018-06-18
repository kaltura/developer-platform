<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="/js/kaltura/KalturaFullClient.min.js"></script>

<script>
  var config = new KalturaConfiguration(123456);
  config.serviceUrl = 'https://www.kaltura.com';
  var client = new KalturaClient(config);
  var secret = "********************";
  var userId = "user@example.com";
  var type = 0 /* KalturaSessionType.USER */;
  var partnerId = 123456;
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
</script>