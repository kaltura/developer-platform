let channel = new KalturaChannel();
channel.description = "foo";
channel.isActive = true;

this.kaltura.request(new ChannelAddAction({channel}))
    .map(result => {
      console.log(result);
    },
    error => {
      throw error;
    })