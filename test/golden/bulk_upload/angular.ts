let fileData = null;
let bulkUploadData = new KalturaBulkUploadJobData();
let bulkUploadEntryData = new KalturaBulkUploadEntryData();

this.kaltura.request(new MediaBulkUploadAddAction({fileData, bulkUploadData, bulkUploadEntryData}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })