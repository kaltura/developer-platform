<!--METADATA
{
  "icon": "search",
  "sortOrder": 650,
  "tags": [
    "media",
    "search",
    "list"
  ],
  "keywords": [
    "search",
    "library search",
    "kaltura video search",
    "media list"
  ],
  "relatedRecipes": [
    "captions",
    "metadata"
  ],
  "summary": "Learn how to search through your video library using Kaltura's API"
}
-->

# Kaltura Media Library Search
To search for objects in Kaltura, API services expose the list action. For media entries, the list action provides a vast set of filter parameters to allow for granular flexibility in building custom library search experiences, whether it is a free-form search, or a pre-determined gallery.   
This recipe will walk through some common scenarios of using the media.list action.  ,Search Operators in the media.list API:,* The following special operators can be used in a free text search field in the Kaltura API:
* Exclamation mark (!) - AND NOT . Note that AND NOT is not a unary NOT operator. A positive search word must appear before the AND phrase. See here for additional information.
* Double Quotes (\"\") - are treated as an EXACT MATCH search operand.
* Backslash (\\) - escape. To search for the character ! you have to enter \\! in the search field.
* Comma (,) - OR
* Spacebar - AND,We also recommend reading [Kaltura Search Engine for Media, Metadata and Timeline: Search Behavior and Commands](https://knowledge.kaltura.com/node/247) for more details on the search behavior in the KMC and MediaSpace.,

## Free Text Search
To retrieve a list of media entries, use Media Entry Filters to select which content you want to show.  
This combination of filter parameters will search through all of the Kaltura Media Entry fields and custom metadata fields, using a free text search and ordered by default using the BM25 algorithm.

### API Call
```json
{
  "method": "get",
  "path": "/service/media/action/list",
  "parameters": [
    {
      "name": "filter[freeText]",
      "default": "",
      "x-consoleDefault": ""
    },
    {
      "name": "filter[advancedSearch][objectType]",
      "default": "KalturaMetadataSearchItem",
      "x-consoleDefault": "KalturaMetadataSearchItem"
    },
    {
      "name": "filter[orderBy]",
      "x-consoleDefault": "-weight"
    }
  ]
}
```

## Base Field Search
To search based on specific base fields, use the filter parameter that corresponds to the name of the base field you'd like search on.  
Base fields are exposed in the filter via a number of optional fields: 

1. [field]Equal - will search for exact match against the provided value
2. [field]In - will search for exact match against a list of comma seperated values
3. [field]NotIn - will search for exact negative match against a list of comma seperated values for all entries that do NOT have that value
4. [field]Like - matches complete words inside a sentence. Where words are separated by blend chars, it will match word1, word2 or word1[blend char]word2 (e.g. name="word1~word2", like will match word1, word2 and word1~word2, but it will not match word1~ nor ~word2). If a word ends with blend char (e.g. "stop!") like will indeed match it with the word. 
5. [field]MultiLikeOr - same as Like, against multiple inputs seperated by commas. Performs a logical OR between the inputs.
6. [field]MultiLikeAnd - same as Like, against multiple inputs seperated by commas. Performs a logical AND between the inputs.
7. [field]AtGreaterThanOrEqual - for number or date fields, match any entries with value greater than or equal to the input
8. [field]AtLessThanOrEqual - for number or date fields, match any entries with value less than or equal to the input
9. [field]NotContains - matches any entries that are not members of input category (either by category id or by name)

**Blend Chars:**  
Blended characters are indexed both as separators and valid characters.   
For instance, assume that & is configured as blended and AT&T occurs in an indexed document. Three different keywords will get indexed, namely "at&t", treating blended characters as valid, plus "at" and "t", treating them as separators.
The following blend chars are configured for the API search.  
!, $, ', (, ), *, -, /, :, ;, <, =, #, [, \, ], ^, `, {, |, }, ~, %, &, +, >, ?, @, _  
These blend characters may be used as delimiters or as characters.

**Note, to treat * and ! as literals, use a backslash. e.g. if name="test!" to search for it, use "test\\!"**

### API Call
```json
{
  "method": "get",
  "path": "/service/media/action/list",
  "parameters": [
    {
      "name": "filter[idEqual]"
    },
    {
      "name": "filter[idIn]"
    },
    {
      "name": "filter[idNotIn]"
    },
    {
      "name": "filter[nameLike]"
    },
    {
      "name": "filter[tagsMultiLikeOr]"
    },
    {
      "name": "filter[tagsMultiLikeAnd]"
    },
    {
      "name": "filter[createdAtGreaterThanOrEqual]"
    },
    {
      "name": "filter[createdAtLessThanOrEqual]"
    },
    {
      "name": "filter[categoriesIdsNotContains]"
    }
  ]
}
```

## Video Player
Here's how to embed the results in HTML. You can select a skin by setting uiconf_id.

### API Call
```json
{
  "method": "get",
  "path": "/service/media/action/list",
  "parameters": [
    {
      "name": "uiConf",
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
      }
    },
    {
      "name": "filter[freeText]",
      "default": "",
      "hidden": true,
      "dynamicValue": {
        "fromStep": 0,
        "answer": "filter[freeText]"
      }
    },
    {
      "name": "filter[createdAtGreaterThanOrEqual]",
      "hidden": true,
      "dynamicValue": {
        "fromStep": 0,
        "answer": "filter[createdAtGreaterThanOrEqual]"
      }
    },
    {
      "name": "filter[advancedSearch][objectType]",
      "default": "KalturaMetadataSearchItem",
      "hidden": true,
      "dynamicValue": {
        "fromStep": 0,
        "answer": "filter[advancedSearch][objectType]"
      }
    },
    {
      "name": "filter[advancedSearch][orderBy]",
      "default": "-createdAt",
      "enum": [
        "+createdAt",
        "+duration",
        "+lastPlayedAt",
        "+name",
        "+plays",
        "+recent",
        "+startDate",
        "+updatedAt",
        "+views",
        "-createdAt",
        "-duration",
        "-lastPlayedAt",
        "-name",
        "-plays",
        "-recent",
        "-startDate",
        "-updatedAt",
        "-views"
      ],
      "enumLabels": [
        "CREATED_AT_ASC",
        "DURATION_ASC",
        "LAST_PLAYED_AT_ASC",
        "NAME_ASC",
        "PLAYS_ASC",
        "RECENT_ASC",
        "START_DATE_ASC",
        "UPDATED_AT_ASC",
        "VIEWS_ASC",
        "CREATED_AT_DESC",
        "DURATION_DESC",
        "LAST_PLAYED_AT_DESC",
        "NAME_DESC",
        "PLAYS_DESC",
        "RECENT_DESC",
        "START_DATE_DESC",
        "UPDATED_AT_DESC",
        "VIEWS_DESC"
      ],
      "hidden": true,
      "dynamicValue": {
        "fromStep": 0,
        "answer": "filter[advancedSearch][orderBy]"
      }
    }
  ]
}
```
### Sample Code (html)
```html
<div class="row" style="margin-bottom: 10px">
  <div class="col-xs-12 col-md-5">
    <h2><%- results[0].objects[0].name %></h2>
    <p><%- results[0].objects[0].description %></p>
  </div>
  <div class="col-xs-12 col-md-6 col-md-offset-1">
    <script src="https://cdnapisec.kaltura.com/p/<%-  results[0].objects[0].partnerId  %>/sp/<%-  results[0].objects[0].partnerId  %>00/embedIframeJs/uiconf_id/<%-  answers.uiConf  %>/partner_id/<%-  results[0].objects[0].partnerId  %>">
    </script>
    <div id="kaltura_player_<%-  results[0].objects[0].id  %>" style="width: 560px; height: 395px;">
    </div>
    <script>
    kWidget.embed({
      "targetId": "kaltura_player_<%-  results[0].objects[0].id  %>",
      "wid": "_<%-  results[0].objects[0].partnerId  %>",
      "uiconf_id": <%-  answers.uiConf  %>,
      "flashvars": {},
      "cache_st": 1437326770,
      "ks": window.ks,
      "entry_id": "<%-  results[0].objects[0].id  %>"
    });
    </script>
  </div>
</div>
```

## Finish
Learn about working with [custom metadata](https://developer.kaltura.com/recipes/metadata)