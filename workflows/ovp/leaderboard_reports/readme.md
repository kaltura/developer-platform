<!--METADATA
{
  "icon": "users",
  "sortOrder": 450,
  "tags": [
    "report",
    "media"
  ],
  "keywords": [],
  "summary": "Learn how to use the API to find your most watched videos and most valuable users"
}
-->

# Leaderboard Reports


## Finding Your Most Viewed Videos
You can use ```report.getTable``` to retrieve tables of usage statistics.

For instance, to find the user who played the most videos, select reportType ```USER_TOP_CONTENT``` and order by ```count_plays```

### API Call
```json
{
  "method": "post",
  "path": "/service/report/action/getTable",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "reportType": {
            "default": "13",
            "enum": [
              "11",
              "12",
              "13"
            ],
            "enumLabels": [
              "USER_ENGAGEMENT",
              "SPEFICIC_USER_ENGAGEMENT",
              "USER_TOP_CONTENT"
            ]
          },
          "order": {
            "default": "count_plays",
            "hidden": true
          },
          "reportInputFilter": {
            "properties": {
              "fromDay": {
                "default": "20150101"
              },
              "toDay": {
                "default": "20160101"
              },
              "fromDate": {},
              "toDate": {}
            },
            "type": "object"
          },
          "pager": {
            "properties": {
              "pageSize": {
                "x-consoleDefault": 10,
                "hidden": true
              }
            },
            "type": "object",
            "hidden": true
          }
        }
      }
    }
  ]
}
```

## Finding Your Top Contributors
To find the users who contributed the most content, select reportType ```TOP_CONTRIBUTORS``` and order by ```count_total```

### API Call
```json
{
  "method": "post",
  "path": "/service/report/action/getTable",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "reportType": {
            "default": "5",
            "enum": [
              "5",
              "20"
            ],
            "enumLabels": [
              "TOP_CONTRIBUTORS",
              "TOP_CREATORS"
            ]
          },
          "order": {
            "default": "count_plays",
            "hidden": true
          },
          "reportInputFilter": {
            "properties": {
              "fromDay": {
                "default": "20150101"
              },
              "toDay": {
                "default": "20160101"
              },
              "fromDate": {},
              "toDate": {}
            },
            "type": "object"
          },
          "pager": {
            "properties": {
              "pageSize": {
                "x-consoleDefault": 10,
                "hidden": true
              }
            },
            "type": "object",
            "hidden": true
          }
        }
      }
    }
  ]
}
```

## Ranking Videos by Votes/Likes
Both ‘Votes' and 'Likes' use the same fields in the DB. For a reliable voting experience, you should chose between ‘like' experience where users would click a ‘Like’ button or a 5-points voting scale, where users would be presented an option to cast a vote between 1 to 5.

You can use ```media.list``` to see which videos are getting the most likes or votes. For each result, ```entry.rank``` will show the average rating for the entry, while ```entry.votes``` will show the total number of votes/likes. Use ```KalturaMediaEntryFilter``` to refine and sort your search

* To restrict your search to videos that have at least one vote/like, set ```totalRankGreaterThanOrEqual=1```

* To see which videos have the highest average rating, set ```orderBy=KalturaMediaEntryOrderBy.RANK_DESC```.

* To see which videos have the most likes, set ```orderBy=KalturaMediaEntryOrderBy.TOTAL_RANK_DESC``` in the filter.

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
          "filter": {
            "properties": {
              "orderBy": {
                "default": "-rank",
                "enum": [
                  "-totalRank",
                  "-rank"
                ],
                "enumLabels": [
                  "TOTAL_RANK_DESC",
                  "RANK_DESC"
                ]
              },
              "totalRankGreaterThanOrEqual": {
                "default": 1
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
