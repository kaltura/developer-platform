<!--METADATA
{
  "summary": "Learn how to authenticate using App Tokens"
}
-->

# App Token Authentication
An Application Token enables clients to provide their development partners or internal technical teams with restricted access to the Kaltura API. Each Application Token restricts the API methods that may be called by its users, and can allow restricted content access for clients who use entitlements (e.g., restricted access to MediaSpace content).

Developers who are provided with an Application Token use it to create temporary Kaltura Session (KS) tokens, which they will then use to access API functions. These KS tokens will have the restrictions of their originating Application Token.

## Start a Widget Session
Start an unprivileged session by calling `session.startWidgetSession`. Once the call completes, set the returned `ks` value as the the KS (Kaltura Session) of the client object.

Do not set a KS on the client before making this call.

### API Call
```json
{
  "method": "get",
  "path": "/service/session/action/startWidgetSession",
  "parameters": [
    {
      "name": "widgetId"
    }
  ]
}
```

## Compute the Hash
Now, compute a hash of the unprivileged Kaltura Session (from the previous step) and the App Token's value, concatenated. This value will be passed to `appToken.startSession` in the following step.

SHA-256 is the default hash function used with Application Tokens. If your Application Token was created with a different hash function (e.g. SHA-1 or MD5), compute that hash instead.


### Sample Code (node)
```javascript
var crypto = require('crypto')
  , shasum = crypto.createHash('sha1');

shasum.update(client.ks + appToken.token);
var hash = client.shasum.digest('hex');
```

## Start the App Token Session
You now pass the the hash from the previous step, together with other parameters, to `appToken.startSession`. This returns a new, privileged Kaltura Session for your application. Set the returned value as the client's KS.

You are now ready to make other API calls!

### API Call
```json
{
  "method": "get",
  "path": "/service/apptoken/action/startSession",
  "parameters": [
    {
      "name": "id"
    },
    {
      "name": "tokenHash"
    },
    {
      "name": "userId"
    },
    {
      "name": "expiry"
    }
  ]
}
```