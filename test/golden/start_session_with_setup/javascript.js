<script src="/js/kaltura/ox.ajast.js"></script>
<script src="/js/kaltura/webtoolkit.md5.js"></script>
<script src="/js/kaltura/KalturaClientBase.js"></script>
<script src="/js/kaltura/KalturaTypes.js"></script>
<script src="/js/kaltura/KalturaVO.js"></script>
<script src="/js/kaltura/KalturaServices.js"></script>
<script src="/js/kaltura/KalturaClient.js"></script>

<script>
  var config = new KalturaConfiguration(2018872);
  config.serviceUrl = 'https://www.kaltura.com';
  var client = new KalturaClient(config);
  client.session.start(function(success, ks) {
    if (!success || (ks.code && ks.message)) {
      console.log('Error starting session', success, ks);
      $('#ErrorMessage').text(ks.message || 'Unknown Error').show();
    } else {
      window.ks = ks;
      client.setKs(ks);
    }
    // Note: this is meant only as a sample.
    // You should NEVER generate sessions on the client,
    // as this exposes your Admin Secret to users.
    // Instead, generate a session on the server and pass the
    // KS to the client.
  }, "81b50515b869628777617f454cdca7f5",
  "bobby.brennan@gmail.com",
  KalturaSessionType.USER,
  2018872)
</script>