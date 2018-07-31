let liveStreamEntry = new kaltura.objects.LiveStreamEntry();
liveStreamEntry.liveStreamConfigurations = [];
liveStreamEntry.liveStreamConfigurations[0] = new kaltura.objects.LiveStreamConfiguration();
liveStreamEntry.liveStreamConfigurations[0].backupUrl = "abcd";
let sourceType = "";

kaltura.services.liveStream.add(liveStreamEntry, sourceType)
.execute(client)
.then(result => {
    console.log(result);
});