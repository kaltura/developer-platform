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
  "method": "post",
  "path": "/service/cuepoint_cuepoint/action/list",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "filter": {
            "properties": {
              "cuePointTypeEqual": {
                "default": "codeCuePoint.Code",
                "hidden": true
              },
              "entryIdEqual": {
                "dynamicEnum": {
                  "path": "/service/media/action/list",
                  "method": "post",
                  "parameters": [
                    {
                      "name": "body",
                      "value": "{}"
                    }
                  ],
                  "array": "objects",
                  "label": "name",
                  "value": "id"
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

## Adding a new Cue Point
Use the controls below to add a new cue point to one of your videos

### API Call
```json
{
  "method": "post",
  "path": "/service/cuepoint_cuepoint/action/add",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "cuePoint": {
            "properties": {
              "entryId": {
                "dynamicEnum": {
                  "path": "/service/media/action/list",
                  "method": "post",
                  "parameters": [
                    {
                      "name": "body",
                      "value": "{}"
                    }
                  ],
                  "array": "objects",
                  "label": "name",
                  "value": "id"
                },
                "dynamicValue": {
                  "fromStep": 0,
                  "answer": "body.filter.entryIdEqual"
                }
              },
              "code": {},
              "startTime": {},
              "description": {},
              "objectType": {
                "default": "KalturaCodeCuePoint",
                "hidden": true
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

## Retrieving an Cue Point
Use `cuePoint.get` to get details for a specific Cue Point

### API Call
```json
{
  "method": "post",
  "path": "/service/cuepoint_cuepoint/action/get",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "id": {
            "dynamicValue": {
              "fromStep": 1,
              "value": "id"
            }
          }
        }
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
  "method": "post",
  "path": "/service/media/action/get",
  "parameters": [
    {
      "name": "uiConf",
      "type": "string",
      "dynamicEnum": {
        "path": "/service/uiconf/action/list",
        "method": "post",
        "array": "objects",
        "value": "id",
        "label": "name"
      }
    },
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
          }
        }
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
  "method": "post",
  "path": "/service/cuepoint_cuepoint/action/delete",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "id": {
            "dynamicValue": {
              "fromStep": 1,
              "value": "id"
            }
          }
        }
      }
    }
  ]
}
```