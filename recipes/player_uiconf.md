<!--METADATA
{
  "icon": "columns",
  "sortOrder": 550,
  "tags": [
    "uiConf"
  ],
  "keywords": []
}
-->

# Player UI conf
Learn how to get and update player configuration

## Select a player
Choose a player to view its configuration

<!--APICALL
{
  "method": "get",
  "path": "/service/uiconf/action/get",
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
    }
  ]
}
-->

## Updating the UI conf
You can use the form below to add, change or remove functionality from your player.

<!--APICALL
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
-->