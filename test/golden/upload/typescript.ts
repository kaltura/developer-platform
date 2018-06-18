let uploadTokenId = "abcde";
let fileData = "foobar";
let resume = false;
let finalChunk = true;
let resumeAt = -1;

client.request(new UploadTokenUploadAction({uploadTokenId, fileData, resume, finalChunk, resumeAt}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })