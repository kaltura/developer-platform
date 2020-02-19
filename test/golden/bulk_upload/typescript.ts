let fileData = null;
let bulkUploadData = new KalturaBulkUploadJobData();
let bulkUploadEntryData = new KalturaBulkUploadEntryData();

client.request(new MediaBulkUploadAddAction({fileData, bulkUploadData, bulkUploadEntryData}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })