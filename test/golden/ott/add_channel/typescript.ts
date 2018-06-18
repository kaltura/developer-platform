let channel = new KalturaChannel();
channel.description = "foo";
channel.isActive = true;

client.request(new ChannelAddAction({channel}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })