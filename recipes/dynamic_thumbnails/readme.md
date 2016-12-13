<!--METADATA
{
  "sortOrder": 600,
  "tags": [
    "media"
  ],
  "keywords": [],
  "summary": "Create a gallery page with rotating dynamic thumbnails."
}
-->

# Animated Thumbnails with CSS Stripes


## Embedding Custom Thumbnails
You can embed thumbnails of your videos using <img> tags with the Thumbnail API.

Choose a Media Entry to view code for embedding it's thumbnail

Once the demo loads, try mousing over the thumbnail to see a preview of the video.

### API Call
```json
{
  "method": "get",
  "path": "/service/media/action/get",
  "parameters": [
    {
      "name": "entryId",
      "dynamicEnum": {
        "path": "/service/media/action/list",
        "method": "get",
        "array": "objects",
        "value": "id",
        "label": "name",
        "parameters": []
      }
    }
  ]
}
```
### Sample Code
```html
<img src="https://cdnapisec.kaltura.com/p/<%- answers.partnerId %>/thumbnail/entry_id/<%- answers.entryId %>/width/240/height/180"
     width="240" height="180">
<% if (result) { %>
<h3><%- result.name %></h3>
<p><%- result.description %></p>
<p>
  <a href="<%- result.downloadUrl %>" target="_blank"><%- result.downloadUrl %></a>
</p>
<% } %>


```
### Demo
```html
<img src="https://cdnapisec.kaltura.com/p/<%- answers.partnerId %>/thumbnail/entry_id/<%- answers.entryId %>/width/240/height/180"
     width="240" height="180">
<% if (result) { %>
<h3><%- result.name %></h3>
<p><%- result.description %></p>
<p>
  <a href="<%- result.downloadUrl %>" target="_blank"><%- result.downloadUrl %></a>
</p>
<% } %>


```

## Making Rotating Thumnails
You can make your embedded thumbnails rotate through different frames of the video using CSS Stripes.

To use CSS stripes, create a `<div>` with CSS attribute `background-image` set to your thumbnail's URL.

Set vid_slices to change how many frames are available to scroll through. Note that the more frames you use,
the longer the image will take to load.

This will return a single image with all the frames side-by-side. To move between frames, set CSS attribute `background-position-x`
to img_width * frame_number.



### API Call
```json
{
  "method": "get",
  "path": "/service/media/action/get",
  "parameters": [
    {
      "name": "entryId",
      "dynamicValue": {
        "fromStep": 0,
        "value": "id"
      },
      "dynamicEnum": {
        "parameters": [],
        "array": "objects",
        "path": "/service/media/action/list",
        "method": "get",
        "value": "id",
        "label": "name"
      }
    },
    {
      "custom": true,
      "name": "vid_slices",
      "type": "number",
      "x-consoleDefault": 10
    }
  ]
}
```
### Sample Code
```html
<style>
.img-holder {
  height: 180px;
  width: 320px;
  background-repeat: no-repeat;
  background-image: url(https://cdnapisec.kaltura.com/p/<%- answers.partnerId %>/thumbnail/entry_id/<%- answers.entryId %>/vid_slices/<%- answers.vid_slices %>/widget_id/0/type/2/width/320/height/180)
}
</style>
<div class="img-holder"></div>
<script>
  var hovering = false;
  var frame = 0;
  setInterval(function() {
    frame = hovering ? frame + 1 : 0;
    if (frame >= <%- answers.vid_slices %>) frame = 0;
    $('.img-holder').css('background-position-x', (-1 * frame * 320) + 'px');
  }, 500);

  $('.img-holder').mouseover(function() {
      hovering = true;
  });
  $('.img-holder').mouseout(function() {
      hovering = false;
  });
</script>
```
### Demo
```html
<style>
.img-holder {
  height: 180px;
  width: 320px;
  background-repeat: no-repeat;
  background-image: url(https://cdnapisec.kaltura.com/p/<%- result.partnerId %>/thumbnail/entry_id/<%- result.id %>/vid_slices/<%- answers.vid_slices %>/widget_id/0/type/2/width/320/height/180)
}
</style>
<div class="img-holder"></div>
<script>
  var hovering = false;
  var frame = 0;
  setInterval(function() {
    frame = hovering ? frame + 1 : 0;
    if (frame >= <%- answers.vid_slices %>) frame = 0;
    $('.img-holder').css('background-position-x', (-1 * frame * 320) + 'px');
  }, 500);

  $('.img-holder').mouseover(function() {
      hovering = true;
  });
  $('.img-holder').mouseout(function() {
      hovering = false;
  });
</script>
```