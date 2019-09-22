<!--METADATA
{
  "summary": "Parental control verification before playback"
}
-->

# Parental control (playback)

A flow that demonstrate parental control verification prior to playback

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
