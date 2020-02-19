var fileData = new File("/path/to/file");
var bulkUploadData = new KalturaBulkUploadJobData();
var bulkUploadEntryData = new KalturaBulkUploadEntryData();

client.media.bulkUploadAdd(function(success, results) {
  if (!success || (results && results.code && results.message)) {
    console.log('Kaltura Error', success, results);
  } else {
    console.log('Kaltura Result', results);
  }
},
fileData,
bulkUploadData,
bulkUploadEntryData);