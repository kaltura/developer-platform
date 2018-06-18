let entryId = "abcde";
let version = -1;

this.kaltura.request(new MediaGetAction({entryId, version}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })