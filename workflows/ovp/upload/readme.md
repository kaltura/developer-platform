<!--METADATA
{
  "icon": "upload",
  "sortOrder": 900,
  "tags": [
    "uploadToken",
    "media"
  ],
  "keywords": [],
  "summary": "Upload a video, image or audio asset to your Kaltura media library by generating an upload token, creating an Entry and executing the media transcoding and enrichment processes automatically."
}
-->

# Uploading Media Files
This recipe will walk you through the process of uploading new videos using the Kaltura API. Video files can be located on disk, or be specified as an HTML file input. If you're working in a web environment, we highly recommend using the [jQuery Chunked File Upload Library](https://github.com/kaltura/chunked-file-upload-jquery). This library handles chunking files in Javascript, automatically determining the optimal chunk size and number of parallel uploaded chunks, as well as handle pause-and-resume and retry in case of temporary network failures. It completely abstracts and simplifies working with the [uploadToken](https://developer.kaltura.com/api-docs/#/uploadToken) service and file upload flow.

## Uploading Media Files - Create an Upload Token
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
### Sample Code (angular)
```typescript
auto
```
### Sample Code (csharp)
```csharp
auto
```
### Sample Code (curl)
```bash
auto
```
### Sample Code (java)
```java
auto
```
### Sample Code (node)
```javascript
auto
```
### Sample Code (php)
```php
auto
```
### Sample Code (php53)
```php
auto
```
### Sample Code (python)
```py
auto
```
### Sample Code (ruby)
```ruby
auto
```
### Sample Code (swift)
```swift
auto
```

## Uploading Media Files - Upload the Binary Data
Now we'll use the newly created Upload Token to upload the media file (video, image, video).
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
### Sample Code (angular)
```typescript
auto
```
### Sample Code (csharp)
```csharp
auto
```
### Sample Code (curl)
```bash
auto
```
### Sample Code (java)
```java
auto
```
### Sample Code (node)
```javascript
auto
```
### Sample Code (php)
```php
auto
```
### Sample Code (php53)
```php
auto
```
### Sample Code (python)
```py
auto
```
### Sample Code (ruby)
```ruby
auto
```
### Sample Code (swift)
```swift
auto
```

## Creating a Kaltura Media Entry
Now we'll create a Media Entry to hold our video. Use the form below to enter your video's details.

1. Select `entry` of type `KalturaMediaEntry`.
2. Select the correct `mediaType`.
3. Optionally add basic metadata, such as the asset's `name` and `description`.
4. You may leave the other fields blank or with their default values.


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

## Attaching the Uploaded File to the Kaltura Media Entry
Now that you've created a new Media Entry, you need to associate the uploaded video with it:

1. Select `resource` of type `KalturaUploadedFileResourceToken`.
2. Confirm the `entryId` from the previous step, and the `token` from the first step.

After this step, the media you've uploaded will be processed and transcoded automatically. If any enrichment services or event notifications were configured on your Kaltura account, these will execute after transcoding is complete. For example, if Email notifications were configured on your account, you will receive the email as soon as the transcoding is complete.

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

