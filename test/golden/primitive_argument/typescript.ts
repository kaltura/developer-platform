let entryId = "abcde";
let version = -1;

client.request(new MediaGetAction({entryId, version}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })