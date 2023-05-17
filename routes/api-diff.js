const express = require('express');
const https = require('https');
const router = module.exports = new express.Router();

const apiVersions = {
  '7.8.0': {
    url: 'https://780.api-docs-develop.ott.kaltura.com/openapi/ott.7_8_0_29937.openapi.json',
  },
  '7.8.1': {
    url: 'https://781.api-docs-develop.ott.kaltura.com/openapi/ott.7_8_1_29961.openapi.json',
  },
  '8.7.3': {
    url: 'https://870.api-docs-develop.ott.kaltura.com/openapi/ott.8_7_3_30297.openapi.json',
  },
};

function makeGetRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, async (res) => {
      try {
        let body = '';
        res.setEncoding('utf-8');
        for await (const chunk of res) {
          body += chunk;
        }
        console.log('RESPONSE');
        resolve(body);
      } catch (err) {
        console.log('ERROR', err);
        // reject(err);
        resolve('{}'); // empty JSON object
      }
    });
  }); 
}

async function handleQueryParams(req) {
  const promises = [];

  if (req.query.src in apiVersions) {
    promises.push(makeGetRequest(apiVersions[req.query.src].url));
  }

  if (req.query.dest in apiVersions) {
    promises.push(makeGetRequest(apiVersions[req.query.dest].url));
  }

  let apis = [];
  if (promises.length) {
    apis = await Promise.all(promises);
  }

  return apis;
}

router.get('', (req, res) => {
  return res.render('api-diff', {
    apiVersions: Object.keys(apiVersions),
  }, async (err, html) => {
    if (err) {
      return res.status(500).send(err.toString());
    }

    const apis = await handleQueryParams(req);
    if (apis.length) {
      return res.json({
        src: JSON.parse(apis[0]).definitions,
        dest: JSON.parse(apis[1]).definitions,
      });
    }

    res.send(html);
  });
});


