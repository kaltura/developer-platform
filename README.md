# Kaltura API Documentation
This repository contains everything necessary to build
documentation for the Kaltura VPaaS API using LucyBot.

The generated website is contained in
[kaltura/developer-portal-generated](http://github.com/kaltura/developer-portal-generated).

Documentation for LucyBot is available at [docs.lucybot.com](http://docs.lucybot.com)

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
