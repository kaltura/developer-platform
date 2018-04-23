"use strict";

var Express = require('express');
var http = require('http');
var https = require('https');
var path = require('path');
var fs = require('fs');
const TARGET_API = process.env.TARGET_API || 'ovp';
const STATIC_DIR = __dirname + '/generated/' + TARGET_API;
const DEFAULT_INDEX = fs.readFileSync(path.join(STATIC_DIR, 'default_index.html'), 'utf8');

var App = Express();
App.use(require('compression')());
if (process.env.ENABLE_CROSS_ORIGIN) {
  App.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

if (process.env.USE_BASIC_AUTH && process.env.LUCYBOT_USERNAME && process.env.LUCYBOT_PASSWD) {
  App.use(require('./routes/basic-auth.js'));
}

if (process.env.ENABLE_HOMEPAGE) {
  App.use('/homepage', Express.static(__dirname + '/homepage'));
  App.engine('pug', require('pug').__express);
  App.set('view engine', 'pug')
  App.set('views', __dirname + '/homepage/views');
  App.get('/', (req, res) => {
    res.render('index', {}, (err, html) => {
      if (err) res.status(500).send(err.toString());
      res.send(html);
    });
  })
}

if (!process.env.DEVELOPMENT || process.env.USE_CACHE) {
  var cache = function(age) {
    age = age || 'med';
    if (age === 'short') age = 60 * 60;
    if (age === 'med')   age = 60 * 60 * 24;
    if (age === 'long')  age = 60 * 60 * 24 * 30;
    return function(req, res, next) {
      res.setHeader('Cache-Control', 'public, max-age=' + age);
      next();
    };
  }
  App.use('/fonts',          cache('long'));
  App.use('/img',            cache('long'));
  App.use('/workflows',      cache('med'));
  App.use('/kaltura_static', cache('med'));
  App.use('/minified',       cache('med'));
  App.use('/partials',       cache('med'));
  App.use('/swagger.js',     cache('med'));
  App.use('/swagger.json',   cache('med'));
}

var recipeRedirects = require('./recipe-redirects');
App.use('/recipes/:recipe/embed', (req, res, next) => {
  var redirect = recipeRedirects[req.params.recipe];
  if (!redirect) return next();
  res.redirect(redirect.redirect + '?embed=true');
});

var v4Redirects = require('./v4-redirects');
v4Redirects.forEach(redirect => {
  App.get(redirect.from, (req, res, next) => {
    if (req.originalUrl !== redirect.from) return next();
    res.redirect(301, redirect.to);
  })
})


App.use(Express.static(STATIC_DIR));

const GH_PAGES_BASE = '/kaltura-recipes-v3';
App.use(GH_PAGES_BASE, (req, res, next) => {
  res.redirect(req.originalUrl.substring(GH_PAGES_BASE.length));
})

App.use('/discussion', require('./routes/discussion'));
if (process.env.TARGET_API === 'ott') {
  App.use('/auth', require('./routes/ott-auth.js'));
} else {
  App.use('/auth', require('./routes/partner-auth.js'));
}
App.use('/github', require('./routes/github.js'));

App.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(DEFAULT_INDEX);
})

if (process.env.DEVELOPMENT || process.env.NO_SSL) {
  console.log('----DEVELOPMENT ENVIRONMENT----');
  var port = process.env.KALTURA_RECIPES_PORT || 3000;
  console.log('listening on port ' + port);
  App.listen(port);
} else {
  var port = process.env.KALTURA_RECIPES_PORT || 443
  var sslOptions = {
    key: fs.readFileSync('/etc/ssl/certs/kaltura.org.key'),
    cert: fs.readFileSync('/etc/ssl/certs/kaltura.org.crt'),
    ca: fs.readFileSync('/etc/ssl/certs/ca-kaltura.org.crt'),
    requestCert: true,
    rejectUnauthorized: false
  };
  var secureServer = https.createServer(sslOptions, App).listen(port, function(){
    console.log("Secure Express server listening on port "+port);
  });
  // Redirect from http port 80 to https
  http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
  }).listen(80);
}

App.use((err, req, res, next) => {
  console.error(err);
  next();
})


