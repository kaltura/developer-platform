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
  "method": "get",
  "path": "/service/cuepoint_cuepoint/action/list",
  "parameters": [
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
    },
    {
      "name": "filter[cuePointTypeEqual]",
      "default": "quiz.QUIZ_QUESTION"
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
  "method": "get",
  "path": "/service/cuepoint_cuepoint/action/add",
  "parameters": [
    {
      "name": "cuePoint[objectType]",
      "x-consoleDefault": "KalturaQuestionCuePoint",
      "hidden": true
    },
    {
      "name": "cuePoint[entryId]",
      "hidden": true,
      "dynamicValue": {
        "fromStep": 0,
        "answer": "filter[entryIdEqual]"
      }
    },
    {
      "name": "cuePoint[question]"
    },
    {
      "name": "cuePoint[explanation]"
    },
    {
      "name": "cuePoint[startTime]"
    }
  ]
}
```