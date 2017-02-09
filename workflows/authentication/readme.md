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

## Starting a KalturaSession
This recipe shows how to work with Kaltura Sessions (aka `KS`).  To generate a KS, you will need your API secret keys.

To retrieve these secret keys, visit the "Integration Settings" tab inside the [Kaltura Management Console](http://kmc.kaltura.com/index.php/kmc/kmc4#account|integration).

To sign up for a Kaltura VPaaS account, visit [vpaas.kaltura.com](https://vpaas.kaltura.com)

### API Call
```json
{
  "method": "get",
  "path": "/service/session/action/start",
  "parameters": [
    {
      "name": "partnerId"
    },
    {
      "name": "userId",
      "default": "lucybot@example.com"
    },
    {
      "name": "secret"
    },
    {
      "name": "type",
      "default": 2
    }
  ]
}
```

## Checking the KS
You can validate your Kaltura session by calling ```user.get``` without a User ID, which will return the details of the user associated with the current session

### API Call
```json
{
  "method": "get",
  "path": "/service/user/action/get",
  "ignoreParameters": [
    "format"
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
  "method": "get",
  "path": "/service/user/action/loginByLoginId",
  "parameters": [
    {
      "name": "loginId"
    },
    {
      "name": "password"
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
  "method": "get",
  "path": "/service/partner/action/listPartnersForUser",
  "parameters": [],
  "ignoreParameters": [
    "format"
  ]
}
```