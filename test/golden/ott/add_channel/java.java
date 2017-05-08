KalturaChannel channel = new KalturaChannel();
channel.description = "foo";
channel.isActive = true;

Object result = client.getChannelService().add(channel);
System.out.println(result);