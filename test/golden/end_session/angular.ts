this.kaltura.request(new SessionEndAction({}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })