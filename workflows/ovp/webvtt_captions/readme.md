<!--METADATA
{
  "icon": "cc",
  "sortOrder": 90,
  "tags": [
    "captionAsset",
    "uploadToken"
  ],
  "keywords": [],
  "summary": "Learn how to serve a WebVTT caption"
}
-->

# Serve WebVTT Captions


## Getting Caption Assets
Use `captionAsset.list` to retrieve a list of Caption Assets

### API Call
```json
{
  "method": "post",
  "path": "/service/caption_captionasset/action/list",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "filter": {
            "properties": {
              "entryIdEqual": {
                "dynamicEnum": {
                  "path": "/service/media/action/list",
                  "method": "post",
                  "array": "objects",
                  "value": "id",
                  "label": "name"
                }
              }
            },
            "type": "object"
          }
        }
      }
    }
  ]
}
```

## Uploading Captions - Create an Upload Token
Use the uploadToken service to upload an WebVTT file to the Kaltura API. If you don't have an WebVTT file handy, you can [download one here](/assets/sample_captions.vtt)

First you'll need to use `uploadToken.add` to create a new upload token. In the next step we'll use this token to upload the WebVTT data.

### API Call
```json
{
  "method": "post",
  "path": "/service/uploadtoken/action/add",
  "parameters": []
}
```

## Uploading Captions - Send the WebVTT Data
Now we'll use the newly created Upload Token to upload the WebVTT file. If you don't have an WebVTT file handy, you can [download one here](/assets/sample_captions.srt)

### API Call
```json
{
  "method": "post",
  "path": "/service/uploadtoken/action/upload",
  "parameters": [
    {
      "name": "uploadTokenId",
      "dynamicValue": {
        "fromStep": 1,
        "value": "id"
      }
    },
    {
      "name": "fileData"
    }
  ]
}
```

## Adding a new Caption Asset
Use `captionAsset.add` to create a new Caption Asset

### API Call
```json
{
  "method": "post",
  "path": "/service/caption_captionasset/action/add",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "entryId": {
            "dynamicValue": {
              "fromStep": 0,
              "answer": "body.filter.entryIdEqual"
            }
          },
          "captionAsset": {
            "properties": {
              "language": {
                "default": "English"
              },
              "label": {},
              "isDefault": {},
              "format": {
                "default": "3"
              }
            },
            "type": "object"
          }
        }
      }
    }
  ]
}
```

## Retrieving an Caption Asset
Use `captionAsset.get` to get details for a specific Caption Asset

### API Call
```json
{
  "method": "post",
  "path": "/service/caption_captionasset/action/get",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "captionAssetId": {
            "dynamicValue": {
              "fromStep": 3,
              "value": "id"
            }
          }
        }
      }
    }
  ]
}
```

## Serving WebVTT Captions
Use `captionAsset.serveWebVTT` to serve your captions

### API Call
```json
{
  "method": "post",
  "path": "/service/caption_captionasset/action/serveWebVTT",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "captionAssetId": {
            "dynamicValue": {
              "fromStep": 3,
              "value": "id"
            }
          }
        }
      }
    }
  ]
}
```

## Deleting an Caption Asset
Use `captionAsset.delete` to remove a specific Caption Asset

### API Call
```json
{
  "method": "post",
  "path": "/service/caption_captionasset/action/delete",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "captionAssetId": {
            "dynamicValue": {
              "fromStep": 3,
              "value": "id"
            }
          }
        }
      }
    }
  ]
}
```
