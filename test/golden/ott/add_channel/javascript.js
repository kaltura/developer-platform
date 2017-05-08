var channel = new KalturaChannel();
channel.description = "foo";
channel.isActive = true;
channel.assetTypes = [];
channel.assetTypes[0] = new KalturaIntegerValue();
channel.assetTypes[0].value = 0;
channel.assetTypes[0].description = "assetValDesc";
channel.assetTypes[1] = new KalturaIntegerValue();
channel.assetTypes[1].value = 1;
channel.assetTypes[1].description = "assetDesc2";

client.channel.add(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
channel);