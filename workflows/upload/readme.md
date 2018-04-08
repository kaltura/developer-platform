<!--METADATA
{
  "icon": "upload",
  "sortOrder": 900,
  "tags": [
    "uploadToken",
    "media"
  ],
  "keywords": [],
  "summary": "Learn how to upload a video to your video library"
}
-->

# Upload a Video
This recipe will walk you through the process of uploading new videos using the Kaltura API. Video files can be located on disk, or be specified as an HTML file input. If you're working in a web environment, we highly recommend using the [jQuery Chunked File Upload Library](https://github.com/kaltura/chunked-file-upload-jquery). This library handles chunking files in Javascript, automatically determining the optimal chunk size and number of parallel uploaded chunks, as well as handle pause-and-resume and retry in case of temporary network failures. It completely abstracts and simplifies working with the [uploadToken](https://developer.kaltura.com/api-docs/#/uploadToken) service and file upload flow.

## Uploading Files - Create an Upload Token
Use the uploadToken service to upload a new video file to the Kaltura API. First you'll need to use `uploadToken.add` to create a new upload token.

If you're working in JavaScript, the [jQuery File Upload widget](https://github.com/kaltura/jQuery-File-Upload) will take care of this step for you.

### API Call
```json
{
  "method": "post",
  "path": "/service/uploadtoken/action/add",
  "parameters": []
}
```
### Sample Code (ajax)
```javascript
$('input[name="fileData"]').fileupload({
      apiURL:'https://www.kaltura.com/api_v3/',
      url: 'https://www.kaltura.com/api_v3/?service=uploadToken&action=upload&format=1',
      ks: client.ks,
      singleFileUploads: true,
      dataType: 'json',
      autoUpload: true,
      submit: function(e, data) {
        console.log('uploading...')
      },
      done: function(e, data) {
        console.log('upload done.')
      },
});
```
### Sample Code (node)
```javascript
auto
```
### Sample Code (php)
```php
auto
```
### Sample Code (ruby)
```ruby
auto
```

## Uploading Files - Send the Data
Now we'll use the newly created Upload Token to upload a video file.
If you're working in JavaScript, you can simply use the [jQuery File Upload widget](https://github.com/kaltura/jQuery-File-Upload)

Kaltura supports uploading big media files in chunks.
Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.<br>
If you do not intend to upload the file in chunks, set ```resume``` to ```false``` and ```finalChunk``` to ```true```.

A parallel upload session consists of two stages:

- Upload requests, each with resume=true,finalChunk=false and the expected resumetAt position (if a chunk failed to arrive it can be re-uploaded)
- After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded 
with resume=true, finalChunk=true and the expected resumeAt position. In case an ```UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE``` exception has been returned (indicating not all of the chunks were appended yet) the final request should be remade.

If you don't have a video file handy, you can right-click [this link](http://cfvod.kaltura.com/pd/p/811441/sp/81144100/serveFlavor/entryId/1_2bjlk7qb/v/2/flavorId/1_d1ft34uv/fileName/Kaltura_Logo_Animation.flv/name/a.flv) and choose **Save As**.

### API Call
```json
{
  "method": "post",
  "path": "/service/uploadtoken/action/upload",
  "parameters": [
    {
      "name": "uploadTokenId",
      "dynamicValue": {
        "fromStep": 0,
        "value": "id"
      }
    },
    {
      "name": "fileData"
    },
    {
      "name": "resume",
      "enum": [
        false,
        true
      ],
      "enumLabels": [
        "false",
        "true"
      ]
    },
    {
      "name": "finalChunk",
      "enum": [
        true,
        false
      ],
      "enumLabels": [
        "true",
        "false"
      ]
    },
    {
      "name": "resumeAt",
      "consoleDefault": -1
    }
  ]
}
```
### Sample Code (ajax)
```javascript
$('input[name="fileData"]').fileupload({
      apiURL:'https://www.kaltura.com/api_v3/',
      url: 'https://www.kaltura.com/api_v3/?service=uploadToken&action=upload&format=1',
      ks: client.ks,
      singleFileUploads: true,
      dataType: 'json',
      autoUpload: true,
      submit: function(e, data) {
        console.log('uploading...')
      },
      done: function(e, data) {
        console.log('upload done.')
      },
});
```
### Sample Code (node)
```javascript
auto
```
### Sample Code (php)
```php
auto
```
### Sample Code (ruby)
```ruby
auto
```

## Creating a Media Entry
Now we'll create a Media Entry to hold our video. Use the form below to enter your video's details.

### API Call
```json
{
  "method": "post",
  "path": "/service/media/action/add",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "entry": {
            "properties": {
              "mediaType": {},
              "name": {},
              "description": {}
            },
            "type": "object"
          }
        }
      }
    }
  ]
}
```

## Attach the Video
Now that you've created a new Media Entry, you need to associate the uploaded video with it.

### API Call
```json
{
  "method": "post",
  "path": "/service/media/action/addContent",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "resource": {
            "properties": {
              "objectType": {
                "x-consoleDefault": "KalturaUploadedFileTokenResource"
              },
              "token": {
                "dynamicValue": {
                  "fromStep": 0,
                  "value": "id"
                },
                "type": "string"
              }
            },
            "type": "object"
          },
          "entryId": {
            "dynamicValue": {
              "fromStep": 2,
              "value": "id"
            }
          }
        }
      }
    }
  ]
}
```

## Viewing your Video
You can use kWidget to embed your video in HTML. The video may not be ready for a minute, so you can poll its status with `media.get` by hitting 'Send Request'.

### API Call
```json
{
  "method": "post",
  "path": "/service/media/action/get",
  "parameters": [
    {
      "name": "uiConf",
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
      }
    },
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "entryId": {
            "dynamicValue": {
              "fromStep": 2,
              "value": "id"
            },
            "hidden": true
          }
        }
      },
      "hidden": true
    }
  ]
}
```

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>Kaltura Player External Skin Overrides</title>
  <script src="//cdnapisec.kaltura.com/p/<%- answers.partnerId  %>/sp/<%- answers.partnerId  %>00/embedIframeJs/uiconf_id/<%-  answers.uiConf  %>/partner_id/<%- answers.partnerId  %>"></script>
</head>
<body>

  <div id="kaltura_player" style="width: 560px; height: 395px;"></div>
  <script>
    kWidget.embed({
          "targetId": "kaltura_player",
          "wid": "_<%- answers.partnerId  %>",
          "uiconf_id": <%-  answers.uiConf  %>,
          "flashvars": {},
          "entry_id": "<%- answers.entryId %>"
        });
  </script>

</body>
</html>
```
