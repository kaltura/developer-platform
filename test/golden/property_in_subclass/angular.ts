let liveStreamEntry = new KalturaLiveStreamEntry();
liveStreamEntry.liveStreamConfigurations = [];
liveStreamEntry.liveStreamConfigurations[0] = new KalturaLiveStreamConfiguration();
liveStreamEntry.liveStreamConfigurations[0].backupUrl = "abcd";
let sourceType = "";

this.kaltura.request(new LiveStreamAddAction({liveStreamEntry, sourceType}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })