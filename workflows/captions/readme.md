<!--METADATA
{
  "icon": "cc",
  "sortOrder": 350,
  "tags": [
    "media",
    "uploadToken",
    "captionAsset",
    "captionAssetItem"
  ],
  "keywords": [],
  "summary": "Learn how to upload a caption file and perform in-video searches"
}
-->

# Captions


## Select a Media Entry
Choose a video from your library to add captions to.

### API Call
```json
{
  "method": "get",
  "path": "/service/media/action/get",
  "parameters": [
    {
      "name": "uiConf",
      "hidden": true
    },
    {
      "name": "entryId"
    }
  ]
}
```

## Uploading Captions - Create an Upload Token
Use the uploadToken service to upload an SRT file to the Kaltura API. If you don't have an SRT file handy, you can [download one here](/sample_captions.srt)

First you'll need to use `uploadToken.add` to create a new upload token. In the next step we'll use this token to upload the SRT data.

### API Call
```json
{
  "method": "get",
  "path": "/service/uploadtoken/action/add",
  "parameters": []
}
```

## Uploading Captions - Send the SRT Data
Now we'll use the newly created Upload Token to upload the SRT. If you don't have an SRT file handy, you can [download one here](/sample_captions.srt)

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

## Creating a new Caption Asset
Next you'll need to create a Caption Asset, which describes the format, language, and label of your captions.

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
        "value": "id"
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
      "default": "1"
    }
  ]
}
```

## Setting Caption Content
Now that you've created a new Caption Asset and uploaded your caption file, you need to associate them with each other using the `captionAsset.setContent` method.

Set the `id` parameter to the entryId of a media item, and the `contentResource[token]` parameter  to the Upload Token's ID.

### API Call
```json
{
  "method": "post",
  "path": "/service/caption_captionasset/action/setContent",
  "parameters": [
    {
      "name": "id",
      "dynamicValue": {
        "fromStep": 3,
        "value": "id"
      }
    },
    {
      "name": "contentResource[objectType]",
      "default": "KalturaUploadedFileTokenResource"
    },
    {
      "name": "contentResource[token]",
      "dynamicValue": {
        "fromStep": 2,
        "value": "id"
      }
    }
  ]
}
```

## Searching through Captions
You can use ```captionAssetItem.search``` to search for scenes within your videos.

### API Call
```json
{
  "method": "get",
  "path": "/service/captionsearch_captionassetitem/action/search",
  "parameters": [
    {
      "name": "captionAssetItemFilter[contentLike]",
      "default": "support"
    },
    {
      "name": "captionAssetItemFilter[objectType]",
      "default": "KalturaCaptionAssetItemFilter",
      "hidden": true
    }
  ]
}
```