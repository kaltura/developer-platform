# Kaltura API Documentation
This repository contains everything necessary to build
documentation for the Kaltura VPaaS API using LucyBot.

## Running
```
npm install
npm install -g forever
forever start server.js
```

### Environment Options
Several options can be set using environment variables:

* DEVELOPMENT - for use in active development, disables SSL and cache
* NO_SSL
* USE_CACHE
* ENABLE_CROSS_ORIGIN
* KALTURA_RECIPES_PORT

#### Required in production
* KALTURA_SSO_SECRET
* KALTURA_SSO_PAYLOAD
* GITHUB_CLIENT_ID
* GITHUB_CLIENT_SECRET

## Building
Any changes that are pushed to the master branch will automatically
trigger a Travis build. Travis will use LucyBot to update the
`www/` folder with new HTML, CSS, and JS assets. Once Travis is
finished, simply pull the result and restart the server.

### Trigger a Build
If Travis fails, or you want to pull in the latest changes to LucyBot,
you can manually trigger a build on Travis by pushing an empty commit:

```
git commit --allow-empty -m "Trigger CI"
git push
```
