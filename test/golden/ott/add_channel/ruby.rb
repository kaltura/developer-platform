
channel = KalturaChannel.new()
channel.description = "foo"
channel.is_active = true

results = client.channel_service.add(channel)
puts results.inspect
