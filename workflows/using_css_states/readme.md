<!--METADATA
{
  "icon": "eye",
  "sortOrder": 80,
  "tags": [
    "css",
    "player",
    "state",
    "mobile",
    "button",
    "style",
    "media"
  ],
  "keywords": [
    "css",
    "player",
    "state",
    "mobile",
    "button",
    "style"
  ],
  "summary": "Set different large play button between mobile and desktop - Using CSS States"
}
-->

# Using CSS states
In this recipe, we will learn how to use custom CSS to override the core player layout CSS. 
In our custom CSS we will use player state classes to create specific look and feel for the large play button in the middel of the player. 
We will apply this new style only when playing the video on mobile devices like phones and tablets.
To learn more about player CSS states, look at the [player customization](https://vpaas.kaltura.com/documentation/04_Web-Video-Player/Player-Customization.html) article, under the "CSS States" section.,,

## Create your player embed code with a custom CSS file
To begin:
* Create a standalone HTML page, and embed a player using DynamicEmbed method
* Create a seperate CSS file. Into this CSS file, you will add the custom CSS directives to override the player look & feel you wish

To know which elements and classes to override, use your browser "developer tools" and inspect the various elements you wish to change.  In our case, we would like to change the ```.largePlayBtn``` class.

In order to target mobile devices only, we can use the player state class ```.mobile``` defined on the player inreface level. So our CSS rule should be:

```
.mobile .largePlayBtn {
	position: absolute !important;
	top: 50% !important;
	left: 50% !important;
	font-size: 30px !important;
	margin: -0.79em 0 0 -1em !important;
	text-decoration: none; !important
	width: 44px !important;
	height: 50px !important;
	border-radius: 35px !important;
	padding-left: 26px !important;
	padding-top: 20px !important;	
	padding-bottom: 0px !important;
	padding-right: 14px !important;
	background-color: rgba(255,255,255,0.9) !important; 
	color: #59baf3 !important;
}
```
**Note:** We use the ```!important``` directive to make sure the original class property is overridden by our class.

Now test the code by running the demo. 

When running on desktop, the regular plarge play button is displayed. However, when runing on a mobile device, the new style applies to the large play button. 

You can use the Chrome dev tools to turn on device mode and chhose a large tablet such as iPad. The hit the "Refresh Demo" button to see the new style applied.

### API Call
```json
{
  "method": "get",
  "path": "/service/media/action/get",
  "parameters": [
    {
      "name": "entryId"
    },
    {
      "custom": true,
      "name": "uiConf",
      "type": "string",
      "dynamicEnum": {
        "parameters": [
          {
            "name": "filter[objTypeEqual]",
            "value": 1
          },
          {
            "name": "filter[tagsMultiLikeOr]",
            "value": "html5studio"
          },
          {
            "name": "filter[orderBy]",
            "value": "-createdAt"
          }
        ],
        "path": "/service/uiconf/action/list",
        "method": "get",
        "array": "objects",
        "value": "id",
        "label": "name"
      }
    }
  ]
}
```
### Sample Code (javascript)
```javascript
kWidget.embed({
	"targetId": "kaltura_player",
	"wid": "_<%- answers.partnerId  %>",
	"uiconf_id": <%-  answers.uiConf  %>,
	"flashvars": {
		"IframeCustomPluginCss1" : "//projects.kaltura.com/amir/mobileLargeButton.css"
	},
	"entry_id": "<%- answers.entryId %>"
});
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
          "flashvars": {
            "IframeCustomPluginCss1" : "//projects.kaltura.com/amir/mobileLargeButton.css"
          },
          "entry_id": "<%- answers.entryId %>"
        });
  </script>

</body>
</html>
```

## Finish

### Summary
In this recipe we've learned the following:

* How to inject an external CSS file to the player
* How to override core player CSS classes
* How to change CSS classes according to player state

To learn more about custom CSS file injection and player CSS states, read the [player customization](https://vpaas.kaltura.com/documentation/04_Web-Video-Player/Player-Customization.html) article.