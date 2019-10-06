<!--METADATA
{
  "summary": "Get asset data"
}
-->

# Get asset data

## Get asset/EPG data

This request returns the media or EPG program, according to the assetReferenceType provided. the available types are:
1. MEDIA - media asset (include live assets)
2. EPG_INTERNAL - EPG program that was ingested to the Kaltura backend.
3. EPG_EXTERNAL - EPG program from an external source
4. NPVR - recording id

### API Call
```json
{
  "method": "post",
  "path": "/service/asset/action/get",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "ks": {},
          "assetReferenceType": {
            "consoleDefault": "media"
          },
          "id": {}
        }
      },
      "consoleDefault": "{\"version\":\"5.2.5.17649\"}"
    }
  ]
}
```