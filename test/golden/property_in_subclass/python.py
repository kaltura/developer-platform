
liveStreamEntry = KalturaLiveStreamEntry()
liveStreamEntry.liveStreamConfigurations = []
liveStreamEntry.liveStreamConfigurations[0] = KalturaLiveStreamConfiguration()
liveStreamEntry.liveStreamConfigurations[0].backupUrl = "abcd"
sourceType = ""

result = client.liveStream.add(liveStreamEntry, sourceType);
print(result);
