var entryId = "abcde";
var version = -1;

KalturaMediaService.get(entryId, version)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });