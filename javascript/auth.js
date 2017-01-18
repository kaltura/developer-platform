(function() {
  var COOKIE_TIMEOUT_MS = 900000;
  var STORAGE_KEY = 'LUCYBOT_RECIPE_CREDS';
  var user = {};

  var LOGGED_IN_HTML = '<li class="navbar-link"><a onclick="setKalturaUser()">Sign Out</a></li>';
  var LOGGED_OUT_HTML =
          '<li class="navbar-link">'
        +   '<a href="https://vpaas.kaltura.com/register?utm_source=developertools&utm_campaign=login&utm_medium=website">Sign Up</a>'
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
      window.jquery('#KalturaAuthLinks').html(LOGGED_IN_HTML);
      window.jquery('#KalturaSidebar .not-logged-in').hide();
      window.jquery('#KalturaSidebar .logged-in').show();
    }
  }

  var setUser = window.setKalturaUser = function(creds) {
    updateViewsForLogin(!!creds);
    if (!creds) {
      user = {};
      if (window.secretService) window.secretService.clearSecrets();
      setCookie();
      return;
    } else {
      window.jquery('#KalturaAuthLinks').html(LOGGED_IN_HTML);
    }
    user = creds;
    window.setUpKalturaClient(creds, function(err, ks) {
      user.ks = creds.ks = ks;
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
        setUser(user);
        return;
      }
    }
    if (ksMatch) {
      setUser({ks: ksMatch});
    } else {
      setUser();
    }
  };

  window.lucybot.startLogin = function() {
    window.jquery('#KalturaSignInModal').modal('show');
  }

  window.jquery(document).ready(function() {
    maybeContinueSession();
  })

  window.startKalturaLogin = function() {
    window.jquery('#KalturaSignInModal #KalturaSignInButton').html('<i class="fa fa-spin fa-refresh"></i>').attr('disabled', 'disabled');
    window.jquery('#KalturaSignInModal .alert-danger').hide();
    user.email = window.jquery('input[name="KalturaEmail"]').val();
    user.password = window.jquery('input[name="KalturaPassword"]').val();
    mixpanel.track('login_submit', {
      email: user.email,
    });
    window.jquery.ajax({
      url: '/auth/login',
      method: 'POST',
      data: JSON.stringify({email: user.email, password: user.password}),
      headers: {'Content-Type': 'application/json'},
    })
    .done(function(response) {
      window.jquery('#KalturaSignInModal').modal('hide');
      window.jquery('#KalturaPartnerIDModal .kaltura-loading').hide();
      window.jquery('#KalturaPartnerIDModal').modal('show');
      mixpanel.identify(user.email);
      mixpanel.people.set({
        '$email': user.email,
      })
      mixpanel.track('login_success', {
        email: user.email,
      });
      var partnerChoicesHTML = response.map(function(partner) {
        return '<li><a onclick="setKalturaPartnerID(' + partner.id + ')">' + partner.name + ' (' + partner.id + ')</a></li>'
      }).join('\n');
      window.jquery('#KalturaPartnerIDModal').find('ul.dropdown-menu').html(partnerChoicesHTML);
    })
    .fail(function(xhr) {
      mixpanel.track('login_error', {
        email: user.email,
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
      setUser(creds);
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
