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
  "method": "get",
  "path": "/service/caption_captionasset/action/list",
  "parameters": [
    {
      "name": "filter[entryIdEqual]",
      "dynamicEnum": {
        "path": "/service/media/action/list",
        "method": "get",
        "array": "objects",
        "value": "id",
        "label": "name"
      }
    }
  ]
}
```

## Uploading Captions - Create an Upload Token
Use the uploadToken service to upload an WebVTT file to the Kaltura API. If you don't have an WebVTT file handy, you can [download one here](/sample_captions.srt)

First you'll need to use `uploadToken.add` to create a new upload token. In the next step we'll use this token to upload the WebVTT data.

### API Call
```json
{
  "method": "get",
  "path": "/service/uploadtoken/action/add",
  "parameters": []
}
```

## Uploading Captions - Send the WebVTT Data
Now we'll use the newly created Upload Token to upload the WebVTT file.

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
  "method": "get",
  "path": "/service/caption_captionasset/action/add",
  "parameters": [
    {
      "name": "entryId",
      "dynamicValue": {
        "fromStep": 0,
        "answer": "filter[entryIdEqual]"
      }
    },
    {
      "name": "captionAsset[language]",
      "default": "English"
    },
    {
      "name": "captionAsset[label]"
    },
    {
      "name": "captionAsset[isDefault]"
    },
    {
      "name": "captionAsset[format]",
      "default": "3"
    }
  ]
}
```

## Retrieving an Caption Asset
Use `captionAsset.get` to get details for a specific Caption Asset

### API Call
```json
{
  "method": "get",
  "path": "/service/caption_captionasset/action/get",
  "parameters": [
    {
      "name": "captionAssetId",
      "dynamicValue": {
        "fromStep": 3,
        "value": "id"
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
  "method": "get",
  "path": "/service/caption_captionasset/action/serveWebVTT",
  "parameters": [
    {
      "name": "captionAssetId",
      "dynamicValue": {
        "fromStep": 3,
        "value": "id"
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
  "method": "get",
  "path": "/service/caption_captionasset/action/delete",
  "parameters": [
    {
      "name": "captionAssetId",
      "dynamicValue": {
        "fromStep": 3,
        "value": "id"
      }
    }
  ]
}
```