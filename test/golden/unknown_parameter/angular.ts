let accessControl = new KalturaAccessControl();

this.kaltura.request(new AccessControlAddAction({accessControl}))
    .map(result => {
      console.log(result);
    },
    error => {
      throw error;
    })