<!--METADATA
{
  "summary": "Learn how to authenticate using App Tokens"
}
-->

# App Token Authentication
An Application Token enables clients to provide their development partners or internal technical teams with restricted access to the Kaltura API. Each Application Token restricts the API methods that may be called by its users, and can allow restricted content access for clients who use entitlements (e.g., restricted access to MediaSpace content).

Developers who are provided with an Application Token use it to create temporary Kaltura Session (KS) tokens, which they will then use to access API functions. These KS tokens will have the restrictions of their originating Application Token.

## Start a Widget Session
First we'll start an unprivileged session by calling `session.startWidgetSession`

### API Call
```json
{
  "method": "get",
  "path": "/service/session/action/startWidgetSession"
}
```

## Compute the hash
You'll need to compute a hash for the Kaltura Session and App Token, which will be passed to `appToken.startSession`. 

SHA-1 is the default hash function, but others are allowed as well.

See below for an example of how to compute the hash in NodeJS


### Sample Code (node)
```javascript
var crypto = require('crypto')
  , shasum = crypto.createHash('sha1');

shasum.update(client.ks + appToken.token);
var hash = client.shasum.digest('hex');

```

## Start the App Token Session
Once you've computed the hash, pass it's value to `appToken.startSession()` to retrieve a new Kaltura Session. You should then use this session to set `client.ks`.

### API Call
```json
{
  "method": "get",
  "path": "/service/apptoken/action/startSession"
}
```
