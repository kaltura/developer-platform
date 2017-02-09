<!--METADATA
{
  "icon": "columns",
  "sortOrder": 550,
  "tags": [
    "uiConf"
  ],
  "keywords": [],
  "summary": "Learn how to get and update player configuration"
}
-->

# Player UI conf


## Select a player
Choose a player to view its configuration

### API Call
```json
{
  "method": "get",
  "path": "/service/uiconf/action/get",
  "parameters": [
    {
      "name": "id",
      "global": true
    }
  ]
}
```

## Updating the UI conf
You can use the form below to add, change or remove functionality from your player.

### API Call
```json
{
  "method": "get",
  "path": "/service/uiconf/action/update",
  "parameters": [
    {
      "name": "id",
      "dynamicEnum": {
        "path": "/service/uiconf/action/list",
        "method": "get",
        "array": "objects",
        "value": "id",
        "label": "name",
        "parameters": [
          {
            "name": "filter[objTypeEqual]",
            "value": 1
          }
        ]
      },
      "global": true
    },
    {
      "name": "uiConf[config]",
      "x-inputType": "textarea",
      "dynamicValue": {
        "fromStep": 0,
        "value": "config"
      }
    }
  ]
}
```