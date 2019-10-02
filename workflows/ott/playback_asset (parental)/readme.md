<!--METADATA
{
  "summary": "Parental control verification before playback"
}
-->

# Parental control (playback)
A flow that demonstrate parental control verification prior to playback.

![ScreenShot](/assets/documentation/OTT/image_flows/test.PNG)

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

## Validate parental PIN
After the user enters the pin, the client will invoke pin/action/validate API request to validate the entered pin.

If the PIN is correct - the client will continue with the playback flow.
If not correct - depends on the specific client functionality ( i.e - prompt the user to enter the PIN again).

### API Call
```json
{
  "method": "post",
  "path": "/service/pin/action/validate"
}
```