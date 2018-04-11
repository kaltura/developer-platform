<!--METADATA
{
  "icon": "columns",
  "sortOrder": 250,
  "tags": [
    "cuePoint"
  ],
  "keywords": [],
  "summary": "Learn how to create a quiz and display it during playback"
}
-->

# Quiz


## Select a Media Entry
Choose a video from your library to add cue points to.

You can use ```cuePoint.list``` to see what cue points are already attached.

Set `cuePointTypeEqual` to `QUIZ_QUESTION` to only show quizes.

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
              },
              "cuePointTypeEqual": {
                "default": "quiz.QUIZ_QUESTION"
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

## Adding a Quiz Cue Point
Pass a new KalturaQuestionCuePoint to `cuePoint.add` to create a new quiz.

You can use the form below to add a quiz to the video you selected.

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
              "objectType": {
                "x-consoleDefault": "KalturaQuestionCuePoint",
                "hidden": true
              },
              "entryId": {
                "hidden": true,
                "dynamicValue": {
                  "fromStep": 0,
                  "answer": "body.filter.entryIdEqual"
                }
              },
              "question": {},
              "explanation": {},
              "startTime": {}
            },
            "type": "object"
          }
        }
      }
    }
  ]
}
```