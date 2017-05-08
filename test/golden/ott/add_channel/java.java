KalturaChannel channel = new KalturaChannel();
channel.description = "foo";
channel.isActive = true;
channel.assetTypes = new ArrayList<KalturaIntegerValue>(2);
channel.assetTypes.set(0, new KalturaIntegerValue());
channel.assetTypes.get(0).value = 0;
channel.assetTypes.get(0).description = "assetValDesc";
channel.assetTypes.set(1, new KalturaIntegerValue());
channel.assetTypes.get(1).value = 1;
channel.assetTypes.get(1).description = "assetDesc2";

Object result = client.getChannelService().add(channel);
System.out.println(result);