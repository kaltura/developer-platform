(function() {
  var COOKIE_TIMEOUT_MS = 900000;
  var STORAGE_KEY = 'LUCYBOT_RECIPE_CREDS';
  var user = {};

  function loggedInTemplate() {
    return '<li class="navbar-link"><a onclick="setKalturaUser()">' +
        '<span class="hidden-md">' + (user.userId || '') + '&nbsp;' + '</span>' +
        '<span class="text-primary">[sign out]</span></a></li>';
  }

  var LOGGED_OUT_HTML =
          '<li class="navbar-link">'
        +   '<a href="https://vpaas.kaltura.com/register.php?utm_source=developertools&utm_campaign=login&utm_medium=website">Sign Up</a>'
        + '</li>'
        + '<li class="navbar-link"><a onclick="lucybot.startLogin()">Sign In</a></li>';

  var setCookie = function(creds) {
    var val = creds ? encodeURIComponent(JSON.stringify(creds)) : '';
    var now = new Date();
    var expires = new Date(now.getTime() + COOKIE_TIMEOUT_MS);
    var cookie = STORAGE_KEY + '=' + val + '; expires=' + expires.toUTCString() + '; Path=/';
    document.cookie = cookie;
  }

  var updateViewsForLogin = function(loggedIn) {
    window.jquery('#KalturaSignInModal .alert-danger').hide();
    if (!loggedIn) {
      window.jquery('#KalturaAuthLinks').html(LOGGED_OUT_HTML);
      window.jquery('#KalturaSidebar .logged-in').hide();
      window.jquery('#KalturaSidebar .not-logged-in').show();
    } else {
      window.jquery('#KalturaAuthLinks').html(loggedInTemplate());
      window.jquery('#KalturaSidebar .not-logged-in').hide();
      window.jquery('#KalturaSidebar .logged-in').show();
    }
  }

  window.setKalturaUser = function(creds) {
    if (!creds) {
      user = {};
      updateViewsForLogin(false);
      if (window.secretService) window.secretService.clearSecrets();
      setCookie();
      return;
    }
    user = creds;
    window.setUpKalturaClient(creds, function(err, ks) {
      if (err) {
        setKalturaUser();
        window.jquery('#KalturaSignInModal').modal('show');
        window.jquery('#KalturaSignInModal .alert-danger').show();
        return;
      }
      user.ks = creds.ks = ks;
      if (user.userId) window.JacoRecorder.identify(user.userId);
      updateViewsForLogin(true);
      setCookie(creds);
      if (window.secretService) window.secretService.setSecrets(creds);
    })
  }

  var maybeContinueSession = function() {
    var ksMatch = window.location.href.substring(window.location.href.indexOf('?')).match(new RegExp('[?&]ks=([^&]+)'));
    if (ksMatch) ksMatch = window.decodeURIComponent(ksMatch[1]);
    var cookies = document.cookie.split(';').map(function(c) {return c.trim()});
    var credCookie = cookies.filter(function(c) {
      return c.indexOf(STORAGE_KEY) === 0;
    })[0];
    if (credCookie) {
      var stored = credCookie.substring(STORAGE_KEY.length + 1) || '{}';
      var user;
      try {
        user = JSON.parse(decodeURIComponent(stored));
      } catch(e) {}
      if (user && typeof user === 'object' && Object.keys(user).length) {
        if (ksMatch) user.ks = ksMatch;
        setKalturaUser(user);
        return;
      }
    }
    if (ksMatch) {
      setKalturaUser({ks: ksMatch});
    } else {
      setKalturaUser();
    }
  };

  window.lucybot.startLogin = function() {
    window.jquery('#KalturaSignInModal').modal('show');
  }

  window.jquery(document).ready(function() {
    maybeContinueSession();
  })

  window.startKalturaLogin = function() {
    window.jquery('#KalturaSignInModal .alert-danger').hide();
    var creds = {}
    creds.ks = window.jquery('input[name="KalturaSession"]').val();
    if (creds.ks) {
      window.jquery('#KalturaSignInModal').modal('hide');
      setKalturaUser(creds);
      return;
    }

    window.jquery('#KalturaSignInModal #KalturaSignInButton').html('<i class="fa fa-spin fa-refresh"></i>').attr('disabled', 'disabled');
    creds.email = window.jquery('input[name="KalturaEmail"]').val();
    creds.password = window.jquery('input[name="KalturaPassword"]').val();

    mixpanel.track('login_submit', {
      email: creds.email,
    });
    window.jquery.ajax({
      url: '/auth/login',
      method: 'POST',
      data: JSON.stringify({email: creds.email, password: creds.password}),
      headers: {'Content-Type': 'application/json'},
    })
    .done(function(response) {
      window.jquery('#KalturaSignInModal').modal('hide');
      window.jquery('#KalturaPartnerIDModal .kaltura-loading').hide();
      window.jquery('#KalturaPartnerIDModal').modal('show');
      mixpanel.identify(creds.email);
      mixpanel.people.set({
        '$email': creds.email,
      })
      mixpanel.track('login_success', {
        email: creds.email,
      });
      var partnerChoicesHTML = response.map(function(partner) {
        return '<li><a onclick="setKalturaPartnerID(' + partner.id + ')">' + partner.name + ' (' + partner.id + ')</a></li>'
      }).join('\n');
      window.jquery('#KalturaPartnerIDModal').find('ul.dropdown-menu').html(partnerChoicesHTML);
      user = creds;
    })
    .fail(function(xhr) {
      mixpanel.track('login_error', {
        email: creds.email,
        error: xhr.responseText,
      })
      window.jquery('#KalturaSignInModal .alert-danger').show();
    })
    .always(function() {
      window.jquery('#KalturaSignInModal #KalturaSignInButton').html('Log In').removeAttr('disabled');
    })
  }

  window.setKalturaPartnerID = function(id) {
    user.partnerId = id;
    window.jquery('#KalturaPartnerIDModal .kaltura-loading').show();
    window.jquery.ajax({
      url: '/auth/selectPartner',
      method: 'POST',
      data: JSON.stringify(user),
      headers: {'Content-Type': 'application/json'},
    })
    .done(function(data) {
      var creds = {
        secret: data.adminSecret,
        userSecret: data.secret,
        userId: user.email,
        partnerId: user.partnerId,
      }
      setKalturaUser(creds);
      window.jquery('#KalturaPartnerIDModal').modal('hide');
    })
    .fail(function(xhr) {
      mixpanel.track('login_error', {
        partnerId: user.partnerId,
        email: user.email,
        error: xhr.responseText,
      })
      window.jquery('#KalturaPartnerIDModal').modal('hide');
      window.jquery('#KalturaSignInModal').modal('show');
      window.jquery('#KalturaSignInModal .alert-danger').show();
    })
    .always(function() {
      window.jquery('#KalturaPartnerIDModal .kaltura-loading').hide();
    })
  }
})();
