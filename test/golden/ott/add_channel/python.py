
channel = KalturaChannel()
channel.description = "foo"
channel.isActive = True

result = client.channel.add(channel);
print(result);
