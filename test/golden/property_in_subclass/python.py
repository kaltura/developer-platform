
live_stream_entry = KalturaLiveStreamEntry()
live_stream_entry.liveStreamConfigurations = []
live_stream_entry.liveStreamConfigurations[0] = KalturaLiveStreamConfiguration()
live_stream_entry.liveStreamConfigurations[0].backupUrl = "abcd"
source_type = ""

result = client.liveStream.add(live_stream_entry, source_type)
print(result)
