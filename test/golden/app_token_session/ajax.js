<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="/js/kaltura/KalturaFullClient.min.js"></script>

<script>
  var config = new KalturaConfiguration(12345);
  config.serviceUrl = 'https://www.kaltura.com';
  var client = new KalturaClient(config);
  // Note: this is meant only as a sample.
  // You should NEVER generate sessions on the client,
  // as this exposes your Admin Secret to users.
  // Instead, generate a session on the server and pass the
  // KS to the client.
  KalturaSessionService.start(
        "YOUR_KALTURA_SECRET",
        "YOUR_USER_ID",
        2,
        12345)
  .execute(client, function(success, ks) {
    if (!success || (ks.code && ks.message)) {
      console.log('Error starting session', success, ks);
    } else {
      client.setKs(ks);
      var id = "";
      var tokenHash = "";
      var userId = "YOUR_USER_ID";
      var type = 0 /* KalturaSessionType.USER */;
      var expiry = 0;
      var sessionPrivileges = "";

      KalturaAppTokenService.startSession(id, tokenHash, userId, type, expiry, sessionPrivileges)
        .execute(client, function(success, results) {
          if (!success || (results && results.code && results.message)) {
            console.log('Kaltura Error', success, results);
          } else {
            console.log('Kaltura Result', results);
          }
        });
    }
  });
</script>