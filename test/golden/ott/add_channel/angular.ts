let channel = new KalturaChannel();
channel.description = "foo";
channel.isActive = true;

this.kaltura.request(new ChannelAddAction({channel}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })