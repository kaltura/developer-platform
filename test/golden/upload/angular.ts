let uploadTokenId = "abcde";
let fileData = "foobar";
let resume = false;
let finalChunk = true;
let resumeAt = -1;

this.kaltura.request(new UploadTokenUploadAction({uploadTokenId, fileData, resume, finalChunk, resumeAt}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })