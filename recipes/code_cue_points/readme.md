<!--METADATA
{
  "icon": "columns",
  "sortOrder": 300,
  "tags": [
    "cuePoint",
    "media"
  ],
  "keywords": [],
  "summary": "Learn how to create cue points and listen for them during playback"
}
-->

# Cue Points


## Getting Cue Points
Use `cuePoint.list` to retrieve a list of Cue Points

### API Call
```json
{
  "method": "get",
  "path": "/service/cuepoint_cuepoint/action/list",
  "parameters": [
    {
      "name": "filter[cuePointTypeEqual]",
      "default": "codeCuePoint.Code",
      "hidden": true
    },
    {
      "name": "filter[entryIdEqual]",
      "dynamicEnum": {
        "path": "/service/media/action/list",
        "method": "get",
        "parameters": [],
        "array": "objects",
        "label": "name",
        "value": "id"
      }
    }
  ]
}
```

## Adding a new Cue Point
Use the controls below to add a new cue point to one of your videos

### API Call
```json
{
  "method": "get",
  "path": "/service/cuepoint_cuepoint/action/add",
  "parameters": [
    {
      "name": "cuePoint[entryId]",
      "dynamicEnum": {
        "path": "/service/media/action/list",
        "method": "get",
        "parameters": [],
        "array": "objects",
        "label": "name",
        "value": "id"
      },
      "dynamicValue": {
        "fromStep": 0,
        "answer": "filter[entryIdEqual]"
      }
    },
    {
      "name": "cuePoint[code]"
    },
    {
      "name": "cuePoint[startTime]"
    },
    {
      "name": "cuePoint[description]"
    },
    {
      "name": "cuePoint[objectType]",
      "default": "KalturaCodeCuePoint",
      "hidden": true
    }
  ]
}
```

## Retrieving an Cue Point
Use `cuePoint.get` to get details for a specific Cue Point

### API Call
```json
{
  "method": "get",
  "path": "/service/cuepoint_cuepoint/action/get",
  "parameters": [
    {
      "name": "id",
      "dynamicValue": {
        "fromStep": 1,
        "value": "id"
      }
    }
  ]
}
```

## Viewing your Cue Point
Now you can see your new Cue Point wherever you embed your video.

### API Call
```json
{
  "method": "get",
  "path": "/service/media/action/get",
  "parameters": [
    {
      "name": "entryId",
      "dynamicValue": {
        "fromStep": 0,
        "answer": "filter[entryIdEqual]"
      }
    },
    {
      "name": "uiConf",
      "type": "string",
      "dynamicEnum": {
        "path": "/service/uiconf/action/list",
        "method": "get",
        "array": "objects",
        "value": "id",
        "label": "name"
      }
    }
  ]
}
```

## Deleting an Cue Point
Use `cuePoint.delete` to remove a specific Cue Point

### API Call
```json
{
  "method": "get",
  "path": "/service/cuepoint_cuepoint/action/delete",
  "parameters": [
    {
      "name": "id",
      "dynamicValue": {
        "fromStep": 1,
        "value": "id"
      }
    }
  ]
}
```