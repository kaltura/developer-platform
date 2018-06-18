client.request(new SessionEndAction({}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })