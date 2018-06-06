let accessControl = new KalturaAccessControl();

client.request(new AccessControlAddAction({accessControl}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })