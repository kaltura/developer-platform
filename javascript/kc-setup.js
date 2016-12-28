window.KC = null;

function setKalturaSession(ks, cb) {
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
}

window.setUpKalturaClient = function(creds, cb) {
  window.jquery('#KalturaSidebar .partnerId').text(creds.partnerId || '');
  window.jquery('#KalturaSidebar .userSecret').text(creds.userSecret || '');
  window.jquery('#KalturaSidebar .adminSecret').text(creds.secret || '');
  var config = new KalturaConfiguration(creds.partnerId);
  config.serviceUrl = "https://www.kaltura.com/";
  window.KC = new KalturaClient(config);
  function checkFailure(success, data) {
    if (!success || (data.code && data.message)) {
      var trackObj = data || {};
      console.log('Kaltura Error', success, data);
      mixpanel.track('kaltura_session_error', trackObj);
      cb(data);
      return true;
    }
  }
  if (creds.ks && creds.partnerId) {
    return setKalturaSession(creds.ks, cb);
  } else if (creds.ks) {
    return setKalturaSession(creds.ks, cb);
    // FIXME: retrieve session details
    /*
    KC.setKs(creds.ks);
    KC.session.get(function(success, sessionDetails) {
      if (checkFailure(success, sessionDetails)) return;
      creds.partnerId = sessionDetails.partnerId;
      KC.partner.getSecrets(function(success, secrets) {
        if (checkFailure(success, secrets)) return;
        creds.secret = secrets.adminSecret;
        creds.userSecret = secrets.secret;
        console.log('gathered', creds);
        setKalturaSession(creds.ks, cb);
      }, creds.partnerId)
    }, creds.ks)
    */
  } else {
    KC.session.start(function(success, ks) {
      if (checkFailure(success, ks)) return;
      mixpanel.track('kaltura_session', {
        partnerId: creds.partnerId
      });
      setKalturaSession(ks, cb);
    }, creds.secret,
    creds.userId,
    KalturaSessionType.ADMIN,
    creds.partnerId);
  }
}

