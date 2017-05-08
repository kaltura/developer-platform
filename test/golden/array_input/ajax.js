<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="/js/kaltura/KalturaFullClient.min.js"></script>

<script>
  var config = new KalturaConfiguration();
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
        YOUR_PARTNER_ID)
  .execute(client, function(success, ks) {
    if (!success || (ks.code && ks.message)) {
      console.log('Error starting session', success, ks);
    } else {
      client.setKs(ks);
      var accessControlProfile = {objectType: "KalturaAccessControlProfile"};
      accessControlProfile.name = "foo";
      accessControlProfile.rules = [];
      accessControlProfile.rules[0] = {objectType: "KalturaRule"};
      accessControlProfile.rules[0].code = "thiscode";
      accessControlProfile.rules[0].contexts = [];
      accessControlProfile.rules[0].contexts[0] = {objectType: "KalturaContextTypeHolder"};
      accessControlProfile.rules[0].contexts[0].type = 1;
      accessControlProfile.rules[0].contexts[1] = {objectType: "KalturaContextTypeHolder"};
      accessControlProfile.rules[0].conditions = [];
      accessControlProfile.rules[0].conditions[0] = {objectType: "KalturaCondition"};
      accessControlProfile.rules[0].conditions[0].description = "cond 1";
      accessControlProfile.rules[0].conditions[1] = {objectType: "KalturaCondition"};
      accessControlProfile.rules[0].conditions[1].description = "cond 2";
      accessControlProfile.rules[1] = {objectType: "KalturaRule"};
      accessControlProfile.rules[1].code = "second code";

      KalturaAccessControlProfileService.add(accessControlProfile)
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