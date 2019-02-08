<!--METADATA
{
  "summary": "Learn how to authenticate using App Tokens."
}
-->

# App Token Authentication
An Application Token enables clients to provide their development partners or internal technical teams with restricted access to the Kaltura API. Each Application Token restricts the API methods that may be called by its users, and can allow restricted content access for clients who use entitlements (e.g. restricted access to MediaSpace content).

Developers who are provided with an Application Token use it to create temporary Kaltura Session (KS) tokens, which they will then use to access API functions. These KS tokens will have the restrictions of their originating Application Token.

This workflow assumes you have an AppToken ID, its corresponding hash and that you know the hash function used when creating it (SHA1, SHA256, SHA512 and MD5 are supported).

To create an AppToken, see the [appToken.add() action](/api-docs/service/appToken/action/add).

## Start a Widget Session
Start an unprivileged session by calling `session.startWidgetSession`. Once the call completes, use client.setKs() to set the returned `ks` value as the KS (Kaltura Session) of the client object.

The widgetId should be a partnerId, with an underscore at the beginning, e.g. `_1234567`.

Do not set a KS on the client before making this call.

### API Call
```json
{
  "method": "post",
  "path": "/service/session/action/startWidgetSession",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "widgetId": {}
        }
      }
    }
  ]
}
```

## Start the App Token Session
You will now call `appToken.startSession` to obtain a privileged Kaltura Session (KS). 

First, ensure that your client's KS is set to the unprivileged KS returned in Step 1.  Next, pass the following parameters into the `appToken.startSession` call:
* `id`: The ID of the Application Token with which you are authenticating.
* `tokenHash`: The hash value of the unprivileged KS and the Application Token value. Use the output of Step 2 of this recipe.
* `userId`: The ID of the user whose permissions will be used to access content. **Note that some Application Tokens already have a fixed User ID, in which case you do not need to pass this value.*

Executing the call returns a new, privileged KS for your application. Set the returned value as the client's KS.

You are now ready to make other API calls!

### API Call
```json
{
  "method": "post",
  "path": "/service/apptoken/action/startSession",
  "parameters": [
    {
      "name": "ks",
      "description": "This should be the ks generated from startWidgetSession in step 1",
      "dynamicValue": {
        "fromStep": 0,
        "value": "ks"
      }
    },
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "id": {},
          "tokenHash": {},
          "userId": {}
        }
      }
    }
  ]
}
```