<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="/js/kaltura/KalturaFullClient.min.js"></script>

<script>
  var config = new KalturaConfiguration(1234);
  config.serviceUrl = 'https://www.kaltura.com';
  var client = new KalturaClient(config);
  // Note: this is meant only as a sample.
  // You should NEVER generate sessions on the client,
  // as this exposes your Admin Secret to users.
  // Instead, generate a session on the server and pass the
  // KS to the client.
  KalturaSessionService.start(
        "secretsauce",
        "YOUR_USER_ID",
        2,
        1234)
  .execute(client, function(success, ks) {
    if (!success || (ks.code && ks.message)) {
      console.log('Error starting session', success, ks);
    } else {
      client.setKs(ks);
    }
  });
</script>