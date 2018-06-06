let id = "abc";

client.request(new AppTokenGetAction({id}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })