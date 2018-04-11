var channel = new KalturaChannel();
channel.description = "foo";
channel.isActive = true;

client.channel.add(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
channel);