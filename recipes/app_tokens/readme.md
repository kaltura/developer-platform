<!--METADATA
{
  "sortOrder": 100,
  "tags": [
    "appToken"
  ],
  "keywords": [],
  "summary": "Learn how to create, view, and delete App Tokens"
}
-->

# App Tokens


## Getting App Tokens
App Tokens are used for generating Kaltura Sessions, and can control what privileges are granted to the user. Use ```appToken.list``` to see all of your app tokens.

### API Call
```json
{
  "method": "get",
  "path": "/service/apptoken/action/list"
}
```

## Adding a new App Token
Create a new app token by calling ```appToken.add```.  You can choose whether the session should have ADMIN or USER level privileges, and you can specify how long the session should last.

### API Call
```json
{
  "method": "get",
  "path": "/service/apptoken/action/add"
}
```

## Retrieving an App Token
Use `appToken.get` to get details for a specific App Token

### API Call
```json
{
  "method": "get",
  "path": "/service/apptoken/action/get",
  "parameters": [
    {
      "name": "id",
      "dynamicValue": {
        "fromStep": 1,
        "value": "id"
      }
    }
  ]
}
```

## Using the App Token to Start a new Session
Once you have an app token, you can use `appToken.startSession` to create a new
Kaltura Session.

To do this, you'll need to compute the SHA1 hash of the current KS concatenated
with the token.


### Sample Code
```node
var crypto = require('crypto')
  , shasum = crypto.createHash('sha1');

shasum.update(client.ks + appToken.token);
var hash = client.shasum.digest('hex');

client.appToken.startSession(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
appToken.id,
hash,
userId,
type,
expiry);
```

## Deleting an App Token
Use `appToken.delete` to remove a specific App Token

### API Call
```json
{
  "method": "get",
  "path": "/service/apptoken/action/delete",
  "parameters": [
    {
      "name": "id",
      "dynamicValue": {
        "fromStep": 1,
        "value": "id"
      }
    }
  ]
}
```