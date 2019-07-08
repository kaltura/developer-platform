"use strict";

var Router = module.exports = require('express').Router();

var Request = require('request');
var jwt = require('jsonwebtoken');

var kaltura = require('kaltura-client');

const LOGIN_EXPIRY = 86400;
const LOGIN_PERMISSIONS = "disableentitlement,appid:developerportal-developer.kaltura.com";

// Dummy credentials to initialize the client.
var config = {
  partner_id: 102,
  admin_secret: '92ed864443d6cfadee508167016ea309',
  user_id: null,
  service_url: process.env.KALTURA_SERVICE_URL || 'https://www.kaltura.com/',
}

Router.use(require('body-parser').json());

Router.post('/selectPartner', function(req, res) {
  var kaltura_conf = new kaltura.Configuration(req.body.partnerId);
  var client = new kaltura.Client(kaltura_conf);
  kaltura.services.user.loginByLoginId(req.body.email, req.body.password, req.body.partnerId, LOGIN_EXPIRY, LOGIN_PERMISSIONS, req.body.otp)
  .execute(client).then(function(ks){
    if (!ks) return res.send("Error logging in");
    client.setKs(ks);
    var type = kaltura.enums.SessionType.ADMIN;
    kaltura.services.partner.getSecrets(req.body.partnerId, req.body.email, req.body.password)
    .execute(client).then(function(secrets) {
      if (!secrets) return res.status(500).end();
      if (secrets.code && secrets.message) return res.status(500).send(secrets.message);
      res.json(secrets);
    }).catch(e => res.status(500).end());
  })
})

Router.post('/login', function(req, res) {
  var kaltura_conf = new kaltura.Configuration(req.body.partnerId);
  var client = new kaltura.Client(kaltura_conf);
  var type = kaltura.enums.SessionType.ADMIN;
  kaltura.services.user.loginByLoginId(req.body.email, req.body.password, req.body.partnerId, LOGIN_EXPIRY, LOGIN_PERMISSIONS,  req.body.otp)
  .execute(client).then(function(ks) {
    if (!ks) return res.send("Error logging in");
    client.setKs(ks);
    var pager = new kaltura.objects.FilterPager();
    pager.pageSize = 500;
    pager.pageIndex = 1;
    kaltura.services.partner.listPartnersForUser(null, pager)
    .execute(client).then(function(partners) {
      res.json(partners.objects);
    }).catch(e => res.status(500).end());
  }).catch(e => res.status(500).end());
});

Router.post('/loginByKs', function(req, res) {
  var kaltura_conf = new kaltura.Configuration(req.body.partnerId);
  var client = new kaltura.Client(kaltura_conf);
  var type = kaltura.enums.SessionType.ADMIN;
  client.setKs(req.body.ks);
  kaltura.services.user.get().execute(client).then(function(result) {
    kaltura.services.user.loginByKs(req.body.partnerId || result.partnerId).execute(client).then(function(result) {
      client.setKs(result.ks);
      var pager = new kaltura.objects.FilterPager();
      pager.pageSize = 500;
      pager.pageIndex = 1;
      kaltura.services.partner.listPartnersForUser(null, pager)
      .execute(client).then(function(partners) {
        res.json(partners.objects);
      }).catch(e => res.status(500).end());
    }).catch(e => res.status(500).end());
  }).catch(e => res.status(500).end());
})

var COPY_FIELDS = [
  'firstName', 'lastName', 'country', 'state',
];
var MAP_FIELDS = [
  {from: 'company', to: 'description'},
  {from: 'email', to: 'adminEmail'},
]

Router.post('/shatest', function(req, res) {
  res.end();
})

Router.post('/signup', function(req, res) {
  var kaltura_conf = new kaltura.Configuration(config.partnerId);
  kaltura_conf.serviceUrl = config.service_url;
  var client = new kaltura.Client(kaltura_conf);
  var type = kaltura.enums.SessionType.ADMIN;

  var expiry = null;
  var privileges = null;
  kaltura.services.session.start(config.admin_secret, config.user_id, type, config.partner_id, expiry, privileges)
  .execute(client).then(function(ks) {
    var partner = new kaltura.objects.Partner();
    COPY_FIELDS.forEach(function(f) {
      if (req.body[f]) partner[f] = req.body[f];
    });
    MAP_FIELDS.forEach(function(f) {
      if (req.body[f.from]) partner[f.to] = req.body[f.from];
    })
    partner.name = req.body.firstName + ' ' + req.body.lastName;
    partner.appearInSearch = null;
    partner.partnerPackage = 100;
    if (process.env.KALTURA_SSO_SECRET && process.env.KALTURA_SSO_PAYLOAD) {
      var cms_password = jwt.sign({ lucybot: process.env.KALTURA_SSO_PAYLOAD }, process.env.KALTURA_SSO_SECRET);
    }else{
      var cms_password = 'testit';
    }
    var template_partner_id = null;
    var silent = null;
    kaltura.services.partner.register(partner, cms_password, template_partner_id, silent)
    .execute(client).then(function(results) {
      if (!results) return res.status(500).end();
      if (results.code && results.message) return res.status(500).send(results.message);
      res.json(results);
    }).catch(e => res.status(500).end());
  }).catch(e => res.status(500).end());

  if (process.env.SSO_SYNC_URL && process.env.KALTURA_SSO_SECRET && process.env.KALTURA_SSO_PAYLOAD) {
    delete req.body.usage;
    var requestify = require('requestify');

    requestify.post(process.env.SSO_SYNC_URL, {
	    name: req.body.firstName + ' ' + req.body.lastName,
	    company: req.body.company,
	    email: req.body.email,
	    country: req.body.country,
	    state: req.body.state,
	    contactme: req.body.help,
	    system: 'Code_Recipes',
	    token: jwt.sign({ lucybot: process.env.KALTURA_SSO_PAYLOAD }, process.env.KALTURA_SSO_SECRET) 
    })
    .then(function(response) {
    //Get the response body (JSON parsed or jQuery object for XMLs)
	response.getBody();
    });
  }
});
