const express = require('express');
const request = require('request');
const router = module.exports = new express.Router();

const COOKIE_AGE = 60*60*24*30;
const COOKIE_ID = 'quiz_id';
const KS_URL = 'https://www.kaltura.com/api_v3/service/session/action/start/format/1/secret/144787277a66bda22e93d6155ed45e48/partnerId/2421271/type/0/expiry/86400/userId/';
const ID_SIZE = 1000000000;

router.use(require('cookie-parser')());

router.get('/user_ks', (req, res, next) => {
  let url = KS_URL;
  if (req.cookies[COOKIE_ID]) {
    url += req.cookies[COOKIE_ID];
  } else {
    const id = Math.floor(Math.random() * ID_SIZE).toString();
    res.cookie(COOKIE_ID, id, {maxAge: COOKIE_AGE})
    url += id;
  }
  request.get(url, {json: true}, (err, resp, body) => {
    if (err) return res.status(500).send(err);
    if (resp.statusCode >= 300) return res.status(resp.statusCode).send(body);
    res.set('content-type', 'text/plain');
    res.end(body);
  })
})

module.exports = router;
