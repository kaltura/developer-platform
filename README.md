# Kaltura API Documentation
This repository contains everything necessary to build
documentation for the Kaltura VPaaS API using LucyBot.

The generated website is contained in
[kaltura/developer-platform-generated](http://github.com/kaltura/developer-platform-generated).

Documentation for LucyBot is available at [docs.lucybot.com](http://docs.lucybot.com)

## Running

### Running in Production

There are two target APIs: ovp (the standard Kaltura VPaaS) and ott.

#### ovp
```
npm install
git clone http://github.com/kaltura/developer-platform-generated generated/ovp
TARGET_API=ovp node server.js
```

#### ott
```
npm install
git clone http://github.com/kaltura/ott-developer-platform-generated generated/ott
TARGET_API=ott node server.js
```

### Running in Development

```
npm install
TARGET_API=ovp lucybot build --prerender --truncate_prerender --destination generated/ovp
TARGET_API=ovp node server.js
```

or replace `ovp` with `ott` to build the OTT site.

### Environment Options
Several options can be set using environment variables:

* DEVELOPMENT - for use in active development, disables SSL and cache
* NO_SSL
* USE_CACHE
* ENABLE_CROSS_ORIGIN
* KALTURA_RECIPES_PORT
* DISCOURSE_HOST
* DISCOURSE_CATEGORY_ID
* DISABLE_SWIFTYPE
* ENABLE_HOMEPAGE
* BASE_PATH
* OTT_API_VERSION - relevant for 'ott' only. (e.g. v5_1_0)

#### Required in production
* TARGET_API - either 'ott' or 'ovp'
* KALTURA_SSO_SECRET
* KALTURA_SSO_PAYLOAD
* GITHUB_CLIENT_ID
* GITHUB_CLIENT_SECRET
* DISCOURSE_API_KEY - valid for forum.kaltura.org

## Building
Any changes that are pushed to the master branch of kaltura/developer-platform
will automatically trigger a Travis build. Travis will use LucyBot to update the
`generated/` folder with new HTML, CSS, and JS assets. Once Travis is
finished, simply pull the result and restart the server.


### Trigger a Build
If Travis fails, or you want to pull in the latest changes to LucyBot,
you can manually trigger a build on Travis by pushing an empty commit:

```
git commit --allow-empty -m "Trigger CI"
git push
```

## Testing
If you make changes to the codegen logic, you'll need to run the following
to regenerate the test output:

```
WRITE_GOLDEN=true npm test
```

To check that there are no changes to codegen output, you can run:
```
npm test
```
.
