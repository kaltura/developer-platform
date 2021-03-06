<!--METADATA
{
  "summary": "Create household with 2 users and 1 device"
}
-->

# Create an household

In this flow, we'll create a household with 2 users (master user and regular user) and we'll add a device.

## Register user

We'll start by creating a user that later will be the master user in the household. set isMater to true to make this user
the master user of the household (see next step)

### API Call

```json
{
  "method": "post",
  "path": "/service/ottuser/action/register",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "partnerId": {},
          "user": {
            "type": "object",
            "properties": {
              "userName": {},
              "firstName": {}
            },
            "password": {}
          }
        },
        "consoleDefault": "{\"version\":\"5.2.5.17649\"}"
      }
    }
  ]
}
```

## Login user

Login user (created in the previous step) to receive a valid session ks

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
          "partnerId": {},
          "password": {},
          "udid": {},
          "extraParams": {}
        }
      },
      "consoleDefault": "{\"version\":\"5.2.5.17649\"}"
    }
  ]
}
```

## Create household

Create a new household. the user encapsulated in the ks will be added to the household.

### API Call

```json
{
  "method": "post",
  "path": "/service/household/action/add",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "household": {
            "type": "object",
            "properties": {
              "description": {},
              "externalId": {},
              "name": {}
            }
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
