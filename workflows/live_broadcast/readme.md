<!--METADATA
{
  "icon": "bullhorn",
  "sortOrder": 800,
  "tags": [
    "conversionProfile",
    "liveStream",
    "uiConf"
  ],
  "keywords": [],
  "summary": "Learn how to create a new Live+ entry and broadcast a live stream."
}
-->

# Live Broadcast


## Create a KRecord uiConf
You'll need a uiConf that supports KRecord in order
to record a live broadcast.

Use `uiConf.add` below to create one.

### API Call
```json
{
  "method": "get",
  "path": "/service/uiconf/action/add",
  "parameters": [
    {
      "name": "uiConf[name]"
    },
    {
      "name": "uiConf[description]"
    },
    {
      "name": "uiConf[objType]",
      "x-consoleDefault": 7
    },
    {
      "name": "uiConf[width]",
      "hidden": true,
      "x-consoleDefault": 400
    },
    {
      "name": "uiConf[height]",
      "x-consoleDefault": 300,
      "hidden": true
    },
    {
      "name": "uiConf[swfUrl]",
      "x-consoleDefault": "/flash/krecord/v1.7.1/KRecord.swf",
      "hidden": true
    },
    {
      "name": "uiConf[swfUrlVersion]",
      "x-consoleDefault": "1.7.1",
      "hidden": true
    },
    {
      "name": "uiConf[confFile]",
      "x-consoleDefault": "<!-- KRecord does not require XML -->",
      "hidden": true
    },
    {
      "name": "uiConf[useCdn]",
      "x-consoleDefault": "true",
      "hidden": true
    },
    {
      "name": "uiConf[creationMode]",
      "x-consoleDefault": 2,
      "hidden": true
    }
  ]
}
```

## Get the LIVE_STREAM Profile
First you'll need to get the LIVE_STREAM conversion profile using `conversionProfile.list()`.  We'll use this profile to create a new liveStream entry.

### API Call
```json
{
  "method": "get",
  "path": "/service/conversionprofile/action/list",
  "parameters": [
    {
      "name": "filter[nameEqual]",
      "default": "Passthrough",
      "hidden": true
    },
    {
      "name": "filter[typeEqual]",
      "default": "2",
      "hidden": true
    }
  ]
}
```

## Creating a Live Stream Entry
Now we'll use the conversion profile ID to create a new liveStream entry using `liveStream.add()`

### API Call
```json
{
  "method": "get",
  "path": "/service/livestream/action/add",
  "parameters": [
    {
      "name": "liveStreamEntry[name]",
      "default": "Webcam Live Stream Test"
    },
    {
      "name": "liveStreamEntry[description]",
      "default": "This is a test of Kaltura's Live Webcam streaming"
    },
    {
      "name": "liveStreamEntry[mediaType]",
      "default": 201,
      "hidden": true,
      "x-consoleDefault": 201
    },
    {
      "name": "liveStreamEntry[recordStatus]",
      "default": 1,
      "hidden": true
    },
    {
      "name": "liveStreamEntry[dvrStatus]",
      "default": 1,
      "hidden": true
    },
    {
      "name": "liveStreamEntry[dvrWindow]",
      "default": 60,
      "hidden": true
    },
    {
      "name": "liveStreamEntry[sourceType]",
      "default": "32",
      "hidden": true,
      "x-consoleDefault": "32"
    },
    {
      "name": "liveStreamEntry[conversionProfileId]",
      "dynamicValue": {
        "fromStep": 1,
        "value": "objects.0.id"
      }
    }
  ]
}
```

## Embedding the Broadcast Widget
You can use the kRecord widget to record your broadcast.

**Be sure to choose a `uiConf` that supports kRecord**

