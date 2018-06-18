var uploadTokenId = "abcde";
var fileData = "foobar";
var resume = false;
var finalChunk = true;
var resumeAt = -1;

KalturaUploadTokenService.upload(uploadTokenId, fileData, resume, finalChunk, resumeAt)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });