
live_stream_entry = KalturaLiveStreamEntry.new()
live_stream_entry.live_stream_configurations = []
live_stream_entry.live_stream_configurations[0] = KalturaLiveStreamConfiguration.new()
live_stream_entry.live_stream_configurations[0].backup_url = "abcd"
source_type = ""

results = client.live_stream_service.add(live_stream_entry, source_type)
puts results.inspect
