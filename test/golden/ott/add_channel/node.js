var channel = new Kaltura.kc.objects.KalturaChannel();
channel.description = "foo";
channel.isActive = true;
channel.assetTypes = [];
channel.assetTypes[0] = new Kaltura.kc.objects.KalturaIntegerValue();
channel.assetTypes[0].value = 0;
channel.assetTypes[0].description = "assetValDesc";
channel.assetTypes[1] = new Kaltura.kc.objects.KalturaIntegerValue();
channel.assetTypes[1].value = 1;
channel.assetTypes[1].description = "assetDesc2";

client.channel.add(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
channel);