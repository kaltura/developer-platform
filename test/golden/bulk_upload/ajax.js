var fileData = null;
var bulkUploadData = {objectType: "KalturaBulkUploadJobData"};
var bulkUploadEntryData = {objectType: "KalturaBulkUploadEntryData"};

KalturaMediaService.bulkUploadAdd(fileData, bulkUploadData, bulkUploadEntryData)
  .execute(client, function(success, results) {
    if (!success || (results && results.code && results.message)) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
    }
  });