
channel = KalturaChannel.new()
channel.description = "foo"
channel.is_active = true
channel.asset_types = []
channel.asset_types[0] = KalturaIntegerValue.new()
channel.asset_types[0].value = 0
channel.asset_types[0].description = "assetValDesc"
channel.asset_types[1] = KalturaIntegerValue.new()
channel.asset_types[1].value = 1
channel.asset_types[1].description = "assetDesc2"

results = client.channel_service.add(channel)
puts results.inspect
