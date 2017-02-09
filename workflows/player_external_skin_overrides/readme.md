<!--METADATA
{
  "icon": "eye",
  "sortOrder": 500,
  "tags": [
    "look & feel",
    "customization",
    "player",
    "design",
    "css",
    "skin",
    "theme",
    "template",
    "media"
  ],
  "keywords": [
    "IframeCustomPluginCss1",
    "look & feel",
    "customization",
    "player",
    "design",
    "css",
    "skin",
    "theme",
    "template"
  ],
  "summary": "External CSS files can be loaded during Player load time to override the Player core CSS classes. This recipe shows how to leverage the external CSS loading functionality to quickly customize the player look-and-feel."
}
-->

# Kaltura Player External Skin Overrides
To override the Player core CSS classes, you can load external CSS files during Player load time.  
This recipe shows how to leverage the external CSS loading functionality to quickly customize the Player look-and-feel.,The core CSS classes are defined here:
* [The kdark skin](https://github.com/kaltura/mwEmbed/blob/master/skins/kdark/css/layout.css)
* [The ott skin](https://github.com/kaltura/mwEmbed/blob/master/skins/ott/css/layout.css),The following services are used in this recipe:
1. media.list
2. uiConf.list
3. The Kaltura Player library,,,,

## Override the Standalone HTML Page with the Player and Custom CSS  File
To begin:
1.  Create a standalone HTML page, and embed a Player using the DynamicEmbed method.
2. Create a separate CSS file where you will add the custom CSS directives to override the existing Player look-and-feel according to your preferences.

To know which elements and classes to override, use your browser "developer tools" and inspect the various elements you wish to change.  
You can also review the full core skin CSS file [kdark skin](https://github.com/kaltura/mwEmbed/blob/master/skins/kdark/css/layout.css) (the default player skin) and the [ott skin](https://github.com/kaltura/mwEmbed/blob/master/skins/ott/css/layout.css) (the OTT-TV skin) to learn more about the available elements and classes.

When creating your skin, verify the following:
* To ensure that your class directives override the core player skin directives, add the **!important** rule to your CSS directives.  
* You can also reference external assets in your CSS file, such as images and fonts. You may use either relative or full paths to these assets.  

To load your custom CSS, add the ```IframeCustomPluginCss1``` flashvar to your Player embed code (or add it through the Player Studio UIVars section).  
For example: ```flashvars: {IframeCustomPluginCss1: pathToMy/externalCustomCSSFile.css}```  

You can define more than one custom CSS files accordingly: ```IframeCustomPluginCss1```, ```IframeCustomPluginCss2```, ```IframeCustomPluginCss3```, etc.  

The example below assumes that you have created your custom CSS file under the ```externalResources``` folder and using the ```IframeCustomPluginCss1.css``` filename.

### API Call
```json
{
  "method": "get",
  "path": "/service/media/action/get",
  "parameters": [
    {
      "custom": true,
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
            "name": "filter[tagsMultiLikeAnd]",
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
### Sample Code (html)
```html
<!DOCTYPE html>
<html>
<head>
	<title>Kaltura Player External Skin Overrides</title>
	
	<!-- the below style tag is the contents of your custom CSS file "" -- this is just for reference example, in your example it will be in the css file, not inside the embedding page -->
	<style type="text/css">
		body {
			background-color: transparent;
		}

		.mwPlayerContainer {
			background-color: transparent;
			height: 96% !important;
			width: 96% !important;
			margin: 4% 4% !important;
			left: -2% !important;
			top: -4% !important;
			-webkit-box-shadow: 0 0 20px blue;
			-moz-box-shadow: 0 0 20px blue;
			box-shadow: 0px 0px 10px 1px blue;
		}

		.largePlayBtn {
			background: repeating-linear-gradient(
			  45deg,
			  #606dbc,
			  #606dbc 10px,
			  #465298 10px,
			  #465298 20px
			) !important;
		}

		.largePlayBtn:hover {
			background: repeating-linear-gradient(
			  45deg,
			  #465298,
			  #465298 10px,
			  #606dbc 10px,
			  #606dbc 20px
			) !important;
		}
	</style>
	<!-- end style -->
	
	<!-- the below the Kaltura player library include -->
	<script src="//cdnapisec.kaltura.com/p/<%- answers.partnerId  %>/sp/<%- answers.partnerId  %>00/embedIframeJs/uiconf_id/<%-  answers.uiConf  %>/partner_id/<%- answers.partnerId  %>"></script>
	
</head>
<body>
    <!-- embed the player into this div -->
	<div id="kaltura_player" style="width: 560px; height: 395px;"></div>
	
	<!-- using Dynamic Embed method, embed the player and include the custom CSS file: -->
	<script>
		kWidget.embed({
        	"targetId": "kaltura_player",
        	"wid": "_<%- answers.partnerId  %>",
        	"uiconf_id": <%-  answers.uiConf  %>,
        	"flashvars": {
        	    //externalResources/IframeCustomPluginCss1.css is the custom CSS file you've created
        		"IframeCustomPluginCss1" : "externalResources/IframeCustomPluginCss1.css"
        	},
        	"entry_id": "<%- answers.entryId %>"
        });
	</script>

</body>
</html>
```
### Sample Code (javascript)
```javascript
kWidget.embed({
	"targetId": "kaltura_player",
	"wid": "_<%- answers.partnerId  %>",
	"uiconf_id": <%-  answers.uiConf  %>,
	"flashvars": {
	    //externalResources/IframeCustomPluginCss1.css is the custom CSS file you've created
		"IframeCustomPluginCss1" : "externalResources/IframeCustomPluginCss1.css"
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
              //externalResources/IframeCustomPluginCss1.css is the custom CSS file you've created
            "IframeCustomPluginCss1" : "//zoharbabin.com/kaltura/externalResources/IframeCustomPluginCss1.css"
          },
          "entry_id": "<%- answers.entryId %>"
        });
  </script>

</body>
</html>
```