### API Call
```json
{
  "parameters": [
    {
      "name": "uiConf",
      "dynamicEnum": {
        "path": "/service/uiconf/action/list",
        "method": "get",
        "parameters": [
          {
            "name": "filter[orderBy]",
            "value": "-updatedAt"
          },
          {
            "name": "filter[objTypeEqual]",
            "value": 7
          }
        ],
        "array": "objects",
        "label": "name",
        "value": "id"
      },
      "dynamicValue": {
        "fromStep": 0,
        "value": "id"
      }
    },
    {
      "custom": true,
      "name": "playerUiConf",
      "type": "string",
      "dynamicEnum": {
        "parameters": [
          {
            "name": "pager[pageSize]",
            "value": 500
          },
          {
            "name": "filter[objTypeEqual]",
            "value": 1
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
  <title></title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script type="text/javascript">

  /*
   * All Code Confidential and Proprietary, Copyright ï¿½2011 Kaltura, Inc.
   * To learn more: http://corp.kaltura.com/Products/Video-Applications/Kaltura-Mediaspace-Video-Portal
  */

  /*
   * KRecord integration guide
   * http://knowledge.kaltura.com/krecord-website-integration-guide
   */

  function setConfirmUnload(on) {
      window.onbeforeunload = (on) ? unloadMessage : null;
  }

  function unloadMessage() {
      return "Your live event is still transmitting the local buffer. If you leave the current page the transmission will be interrupted.";
  }

  function jsLog(message) {
      console.log(message);
      $('#krecord_msg').text(message);
  }


  function toHHMMSS (sec_num) {
      var hours   = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      var time    = hours+':'+minutes+':'+seconds;
      return time;
  }


  var krecordLiveHandlerPrototype = function() {

      this.interval = 0;
      this.timer = 0;
      
      
      this.startStreaming = function() {
          var krec = document.getElementById('krecord');
          krec.startRecording();
          $("#btn_stream").hide();
      }
      
      this.stopStreaming = function() {
          var krec = document.getElementById('krecord');
          krec.stopRecording();
          $("#btn_stop").hide();
          window.clearInterval(krecordHandler.interval);
      }
      
      
      this.updateTimer = function() {
          this.timer++;
          $("#timer").html('<i class="icon-circle text-error"></i> ' + toHHMMSS(this.timer));
      }
      
      // ------------------------------------------
      // KRecord event handlers
      // ------------------------------------------
      
      
      this.deviceDetected = function() {
          jsLog('detected device');
      }
      
      this.recordStart = function() {
          jsLog('record started');
          $("#btn_stream").hide();
          $("#btn_stop").show();
          krecordHandler.interval = window.setInterval(function(){krecordHandler.updateTimer()}, 1000);
          setConfirmUnload(true);
      }
      
      this.recordComplete = function() {
          setConfirmUnload(false);
          jsLog('record stopped');
          $("#btn_stream").show();
          $("#btn_stop").hide();
          $("#krecordwrapper").remove();
          $("#btn_stream").remove();
      }
      
      /*
       *  connection to media server failed
       */
      this.netconnectionConnectFailed = function() {
          alert('connection to media server failed');
          jsLog('netconnectionConnectFailed');
      }
      
      /*
       * connection to media server failed
       */
      this.netconnectionConnectInvalidapp = function() {
          alert('connection to media server failed');
          jsLog('netconnectionConnectInvalidapp');
      }
      
      /*
       * connection to media server failed
       */
      this.netconnectionConnectClosed = function() {
          alert('connection to media server failed');
          jsLog('netconnectionConnectClosed');
      }
      
      /*
       * connection to media server failed
       */
      this.netconnectionConnectRejected = function() {
          alert('connection to media server failed');
          jsLog('netconnectionConnectRejected');
      }


      this.connected = function() {
          jsLog('connected');
          $("#btn_stream").show();
          $("#setupKRecord_msg").hide();
      }

      this.connecting = function(){
          jsLog('connecting');
      }

      this.errorCamera = function() {
          jsLog('errorCamera');
      }
      
      this.errorMicrophone = function() {
          jsLog('errorMicrophone');
      }
      
      this.cameraDenied = function() {
          jsLog('cameraDenied');
      }

      this.microphoneDenied = function() {
          jsLog('microphoneDenied');
      }
  }


  var krecordHandler = new krecordLiveHandlerPrototype();
  </script>


  <script src="http://cdnapi.kaltura.com/p/<%- answers.partnerId %>/sp/<%- answers.partnerId %>00/embedIframeJs/uiconf_id/<%- answers.uiConf %>/partner_id/<%- answers.partnerId %>"></script>
  <style type="text/css">
    button {
      color: #900;
      font-weight: bold;
      font-size: 150%;
      text-transform: uppercase;
      width: 320px;
      padding: 10px;
      margin: 10px 0 10px 0;
    }
  </style>
  <script src="/js/swfobject.js"></script>
</head>
<body>
    <div id="setupKRecord_msg">
      <h2 id="krecord_msg">Starting the KRecord widget...</h2>
    </div>

    <!--
    ///*****************************
    ///****
    ///**** Step 2: Embedding and Configuring the KRecord widget:
    ///**** Pay special attention to the flashvars in the below embed, this is what configures the KRecord to properly do Live Stream instead of just recording.
    ///*****************************
    -->
<%
var broadcastURL = results[2].primaryBroadcastingUrl;
var streamHost = broadcastURL.substring(0, broadcastURL.indexOf(':', 6));
var streamApp = broadcastURL.substring(broadcastURL.indexOf('kLive'));
var streamName = results[2].id + "_1";
streamApp = encodeURIComponent(streamApp);
streamName = encodeURIComponent(streamName);
%>
    <div id="krecordwrapper" style="width:320px;height:240px;">
      <object type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" 
              data="http://cdnapi.kaltura.com/krecord/ui_conf_id/<%- answers.uiConf %>" 
              id="krecord" width="100%" height="100%">
        <param name="allowScriptAccess" value="always" />
        <param name="allowNetworking" value="all" />
        <param name="wmode" value="opaque" />
        <param name="flashvars" value="debugmode=true&isLive=true&delegate=krecordHandler&rtmpHost=<%- streamHost %>&localeUrl=http://cdnapi.kaltura.com/flash/krecord/v1.7/locale.xml&themeUrl=http://cdnapi.kaltura.com/flash/krecord/v1.7/skin.swf&fmsApp=<%- streamApp %>&streamName=<%- streamName %>&showUi=false&showPreviewTimer=false&autoPreview=false&disableGlobalClick=true&soundRate=44&ish264=true&h264profile=baseline&h264level=3.1&fps=25&soundCodec=Speex&ks=<%- answers.ks %>=&pid=<%- answers.partnerId %>">
        <param name="movie" value="http://cdnapi.kaltura.com/krecord/ui_conf_id/<%- answers.uiConf %>" />
      </object>
    </div>
  <script>
    var swfURL = "http://cdnapi.kaltura.com/krecord/ui_conf_id/<%-  answers.uiConf  %>";
    var broadcastURL = "<%-  results[2].primaryBroadcastingUrl %>";
    var streamHost = broadcastURL.substring(0, broadcastURL.indexOf(':', 6));
    var streamApp = broadcastURL.substring(broadcastURL.indexOf('kLive'));
    var streamName = "<%-  results[2].id  %>_1";
    streamApp = encodeURIComponent(streamApp);
    streamName = encodeURIComponent(streamName);
    console.log('deleg', krecordHandler);
    var flashVars = {
      debugmode: 'true',
      isLive: 'true',
      delegate: krecordHandler,
      rtmpHost: streamHost,
      localeUrl: 'http://cdnapi.kaltura.com/flash/krecord/v1.7/locale.xml',
      themeUrl: 'http://cdnapi.kaltura.com/flash/krecord/v1.7/skin.swf',
      fmsApp: streamApp,
      streamName: streamName,
      showUi: 'false',
      showPreviewTimer: 'false',
      autoPreview: 'false',
      disableGlobalClick: 'true',
      soundRate: '44&ish264=true&h264profile=baseline&h264level=3.1&fps=25&soundCodec=Speex',
      ks: '<%- answers.ks %>',
      pid: '<%-  answers.partnerId  %>',
    };
    var attributes = {
      id: 'krecord',
      name: 'krecord',
      align: 'middle',
    };
    var params = {
      quality: 'high',
      bgcolor: '#000',
      allowscriptaccess: 'always',
      allownetworking: 'all',
      wmode: 'opaque',
      movie: swfURL,
      allowfullscreen: 'true',
    };

    //swfobject.embedSWF(swfURL, 'krecordwrapper', '320', '240', '10.0.0', '', flashVars, params, attributes)
    console.log('embedded', streamHost, streamApp, streamName);
  </script>
   
    <div class="span5 offset1">
      <button id="btn_stream" style="display: none;" class="btn btn-primary btn-large" onclick="startStreaming()" >
        Start Streaming
      </button>
      <button id="btn_stop" style="display: none;" class="btn btn-danger btn-large" onclick="stopStreaming()" >
        Stop Streaming
      </button>
    </div>

    <h2 id="playertype"></h2>
    <div id="kaltura_player" style="display: none; width: 560px; height: 395px;"></div>
    <div id="setupLiveStream_msg" style="display: none;">
      <h2>Setting up your broadcast stream...</h2>
      <p>Please wait for the live stream to begin. grab a coffee, it can take a few minutes...</p>
      <img src="./coffee.gif" style="width: 560px; height: 395px;" />
    </div>


    <script type="text/javascript">

      <!--
      ///*****************************
      ///****
      ///**** Step 3: Start Broadcast from KRecord, Wait for initial streaming and start Live Stream playback via player
      ///****
      ///*****************************
      -->

      var statusCheckTimeout = 2000;

      var kdp = null;
      
      function startStreaming() {
        $('#kaltura_player').empty();
        $('#playertype').text('');
        krecordHandler.startStreaming();
        
        var checkStatusTimer = null;
        var liveTestStart = new Date().getTime();
        var checkStatus_isLive = function() {
          new kWidget.api( { 'wid' : "_<%- answers.partnerId %>" })
          .doRequest({'service':'liveStream', 'action': 'islive', 'id': '<%- answers.entryId %>', 'protocol': 'auto',  "cache_st": Math.floor((Math.random() * 10000000) + 1) }, 
            function( data ){
              if (data == false) {
                console.log( 'Live stream playback is not ready yet... ' + data );
                clearTimeout(checkStatusTimer);
                checkStatusTimer = setTimeout(checkStatus_isLive, statusCheckTimeout);
                $('#setupLiveStream_msg').show();
              } else {
                clearTimeout(checkStatusTimer);
                console.log( 'now live! ' + data );
                var liveToPublishTime = (new Date().getTime()) - liveTestStart;
                console.log('Live to Publish initialization time: ' + ms2TimeString(liveToPublishTime));
                $('#kaltura_player').show();
                $('#playertype').text('Watching the live stream:');
                kWidget.embed({
                  "targetId": "kaltura_player",
                  "wid": "_" + <%- answers.partnerId || 0 %>,
                  "uiconf_id": <%- answers.uiConf || 0 %>,
                  "flashvars": {
                    "streamerType": "auto",
                    'autoPlay': true,
                    "externalInterfaceDisabled": false
                  },
                  "cache_st": 11,
                  "entry_id": "<%- answers.entryId %>",
                  'readyCallback': function( playerId ){
                    console.log( "kWidget player ready: " + playerId );
                    kdp = $( '#' + playerId ).get(0);
                  }
                });
                $('#setupLiveStream_msg').hide();
              }
            }
          );
        };
        checkStatus_isLive();
      }

      <!--
      ///*****************************
      ///****
      ///**** Step 4: Stop Broadcast from KRecord, Play leftover DVR and wait for VOD Recording entry to be ready
      ///**** IMPORTANT: Note recordComplete event inside kreclive.js which removes the krecord flash widget from the DOM once the buffer has been emptied. Without this step, the recording will not be closed and processed.
      ///*****************************
      -->
      function stopStreaming() {
        krecordHandler.stopStreaming();

        kdp.sendNotification('doStop');
        new kWidget.api({ 'wid' : "_<%- answers.partnerId %>", })
          .doRequest({'service':'liveStream', 'action': 'get', 'entryId': '<%- answers.entryId %>'}, 
            function( data ){
              vodEntryId = data.recordedEntryId;
              playVODRecording();
            }
        );
      }

      var vodEntryId = null;
      var playVODRecording = function () {
        
        $('#playertype').text('Watching last available DVR. Not Live anymore. Waiting for VOD Recording to be ready (this can take several minutes up to few hours):');
        kdp.sendNotification("doPlay");

        var checkVODStatusTimer = null;
        var vodTestStart = new Date().getTime();
        var checkStatus_VODReady = function() {
          new kWidget.api( { 'wid' : "_<%- answers.partnerId %>" })
          .doRequest({'service':'media', 'action': 'get', 'entryId': vodEntryId,  "cache_st": Math.floor((Math.random() * 10000000) + 1) }, 
            function( data ){
              if (data.status != 2) {
                console.log( 'VOD Recording is not ready yet... ' + data.id + ' : ' + data.status);
                clearTimeout(checkVODStatusTimer);
                checkVODStatusTimer = setTimeout(checkStatus_VODReady, statusCheckTimeout);
              } else {
                clearTimeout(checkVODStatusTimer);
                console.log( 'VOD Recording now available! ' + data.id + ' : ' + data.status);
                var VODRecordingProcessingTime = (new Date().getTime()) - vodTestStart;
                console.log('VOD Processing time: ' + ms2TimeString(VODRecordingProcessingTime));
                $('#kaltura_player').show();
                $('#playertype').text('Watching the VOD Recording:');
                kWidget.embed({
                  "targetId": "kaltura_player",
                  "wid": "_" + <%- answers.partnerId %>,
                  "uiconf_id": <%- answers.uiConf %>,
                  "flashvars": {
                    "streamerType": "auto",
                    'autoPlay': true,
                    "externalInterfaceDisabled": false
                  },
                  "cache_st": 11,
                  "entry_id": data.id,
                  'readyCallback': function( playerId ){
                    console.log( "kWidget player ready: " + playerId );
                    kdp = $( '#' + playerId ).get(0);
                  }
                });
              }
            }
          );
        };
        checkStatus_VODReady();
      }

      function ms2TimeString(a,k,s,m,h){
         return k=a%1e3, // optimized by konijn
          s=a/1e3%60|0,
          m=a/6e4%60|0,
          h=a/36e5%24|0,
          (h?(h<10?'0'+h:h)+':':'')+ // optimized
          (m<10?0:'')+m+':'+  // optimized
          (s<10?0:'')+s+'.'+ // optimized
          (k<100?k<10?'00':0:'')+k // optimized
      }

    </script>
</body>
</html>
```
### Sample Code (javascript)
```javascript
var swfURL = "http://cdnapi.kaltura.com/krecord/ui_conf_id/<%-  answers.uiConf  %>";
var broadcastURL = "<%-  results[2].primaryBroadcastingUrl %>";
var streamHost = broadcastURL.substring(0, broadcastURL.indexOf(':', 6));
var streamApp = broadcastURL.substring(broadcastURL.indexOf('kLive'));
var streamName = "<%-  results[2].id  %>_1";
streamApp = encodeURIComponent(streamApp);
streamName = encodeURIComponent(streamName);

var flashVars = {
  debugmode: 'true',
  isLive: 'true',
  delegate: krecordHandler,
  rtmpHost: streamHost,
  localeUrl: 'http://cdnapi.kaltura.com/flash/krecord/v1.7/locale.xml',
  themeUrl: 'http://cdnapi.kaltura.com/flash/krecord/v1.7/skin.swf',
  fmsApp: streamApp,
  streamName: streamName,
  showUi: 'false',
  showPreviewTimer: 'false',
  autoPreview: 'false',
  disableGlobalClick: 'true',
  soundRate: '44&ish264=true&h264profile=baseline&h264level=3.1&fps=25&soundCodec=Speex',
  ks: '<%- answers.ks %>',
  pid: '<%-  answers.partnerId  %>',
};
var attributes = {
  id: 'krecord',
  name: 'krecord',
  align: 'middle',
};
var params = {
  quality: 'high',
  bgcolor: '#000',
  allowscriptaccess: 'always',
  allownetworking: 'all',
  wmode: 'opaque',
  movie: swfURL,
  allowfullscreen: 'true',
};

swfobject.embedSWF(swfURL, 'krecordwrapper', '320', '240', '10.0.0', '', flashVars, params, attributes)
console.log('embedded', streamHost, streamApp, streamName);
```
### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script type="text/javascript">

  /*
   * All Code Confidential and Proprietary, Copyright ï¿½2011 Kaltura, Inc.
   * To learn more: http://corp.kaltura.com/Products/Video-Applications/Kaltura-Mediaspace-Video-Portal
  */

  /*
   * KRecord integration guide
   * http://knowledge.kaltura.com/krecord-website-integration-guide
   */

  function setConfirmUnload(on) {
      window.onbeforeunload = (on) ? unloadMessage : null;
  }

  function unloadMessage() {
      return "Your live event is still transmitting the local buffer. If you leave the current page the transmission will be interrupted.";
  }

  function jsLog(message) {
      console.log(message);
      $('#krecord_msg').text(message);
  }


  function toHHMMSS (sec_num) {
      var hours   = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      var time    = hours+':'+minutes+':'+seconds;
      return time;
  }


  var krecordLiveHandlerPrototype = function() {

      this.interval = 0;
      this.timer = 0;
      
      
      this.startStreaming = function() {
          var krec = document.getElementById('krecord');
          krec.startRecording();
          $("#btn_stream").hide();
      }
      
      this.stopStreaming = function() {
          var krec = document.getElementById('krecord');
          krec.stopRecording();
          $("#btn_stop").hide();
          window.clearInterval(krecordHandler.interval);
      }
      
      
      this.updateTimer = function() {
          this.timer++;
          $("#timer").html('<i class="icon-circle text-error"></i> ' + toHHMMSS(this.timer));
      }
      
      // ------------------------------------------
      // KRecord event handlers
      // ------------------------------------------
      
      
      this.deviceDetected = function() {
          jsLog('detected device');
      }
      
      this.recordStart = function() {
          jsLog('record started');
          $("#btn_stream").hide();
          $("#btn_stop").show();
          krecordHandler.interval = window.setInterval(function(){krecordHandler.updateTimer()}, 1000);
          setConfirmUnload(true);
      }
      
      this.recordComplete = function() {
          setConfirmUnload(false);
          jsLog('record stopped');
          $("#btn_stream").show();
          $("#btn_stop").hide();
          $("#krecordwrapper").remove();
          $("#btn_stream").remove();
      }
      
      /*
       *  connection to media server failed
       */
      this.netconnectionConnectFailed = function() {
          alert('connection to media server failed');
          jsLog('netconnectionConnectFailed');
      }
      
      /*
       * connection to media server failed
       */
      this.netconnectionConnectInvalidapp = function() {
          alert('connection to media server failed');
          jsLog('netconnectionConnectInvalidapp');
      }
      
      /*
       * connection to media server failed
       */
      this.netconnectionConnectClosed = function() {
          alert('connection to media server failed');
          jsLog('netconnectionConnectClosed');
      }
      
      /*
       * connection to media server failed
       */
      this.netconnectionConnectRejected = function() {
          alert('connection to media server failed');
          jsLog('netconnectionConnectRejected');
      }


      this.connected = function() {
          jsLog('connected');
          $("#btn_stream").show();
          $("#setupKRecord_msg").hide();
      }

      this.connecting = function(){
          jsLog('connecting');
      }

      this.errorCamera = function() {
          jsLog('errorCamera');
      }
      
      this.errorMicrophone = function() {
          jsLog('errorMicrophone');
      }
      
      this.cameraDenied = function() {
          jsLog('cameraDenied');
      }

      this.microphoneDenied = function() {
          jsLog('microphoneDenied');
      }
  }


  var krecordHandler = new krecordLiveHandlerPrototype();
  </script>


  <script src="http://cdnapi.kaltura.com/p/<%- answers.partnerId %>/sp/<%- answers.partnerId %>00/embedIframeJs/uiconf_id/<%- answers.uiConf %>/partner_id/<%- answers.partnerId %>"></script>
  <style type="text/css">
    button {
      color: #900;
      font-weight: bold;
      font-size: 150%;
      text-transform: uppercase;
      width: 320px;
      padding: 10px;
      margin: 10px 0 10px 0;
    }
  </style>
  <script src="/js/swfobject.js"></script>
