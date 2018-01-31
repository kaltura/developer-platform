
channel = KalturaChannel()
channel.description = "foo"
channel.isActive = True
channel.assetTypes = []
channel.assetTypes[0] = KalturaIntegerValue()
channel.assetTypes[0].value = 0
channel.assetTypes[0].description = "assetValDesc"
channel.assetTypes[1] = KalturaIntegerValue()
channel.assetTypes[1].value = 1
channel.assetTypes[1].description = "assetDesc2"

result = client.channel.add(channel);
print(result);
