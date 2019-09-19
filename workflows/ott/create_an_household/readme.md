<!--METADATA
{
  "summary": "Create household with 2 users and 1 device"
}
-->

# Create an household
In this flow, we'll create a household with 2 users (master user and regular user) and we'll add a device.

## Register user
We'll start by creating a user that later will be the master user in the household

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
            "username": {},
            "firstName": {},
            "lastName": {}
          },
          "password": {}
        }
      },
      "consoleDefault": "{\"version\":\"5.2.5.17649\"}"
    }
  ]
}
```

## Create household
Create household

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
      "consoleDefault": "{\"version\":\"3.6.287.20720\"}"
    }
  ]
}
```

## Finish
You can learn more about the operations used in this workflow by visiting the API Console and Documentation
