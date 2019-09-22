<!--METADATA
{
  "summary": "Parental control verification before playback"
}
-->

# Parental control (playback)
A flow that demonstrates parental control verification prior to playback

## Retrieve all user asset rules
Client invokes userassetrule/action/list API request (providing the asset id) to get all user asset rules
relevant to the specific asset id.

### API Call
```json
{
  "method": "post",
  "path": "/service/userassetrule/action/list",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "filter": {
            "properties": {
              "orderBy": {},
              "assetIdEqual": {},
              "assetTypeEqual": {},
              "objectType": {
                "consoleDefault": "KalturaUserAssetRuleFilter"
              }
            },
            "type": "object"
          }
        }
      },
      "consoleDefault": "{\"version\":\"3.6.287.20720\"}"
    }
  ]
}
```

## Client checks if parental rule return in the response
If parental rule return in the response, the client will ask the user to enter a parental pin.

## Validate parental PIN
The client will send pin/action/validate API request to validate if the pin entered by the user is correct.
* If the pin is correct, the backend will return a valid response and the client will continue with the playback flow
* If the pin is not correct, the backend will return an exception, and the client will respond accordingly (displaying again a message to the end-user to type the pin again, etc.)

### API Call
```json
{
  "method": "post",
  "path": "/service/pin/action/validate",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "pin": {},
          "ks": {}
        }
      }
    },
    {
      "name": "Accept"
    },
    {
      "name": "Accept"
    }
  ]
}
```