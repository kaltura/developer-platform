let accessControl = new KalturaAccessControl();

this.kaltura.request(new AccessControlAddAction({accessControl}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })