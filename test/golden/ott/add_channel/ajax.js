var channel = {objectType: "KalturaChannel"};
channel.description = "foo";
channel.isActive = true;

KalturaChannelService.add(channel)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });