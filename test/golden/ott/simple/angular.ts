let id = "abc";

this.kaltura.request(new AppTokenGetAction({id}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })