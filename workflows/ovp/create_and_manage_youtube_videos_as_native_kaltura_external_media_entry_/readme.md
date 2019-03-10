<!--METADATA
{
  "summary": "Using ExternalMediaEntry to natively manage YouTube videos as Kaltura video entries, including support for all interactivity, analytics and enrichment capabilities, while keeping the video hosted and delivered by YouTube. The video will be in the Kaltura player (wrapping around the YouTube chrome-less player)"
}
-->

# Manage YouTube Videos in Kaltura
This workflow will guide you on how to use the [externalMedia](https://developer.kaltura.com/api-docs/service/externalMedia) service to manage YouTube hosted videos as native Kaltura videos that benefit from the same workflows, experience and analytics available for Kaltura hosted video entries.

## Create an External Media Entry that points to the YouTube hosted video
To add a YouTube hosted video as a Kaltura media, you will need the YouTube video ID:
To find your YouTube video ID: 

1. Visit the YouTube video page. 
2. Look at the URL of that page, and at the end of it, you should see a URL param `v`. The value of `v` is the ID of your YouTube video (for example: in this YouTube video; https://www.youtube.com/watch?v=CA8a88L8RBU , the ID is CA8a88L8RBU).

That ID will be set as the value of referenceId field in Kaltura when creating the ExternalMediaEntry object.

> Important: Make sure that your YouTube video visibility must be set to either `Public` or `Unlisted`. Private YouTube videos will not work outside YouTube.

### API Call
```json
{
  "method": "post",
  "path": "/service/externalmedia_externalmedia/action/add",
  "parameters": []
}
```