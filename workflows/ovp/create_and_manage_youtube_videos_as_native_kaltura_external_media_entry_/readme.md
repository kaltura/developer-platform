<!--METADATA
{
  "summary": "Using ExternalMediaEntry to natively manage YouTube videos as Kaltura video entries, including support for all interactivity, analytics and enrichment capabilities, while keeping the video hosted and delivered by YouTube. The video will be in the Kaltura player (wrapping around the YouTube chrome-less player)"
}
-->

# Manage YouTube Videos in Kaltura
This workflow will guide you on how to use the [externalMedia](https://developer.kaltura.com/api-docs/service/externalMedia) service to manage YouTube hosted videos as native Kaltura videos that benefit from the same workflows, experience and analytics available for Kaltura hosted video entries.

## externalMedia.add of YouTube video ID
To add a YouTube hosted video as a Kaltura media, you will need the YouTube video ID:
To find your YouTube video ID: 

1. Visit the YouTube video page. 
2. Look at the URL of that page, and at the end of it, you should see a URL param `v`.   The value of `v` is the ID of your YouTube video.   
For example: in this YouTube video; `https://www.youtube.com/watch?v=ioY-Cp58zkY` , the ID is `ioY-Cp58zkY`.

That ID will be set as the value of referenceId field in Kaltura when creating the ExternalMediaEntry object.

> Important: Make sure that your YouTube video visibility must be set to either `Public` or `Unlisted`. Private YouTube videos will not work outside YouTube.

For getting the title and description of the YouTube video, we recommend using the [YouTube Data API](https://developers.google.com/youtube/v3/getting-started).

### API Call
```json
{
  "method": "post",
  "path": "/service/externalmedia_externalmedia/action/add",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "entry": {
            "type": "object",
            "properties": {
              "mediaType": {
                "name": "body.entry.mediaType",
                "consoleDefault": 1
              },
              "externalSourceType": {
                "name": "body.entry.externalSourceType",
                "consoleDefault": "YouTube"
              },
              "referenceId": {
                "name": "body.entry.referenceId",
                "consoleDefault": "ioY-Cp58zkY"
              },
              "name": {
                "name": "body.entry.name",
                "consoleDefault": "Try Not To Laugh or Grin STER WURS (BEST OF) - Star Wars parody"
              },
              "description": {
                "name": "body.entry.description",
                "consoleDefault": "Star Wars parody video"
              }
            },
            "name": "body.entry"
          }
        }
      },
      "consoleDefault": "{}"
    }
  ]
}
```

## Create a Thumbnail for the Entry
First, create a ThumbAsset that will hold the thumbnail image for the video in Kaltura. In the next step we will import the Thumbnail from YouTube to that ThumbAsset object.

### API Call
```json
{
  "method": "post",
  "path": "/service/thumbasset/action/add",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "entryId": {
            "dynamicValue": {
              "fromStep": 0,
              "value": "id"
            }
          },
          "thumbAsset": {
            "type": "object",
            "properties": {
              "objectType": {
                "consoleDefault": "KalturaThumbAsset"
              }
            }
          }
        }
      },
      "consoleDefault": "{}"
    }
  ]
}
```

## Import the YouTube Thumbnail
To import the YouTube thumbnail, use the following URL structure:  
`http://img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg`   
Replace [VIDEO_ID] with the YouTube ID of the video you'd like to use.

For example: in this YouTube video; `https://www.youtube.com/watch?v=ioY-Cp58zkY` , the ID is `ioY-Cp58zkY`.   
And the Thumbnail URL is: `http://img.youtube.com/vi/ioY-Cp58zkY/maxresdefault.jpg`   .

### API Call
```json
{
  "method": "post",
  "path": "/service/thumbasset/action/setContent",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "id": {
            "dynamicValue": {
              "fromStep": 1,
              "value": "id"
            }
          },
          "contentResource": {
            "type": "object",
            "properties": {
              "objectType": {
                "consoleDefault": "KalturaUrlResource"
              },
              "url": {
                "dynamicValue": null,
                "consoleDefault": "http://img.youtube.com/vi/ioY-Cp58zkY/maxresdefault.jpg"
              }
            }
          }
        }
      },
      "consoleDefault": "{}"
    }
  ]
}
```