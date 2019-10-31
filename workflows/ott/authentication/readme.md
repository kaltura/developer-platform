<!--METADATA
{
  "summary": "This recipe will guide you through the steps necessary to create a Kaltura Session (ks)"
}
-->

# Authentication
Authentication UPDATED

## Starting a Kaltura Session
To generate a KS, you will need to login to the account using the user name and password used to register.

### API Call
```json
{
  "method": "post",
  "path": "/service/ottuser/action/login",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "username": {},
          "password": {},
          "udid": {}
        }
      },
      "consoleDefault": "{\"version\":\"5.2.5.17649\"}"
    }
  ]
}
```

## Checking the KS
You can validate your Kaltura session by calling session/action/get. you can use the session parameter if you wish to parse additional KS. if no KS value was provided for this field, the user ks will be parsed.

### API Call
```json
{
  "method": "post",
  "path": "/service/session/action/get",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "ks": {
            "dynamicValue": null
          }
        }
      },
      "consoleDefault": "{\"version\":\"5.2.5.17649\"}"
    }
  ]
}
```

## Finish
You can learn more about the operations used in this workflow by visiting the API Console and Documentation
