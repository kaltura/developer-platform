let liveStreamEntry = new KalturaLiveStreamEntry();
liveStreamEntry.liveStreamConfigurations = [];
liveStreamEntry.liveStreamConfigurations[0] = new KalturaLiveStreamConfiguration();
liveStreamEntry.liveStreamConfigurations[0].backupUrl = "abcd";
let sourceType = "";

client.request(new LiveStreamAddAction({liveStreamEntry, sourceType}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })