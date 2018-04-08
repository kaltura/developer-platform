<!--METADATA
{
  "icon": "image",
  "hidden": true,
  "summary": "How to list all entries for a given partner"
}
-->

# Iterate over all entries


## Getting a list of entries
Iterating over all entries is achieved by calling media.list() passing along a pager with an index and size

### API Call
```json
{
  "method": "post",
  "path": "/service/media/action/list",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "pager": {
            "properties": {
              "pageSize": {},
              "pageIndex": {}
            },
            "type": "object"
          }
        }
      }
    }
  ]
}
```

## Getting a list of entries
Once you've exhausted all entries by increasing `pageIndex`, the API will simplyreturn an empty array.

Below we've set `pageSize` to 1, and `pageIndex` to the total number of entries available,  causing the last item to be shown. Try increasing the `pageIndex` to see how the API responds.

### API Call
```json
{
  "method": "post",
  "path": "/service/media/action/list",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "pager": {
            "properties": {
              "pageSize": {
                "x-consoleDefault": 1
              },
              "pageIndex": {
                "dynamicValue": {
                  "fromStep": 0,
                  "value": "totalCount"
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