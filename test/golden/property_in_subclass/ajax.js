var liveStreamEntry = {objectType: "KalturaLiveStreamEntry"};
liveStreamEntry.liveStreamConfigurations = [];
liveStreamEntry.liveStreamConfigurations[0] = {objectType: "KalturaLiveStreamConfiguration"};
liveStreamEntry.liveStreamConfigurations[0].backupUrl = "abcd";
var sourceType = "";

KalturaLiveStreamService.add(liveStreamEntry, sourceType)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });