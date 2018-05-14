let uploadTokenId = "";
let fileData = null;
let resume = false;
let finalChunk = true;
let resumeAt = -1;

kaltura.services.uploadToken.upload(uploadTokenId, fileData, resume, finalChunk, resumeAt)
.execute(client)
.then(result => {
    console.log(result);
});