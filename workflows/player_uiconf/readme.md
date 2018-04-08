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
  "method": "post",
  "path": "/service/uiconf/action/get",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "id": {}
        }
      }
    }
  ]
}
```

## Updating the UI conf
You can use the form below to add, change or remove functionality from your player.

### API Call
```json
{
  "method": "post",
  "path": "/service/uiconf/action/update",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "id": {
            "dynamicEnum": {
              "path": "/service/uiconf/action/list",
              "method": "post",
              "array": "objects",
              "value": "id",
              "label": "name",
              "parameters": [
                {
                  "name": "body",
                  "value": "{\"filter\":{\"objTypeEqual\":1}}"
                }
              ]
            },
            "global": true
          },
          "uiConf": {
            "properties": {
              "config": {
                "x-inputType": "textarea",
                "dynamicValue": {
                  "fromStep": 0,
                  "value": "config"
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