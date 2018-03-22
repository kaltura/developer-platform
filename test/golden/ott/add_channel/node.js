var channel = new Kaltura.kc.objects.KalturaChannel();
channel.description = "foo";
channel.isActive = true;

client.channel.add(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
channel);