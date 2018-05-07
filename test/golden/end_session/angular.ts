this.kaltura.request(new SessionEndAction({}))
    .map(result => {
      console.log(result);
    },
    error => {
      throw error;
    })