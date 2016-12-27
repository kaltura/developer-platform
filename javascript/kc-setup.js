window.KC = null;
window.onAuthorization = function(creds, cb) {
  if (!creds.partnerId || !creds.secret) return cb();
  if (creds.ks && window.KC) return cb();
  window.jquery('#KalturaSidebar .partnerId').text(creds.partnerId);
  window.jquery('#KalturaSidebar .adminSecret').text(creds.secret);
  var config = new KalturaConfiguration(creds.partnerId);
  config.serviceUrl = "https://www.kaltura.com/";
  window.KC = new KalturaClient(config);
  KC.session.start(function(success, ks) {
    if (!success || (ks.code && ks.message)) {
      var trackObj = ks || {};
      console.log('fail', trackObj);
      mixpanel.track('kaltura_session_error', trackObj);
      cb(ks);
      return console.log('Kaltura Error', success, ks);
    }
    mixpanel.track('kaltura_session', {
      partnerId: creds.partnerId
    });
    KC.setKs(ks);
    var filter = new KalturaUiConfFilter();
    filter.objTypeEqual = KalturaUiConfObjType.PLAYER;
    KC.uiConf.listAction(function(success, results) {
      var uiConfs = results.objects || [];
      if (window.RECIPE_NAME === 'captions') {
        uiConfs = uiConfs.filter(function(uiConf) {
          return uiConf.confFile.indexOf('Plugin id="closedCaptions') !== -1;
        })
      }
      uiConfs = uiConfs.filter(function(uiConf) {
        return uiConf.tags &&
               uiConf.tags.indexOf('html5studio') !== -1 &&
               (uiConf.html5Url || '').indexOf('/v2') !== -1;
      })
      if (uiConfs.length === 0 && window.RECIPE_NAME) {
        if (RECIPE_NAME === 'dynamic_thumbnails') {
          alert('This recipe requires an HTML5 enabled uiConf. Please use the KMC to create one.');
        } else if (RECIPE_NAME === 'captions') {
          alert('This recipe requires a uiConf with captions enabled. Please use the KMC to create one.');
        }
        uiConfs = results.objects || [];
      }
      if (uiConfs.length) {
        //$('#APICall').scope().globalAnswers['uiConf'] = uiConfs[0].id;
        // FIXME: set uiConf
      }
      cb(null, ks);
    }, filter);
  }, creds.secret,
  creds.userId,
  KalturaSessionType.ADMIN,
  creds.partnerId);
}

