<script src="/js/kaltura/ox.ajast.js"></script>
<script src="/js/kaltura/webtoolkit.md5.js"></script>
<script src="/js/kaltura/KalturaClientBase.js"></script>
<script src="/js/kaltura/KalturaTypes.js"></script>
<script src="/js/kaltura/KalturaVO.js"></script>
<script src="/js/kaltura/KalturaServices.js"></script>
<script src="/js/kaltura/KalturaClient.js"></script>

<script>
  var config = new KalturaConfiguration();
  config.serviceUrl = 'https://www.kaltura.com';
  var client = new KalturaClient(config);
  client.session.start(function(success, ks) {
    if (!success || (ks.code && ks.message)) {
      console.log('Error starting session', success, ks);
      $('#ErrorMessage').text(ks.message || 'Unknown Error').show();
    } else {
      window.ks = ks;
      client.setKs(ks);
      var accessControlProfile = new KalturaAccessControlProfile();
      accessControlProfile.name = "foo";
      accessControlProfile.rules = [];
      accessControlProfile.rules[0] = new KalturaRule();
      accessControlProfile.rules[0].code = "thiscode";
      accessControlProfile.rules[0].contexts = [];
      accessControlProfile.rules[0].contexts[0] = new KalturaContextTypeHolder();
      accessControlProfile.rules[0].contexts[0].type = KalturaContextType.PLAY;
      accessControlProfile.rules[0].contexts[1] = new KalturaContextTypeHolder();
      accessControlProfile.rules[0].conditions = [];
      accessControlProfile.rules[0].conditions[0] = new KalturaDeliveryProfileCondition();
      accessControlProfile.rules[0].conditions[0].description = "cond 1";
      accessControlProfile.rules[0].conditions[1] = new KalturaDeliveryProfileCondition();
      accessControlProfile.rules[0].conditions[1].description = "cond 2";
      accessControlProfile.rules[1] = new KalturaRule();
      accessControlProfile.rules[1].code = "second code";

      client.accessControlProfile.add(function(success, results) {
        if (!success || (results && results.code && results.message)) {
          console.log('Kaltura Error', success, results);
        } else {
          console.log('Kaltura Result', results);
        }
      },
      accessControlProfile);
    }
    // Note: this is meant only as a sample.
    // You should NEVER generate sessions on the client,
    // as this exposes your Admin Secret to users.
    // Instead, generate a session on the server and pass the
    // KS to the client.
  }, "YOUR_KALTURA_SECRET",
  "YOUR_USER_ID",
  KalturaSessionType.ADMIN,
  YOUR_PARTNER_ID)
</script>