</head>
<body>
    <div id="setupKRecord_msg">
      <h2 id="krecord_msg">Starting the KRecord widget...</h2>
    </div>

    <!--
    ///*****************************
    ///****
    ///**** Step 2: Embedding and Configuring the KRecord widget:
    ///**** Pay special attention to the flashvars in the below embed, this is what configures the KRecord to properly do Live Stream instead of just recording.
    ///*****************************
    -->
<%
var broadcastURL = results[2].primaryBroadcastingUrl;
var streamHost = broadcastURL.substring(0, broadcastURL.indexOf(':', 6));
var streamApp = broadcastURL.substring(broadcastURL.indexOf('kLive'));
var streamName = results[2].id + "_1";
streamApp = encodeURIComponent(streamApp);
streamName = encodeURIComponent(streamName);
%>
    <div id="krecordwrapper" style="width:320px;height:240px;">
      <object type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" 
              data="http://cdnapi.kaltura.com/krecord/ui_conf_id/<%- answers.uiConf %>" 
              id="krecord" width="100%" height="100%">
        <param name="allowScriptAccess" value="always" />
        <param name="allowNetworking" value="all" />
        <param name="wmode" value="opaque" />
        <param name="flashvars" value="debugmode=true&isLive=true&delegate=krecordHandler&rtmpHost=<%- streamHost %>&localeUrl=http://cdnapi.kaltura.com/flash/krecord/v1.7/locale.xml&themeUrl=http://cdnapi.kaltura.com/flash/krecord/v1.7/skin.swf&fmsApp=<%- streamApp %>&streamName=<%- streamName %>&showUi=false&showPreviewTimer=false&autoPreview=false&disableGlobalClick=true&soundRate=44&ish264=true&h264profile=baseline&h264level=3.1&fps=25&soundCodec=Speex&ks=<%- answers.ks %>=&pid=<%- answers.partnerId %>">
        <param name="movie" value="http://cdnapi.kaltura.com/krecord/ui_conf_id/<%- answers.uiConf %>" />
      </object>
    </div>
  <script>
    var swfURL = "http://cdnapi.kaltura.com/krecord/ui_conf_id/<%-  answers.uiConf  %>";
    var broadcastURL = "<%-  results[2].primaryBroadcastingUrl %>";
    var streamHost = broadcastURL.substring(0, broadcastURL.indexOf(':', 6));
    var streamApp = broadcastURL.substring(broadcastURL.indexOf('kLive'));
    var streamName = "<%-  results[2].id  %>_1";
    streamApp = encodeURIComponent(streamApp);
    streamName = encodeURIComponent(streamName);
    console.log('deleg', krecordHandler);
    var flashVars = {
      debugmode: 'true',
      isLive: 'true',
      delegate: krecordHandler,
      rtmpHost: streamHost,
      localeUrl: 'http://cdnapi.kaltura.com/flash/krecord/v1.7/locale.xml',
      themeUrl: 'http://cdnapi.kaltura.com/flash/krecord/v1.7/skin.swf',
      fmsApp: streamApp,
      streamName: streamName,
      showUi: 'false',
      showPreviewTimer: 'false',
      autoPreview: 'false',
      disableGlobalClick: 'true',
      soundRate: '44&ish264=true&h264profile=baseline&h264level=3.1&fps=25&soundCodec=Speex',
      ks: '<%- answers.ks %>',
      pid: '<%-  answers.partnerId  %>',
    };
    var attributes = {
      id: 'krecord',
      name: 'krecord',
      align: 'middle',
    };
    var params = {
      quality: 'high',
      bgcolor: '#000',
      allowscriptaccess: 'always',
      allownetworking: 'all',
      wmode: 'opaque',
      movie: swfURL,
      allowfullscreen: 'true',
    };

    //swfobject.embedSWF(swfURL, 'krecordwrapper', '320', '240', '10.0.0', '', flashVars, params, attributes)
    console.log('embedded', streamHost, streamApp, streamName);
  </script>
   
    <div class="span5 offset1">
      <button id="btn_stream" style="display: none;" class="btn btn-primary btn-large" onclick="startStreaming()" >
        Start Streaming
      </button>
      <button id="btn_stop" style="display: none;" class="btn btn-danger btn-large" onclick="stopStreaming()" >
        Stop Streaming
      </button>
    </div>

    <h2 id="playertype"></h2>
    <div id="kaltura_player" style="display: none; width: 560px; height: 395px;"></div>
    <div id="setupLiveStream_msg" style="display: none;">
      <h2>Setting up your broadcast stream...</h2>
      <p>Please wait for the live stream to begin. grab a coffee, it can take a few minutes...</p>
      <img src="./coffee.gif" style="width: 560px; height: 395px;" />
    </div>


    <script type="text/javascript">

      <!--
      ///*****************************
      ///****
      ///**** Step 3: Start Broadcast from KRecord, Wait for initial streaming and start Live Stream playback via player
      ///****
      ///*****************************
      -->

      var statusCheckTimeout = 2000;

      var kdp = null;
      
      function startStreaming() {
        $('#kaltura_player').empty();
        $('#playertype').text('');
        krecordHandler.startStreaming();
        
        var checkStatusTimer = null;
        var liveTestStart = new Date().getTime();
        var checkStatus_isLive = function() {
          new kWidget.api( { 'wid' : "_<%- answers.partnerId %>" })
          .doRequest({'service':'liveStream', 'action': 'islive', 'id': '<%- answers.entryId %>', 'protocol': 'auto',  "cache_st": Math.floor((Math.random() * 10000000) + 1) }, 
            function( data ){
              if (data == false) {
                console.log( 'Live stream playback is not ready yet... ' + data );
                clearTimeout(checkStatusTimer);
                checkStatusTimer = setTimeout(checkStatus_isLive, statusCheckTimeout);
                $('#setupLiveStream_msg').show();
              } else {
                clearTimeout(checkStatusTimer);
                console.log( 'now live! ' + data );
                var liveToPublishTime = (new Date().getTime()) - liveTestStart;
                console.log('Live to Publish initialization time: ' + ms2TimeString(liveToPublishTime));
                $('#kaltura_player').show();
                $('#playertype').text('Watching the live stream:');
                kWidget.embed({
                  "targetId": "kaltura_player",
                  "wid": "_" + <%- answers.partnerId || 0 %>,
                  "uiconf_id": <%- answers.playerUiConf || 0 %>,
                  "flashvars": {
                    "streamerType": "auto",
                    'autoPlay': true,
                    "externalInterfaceDisabled": false
                  },
                  "cache_st": 11,
                  "entry_id": "<%- answers.entryId %>",
                  'readyCallback': function( playerId ){
                    console.log( "kWidget player ready: " + playerId );
                    kdp = $( '#' + playerId ).get(0);
                  }
                });
                $('#setupLiveStream_msg').hide();
              }
            }
          );
        };
        checkStatus_isLive();
      }

      <!--
      ///*****************************
      ///****
      ///**** Step 4: Stop Broadcast from KRecord, Play leftover DVR and wait for VOD Recording entry to be ready
      ///**** IMPORTANT: Note recordComplete event inside kreclive.js which removes the krecord flash widget from the DOM once the buffer has been emptied. Without this step, the recording will not be closed and processed.
      ///*****************************
      -->
      function stopStreaming() {
        krecordHandler.stopStreaming();

        kdp.sendNotification('doStop');
        new kWidget.api({ 'wid' : "_<%- answers.partnerId %>", })
          .doRequest({'service':'liveStream', 'action': 'get', 'entryId': '<%- answers.entryId %>'}, 
            function( data ){
              vodEntryId = data.recordedEntryId;
              playVODRecording();
            }
        );
      }

      var vodEntryId = null;
      var playVODRecording = function () {
        
        $('#playertype').text('Watching last available DVR. Not Live anymore. Waiting for VOD Recording to be ready (this can take several minutes up to few hours):');
        kdp.sendNotification("doPlay");

        var checkVODStatusTimer = null;
        var vodTestStart = new Date().getTime();
        var checkStatus_VODReady = function() {
          new kWidget.api( { 'wid' : "_<%- answers.partnerId %>" })
          .doRequest({'service':'media', 'action': 'get', 'entryId': vodEntryId,  "cache_st": Math.floor((Math.random() * 10000000) + 1) }, 
            function( data ){
              if (data.status != 2) {
                console.log( 'VOD Recording is not ready yet... ' + data.id + ' : ' + data.status);
                clearTimeout(checkVODStatusTimer);
                checkVODStatusTimer = setTimeout(checkStatus_VODReady, statusCheckTimeout);
              } else {
                clearTimeout(checkVODStatusTimer);
                console.log( 'VOD Recording now available! ' + data.id + ' : ' + data.status);
                var VODRecordingProcessingTime = (new Date().getTime()) - vodTestStart;
                console.log('VOD Processing time: ' + ms2TimeString(VODRecordingProcessingTime));
                $('#kaltura_player').show();
                $('#playertype').text('Watching the VOD Recording:');
                kWidget.embed({
                  "targetId": "kaltura_player",
                  "wid": "_" + <%- answers.partnerId %>,
                  "uiconf_id": <%- answers.uiConf %>,
                  "flashvars": {
                    "streamerType": "auto",
                    'autoPlay': true,
                    "externalInterfaceDisabled": false
                  },
                  "cache_st": 11,
                  "entry_id": data.id,
                  'readyCallback': function( playerId ){
                    console.log( "kWidget player ready: " + playerId );
                    kdp = $( '#' + playerId ).get(0);
                  }
                });
              }
            }
          );
        };
        checkStatus_VODReady();
      }

      function ms2TimeString(a,k,s,m,h){
         return k=a%1e3, // optimized by konijn
          s=a/1e3%60|0,
          m=a/6e4%60|0,
          h=a/36e5%24|0,
          (h?(h<10?'0'+h:h)+':':'')+ // optimized
          (m<10?0:'')+m+':'+  // optimized
          (s<10?0:'')+s+'.'+ // optimized
          (k<100?k<10?'00':0:'')+k // optimized
      }

    </script>
</body>
</html>
```