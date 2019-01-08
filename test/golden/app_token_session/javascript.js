<script src="/js/kaltura/ox.ajast.js"></script>
<script src="/js/kaltura/webtoolkit.md5.js"></script>
<script src="/js/kaltura/KalturaClientBase.js"></script>
<script src="/js/kaltura/KalturaTypes.js"></script>
<script src="/js/kaltura/KalturaVO.js"></script>
<script src="/js/kaltura/KalturaServices.js"></script>
<script src="/js/kaltura/KalturaClient.js"></script>

<script>
  var config = new KalturaConfiguration(12345);
  config.serviceUrl = 'https://www.kaltura.com';
  var client = new KalturaClient(config);
  client.session.start(function(success, ks) {
    if (!success || (ks.code && ks.message)) {
      console.log('Error starting session', success, ks);
      $('#ErrorMessage').text(ks.message || 'Unknown Error').show();
    } else {
      window.ks = ks;
      client.setKs(ks);
      var id = "";
      var tokenHash = "";
      var userId = "YOUR_USER_ID";
      var type = KalturaSessionType.USER;
      var expiry = 0;
      var sessionPrivileges = "";

      client.appToken.startSession(function(success, results) {
        if (!success || (results && results.code && results.message)) {
          console.log('Kaltura Error', success, results);
        } else {
          console.log('Kaltura Result', results);
        }
      },
      id,
      tokenHash,
      userId,
      type,
      expiry,
      sessionPrivileges);
    }
    // Note: this is meant only as a sample.
    // You should NEVER generate sessions on the client,
    // as this exposes your Admin Secret to users.
    // Instead, generate a session on the server and pass the
    // KS to the client.
  }, "YOUR_KALTURA_SECRET",
  "YOUR_USER_ID",
  KalturaSessionType.ADMIN,
  12345)
</script>