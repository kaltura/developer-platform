
channel = KalturaChannel()
channel.description = "foo"
channel.isActive = true

result = client.channel.add(channel);
print(result);
