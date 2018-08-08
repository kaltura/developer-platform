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
      var filter = new KalturaMediaEntryFilter();
      var pager = new KalturaFilterPager();

      client.media.listAction(function(success, results) {
        if (!success || (results && results.code && results.message)) {
          console.log('Kaltura Error', success, results);
        } else {
          console.log('Kaltura Result', results);
        }
      },
      filter,
      pager);
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