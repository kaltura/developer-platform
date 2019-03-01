<!--METADATA
{
  "icon": "lock",
  "sortOrder": 1000,
  "tags": [
    "session",
    "user",
    "partner"
  ],
  "keywords": [],
  "summary": "Learn how to pass your credentials to Kaltura's API and create a Kaltura Session"
}
-->

# Authentication
This recipe will guide you through the steps necessary to create a Kaltura Session (ks), a temporary authentication token that can provide either user-level or admin-level access to your Kaltura account.,,

## Starting a Kaltura Session
This recipe shows how to work with Kaltura Sessions (aka `KS`).  To generate a KS, you will need your API secret keys.

To retrieve these secret keys, visit the "Integration Settings" tab inside the [Kaltura Management Console](http://kmc.kaltura.com/index.php/kmc/kmc4#account|integration).

To sign up for a Kaltura VPaaS account, visit [vpaas.kaltura.com](https://vpaas.kaltura.com)

### API Call
```json
{
  "method": "post",
  "path": "/service/session/action/start",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "partnerId": {
            "type": "integer",
            "fromSecrets": true
          },
          "userId": {
            "type": "string",
            "fromSecrets": true,
            "default": "user@example.com"
          },
          "secret": {
            "type": "string",
            "x-inputType": "password",
            "fromSecrets": true
          },
          "type": {
            "default": 2,
            "enum": [
              0,
              2
            ],
            "type": "integer",
            "x-enumLabels": [
              "USER",
              "ADMIN"
            ],
            "x-enumType": "KalturaSessionType"
          },
          "privileges": {
            "type": "string"
          }
        }
      }
    }
  ]
}
```

## Checking the KS
You can validate your Kaltura session by calling ```user.get``` without a User ID, which will return the details of the user associated with the current session

### API Call
```json
{
  "method": "post",
  "path": "/service/user/action/get",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "string",
            "fromSecrets": true
          }
        }
      }
    }
  ]
}
```

## Logging in with your Login ID
You can also log in with your Login ID and password by using `user.loginByLoginId`. This will return a new KS.

Note that this KS can only be used to retrieve a list of partnerIds.
You can then use one of these partnerIds to get a privileged KS.

### API Call
```json
{
  "method": "post",
  "path": "/service/user/action/loginByLoginId",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "loginId": {
            "type": "string"
          },
          "password": {
            "type": "string",
            "x-inputType": "password"
          }
        }
      }
    }
  ]
}
```

## Log In with a Partner ID
After using `user.loginByLoginId`, you can get a list of all your Partner IDs for that account using `partner.listPartnersForUser`.

You can then re-use `user.loginById` with a partnerId to login for as that particular partner.

### API Call
```json
{
  "method": "post",
  "path": "/service/partner/action/listPartnersForUser",
  "ignoreParameters": [
    "format"
  ]
}
```