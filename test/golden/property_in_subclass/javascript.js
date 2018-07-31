var liveStreamEntry = new KalturaLiveStreamEntry();
liveStreamEntry.liveStreamConfigurations = [];
liveStreamEntry.liveStreamConfigurations[0] = new KalturaLiveStreamConfiguration();
liveStreamEntry.liveStreamConfigurations[0].backupUrl = "abcd";
var sourceType = "";

client.liveStream.add(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
liveStreamEntry,
sourceType);