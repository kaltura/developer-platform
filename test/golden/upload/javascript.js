var uploadTokenId = "abcde";
var fileData = new File("/path/to/file");
var resume = false;
var finalChunk = true;
var resumeAt = -1;

client.uploadToken.upload(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
uploadTokenId,
fileData,
resume,
finalChunk,
resumeAt);