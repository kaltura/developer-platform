<!--METADATA
{
  "icon": "money",
  "sortOrder": 150,
  "tags": [
    "cuePoint",
    "media"
  ],
  "keywords": [],
  "summary": "Learn how to place advertisements at specific points in your videos"
}
-->

# Advertisement Cue Points


## Getting Ad Cue Points
Use `cuePoint.list` to retrieve a list of Ad Cue Points

Use a `KalturaAdCuePointBaseFilter` to retrieve only Ad cue points.

### API Call
```json
{
  "method": "get",
  "path": "/service/cuepoint_cuepoint/action/list",
  "parameters": [
    {
      "name": "filter[entryIdEqual]",
      "dynamicEnum": {
        "path": "/service/media/action/list",
        "method": "get",
        "parameters": [],
        "array": "objects",
        "label": "name",
        "value": "id"
      }
    },
    {
      "name": "filter[objectType]",
      "value": "KalturaAdCuePointBaseFilter",
      "hidden": true
    }
  ]
}
```

## Adding a new Ad Cue Point
Use the controls below to add a new cue point to one of your videos

### API Call
```json
{
  "method": "get",
  "path": "/service/cuepoint_cuepoint/action/add",
  "parameters": [
    {
      "name": "cuePoint[entryId]",
      "dynamicEnum": {
        "path": "/service/media/action/list",
        "method": "get",
        "parameters": [],
        "array": "objects",
        "label": "name",
        "value": "id"
      },
      "dynamicValue": {
        "fromStep": 0,
        "answer": "filter[entryIdEqual]"
      }
    },
    {
      "name": "cuePoint[sourceUrl]",
      "enum": [
        "https://pubads.g.doubleclick.net/gampad/ads?sz=480x70&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dnonlinear&correlator=",
        "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=is&c=23&pl=VAST&pli=10724976&PluID=0&pos=113&ord=%5btimestamp%5d&cim=1&t=1&ai=23227072",
        "http://ad3.liverail.com/?LR_PUBLISHER_ID=1331&LR_CAMPAIGN_ID=229&LR_SCHEMA=vast2",
        "http://ad3.liverail.com/?LR_PUBLISHER_ID=1331&LR_CAMPAIGN_ID=228&LR_SCHEMA=vast2",
        "http://loopme.me/api/vast/ads?appId=e18c19fa43&vast=2&campid=6029",
        "http://rtr.innovid.com/r1.55428f380f6ec7.80913641;cb=[timestamp]",
        "http://g.adspeed.net/ad.php?do=vast&aid=115727&cb=1322853066&evtv=single",
        "http://search.spotxchange.com/vast/2.00/85394?VPAID=js&content_page_url=www.testing123.com&cb=__random-number__&device[devicetype]=1&device[dnt]=0"
      ],
      "enumLabels": [
        "DoubleClick IMA - VAST Overlay",
        "Sizmek - VAST Linear",
        "Liverail - VAST Linear",
        "Liverail - VAST Overlay",
        "LoopMe - VAST Linear",
        "Innovid - VPAID Linear with Overlay takeover",
        "AdSpeed - VAST Linear",
        "SpotXchange - VPAID Linear"
      ],
      "x-inputType": "text"
    },
    {
      "name": "cuePoint[startTime]"
    },
    {
      "name": "cuePoint[objectType]",
      "default": "KalturaAdCuePoint",
      "hidden": true
    }
  ]
}
```

## Retrieving an Ad Cue Point
Use `cuePoint.get` to get details for a specific Ad Cue Point

### API Call
```json
{
  "method": "get",
  "path": "/service/cuepoint_cuepoint/action/get",
  "parameters": [
    {
      "name": "id",
      "dynamicValue": {
        "fromStep": 1,
        "value": "id"
      }
    }
  ]
}
```

## Viewing your Advertisement
Now you can see your new Cue Point wherever you embed your video.

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
        "answer": "filter[entryIdEqual]"
      }
    },
    {
      "name": "uiConf",
      "type": "string",
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
    }
  ]
}
```

## Listening for Cue Points
You can use kWidget to listen for when your Cue Points are triggered

### API Call
```json
{
  "parameters": [
    {
      "name": "entryId",
      "dynamicValue": {
        "fromStep": 0,
        "answer": "filter[entryIdEqual]"
      },
      "dynamicEnum": {
        "path": "/service/media/action/list",
        "method": "get",
        "array": "objects",
        "value": "id",
        "label": "name"
      }
    },
    {
      "name": "uiConf",
      "type": "string",
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
    }
  ]
}
```
### Sample Code (javascript)
```javascript
kWidget.addReadyCallback(function(playerId){
  var kdp = $('#' + playerId)[0]; 
  kdp.kBind('cuePointReached', function( qPoint ){
    var type = (qPoint.context) ? 'Ad' : 'Code';
    console.log('Cue Point:',
        type,
        qPoint.cuePoint.title,
        qPoint.cuePoint.description,
        qPoint.cuePoint.startTime);
  })
})
```
### Demo
```html
<!DOCTYPE HTML>
<html>
<head>
<title>Cue Points Vast Ads </title>
<script type="text/javascript" src="../../../tests/qunit/qunit-bootstrap.js"></script>
<script type="text/javascript" src="../../../mwEmbedLoader.php"></script>
<script type="text/javascript" src="../../../docs/js/doc-bootstrap.js"></script>
<script src="https://cdnapisec.kaltura.com/p/<%-  answers.partnerId  %>/sp/<%- answers.partnerId  %>00/embedIframeJs/uiconf_id/<%-  answers.uiConf  %>/partner_id/<%-  answers.partnerId  %>">
</script>
<script type="text/javascript">
  var myPlayer;
  // Bind to cuePointReached event
  var jsCallbackReady = function( playerId ) {
    myPlayer = $('#' + playerId )[0];

    myPlayer.addJsListener("cuePointReached", "writeLog");
    myPlayer.addJsListener("adOpportunity", "writeLog");
  };

  var writeLog = function( qPoint ) {
    var type = (qPoint.context) ? 'Ad' : 'Code';
    $('#eventRowDesc').after(
      $('<tr />' ).append(
        $('<td />').text( (qPoint.cuePoint.title) ? qPoint.cuePoint.title : qPoint.cuePoint.description ),
        $('<td />').text( type ),
        $('<td />').text( qPoint.cuePoint.startTime )
      )
    );
  };
</script>
</head>
<body>
<h2> Cue Points Vast Ads </h2>
<div id="playbackModeSelector" ></div>
<br /><br />
<div id="kaltura_player" style="width:400px;height:333px"></div>
<script>
  kWidget.embed({
    'targetId': 'kaltura_player',
    'wid': '_<%- answers.partnerId %>',
    'uiconf_id': '<%- answers.uiConf %>',
    'entry_id': '<%- answers.entryId %>',
  })
</script>
<div style="float:left;padding-left:20px" >
  <i>Cue Points events: </i><br />
  <table border="1" width="520">
  <tr id="eventRowDesc">
    <td>Name</td>
    <td>Type</td>
    <td>Start Time</td>
  </tr>
  </table>
</div>
<div style="clear:both"></div>
</pre>
</body>
</html>
```

## Deleting an Ad Cue Point
Use `cuePoint.delete` to remove a specific Ad Cue Point

### API Call
```json
{
  "method": "get",
  "path": "/service/cuepoint_cuepoint/action/delete",
  "parameters": [
    {
      "name": "id",
      "dynamicValue": {
        "fromStep": 1,
        "value": "id"
      }
    }
  ]
}
```