let id = "abc";

this.kaltura.request(new AppTokenGetAction({id}))
    .map(result => {
      console.log(result);
    },
    error => {
      throw error;
    })