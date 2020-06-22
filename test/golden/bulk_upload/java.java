File fileData = new FileInputStream("/path/to/file");
BulkUploadJobData bulkUploadData = new BulkUploadJobData();
BulkUploadEntryData bulkUploadEntryData = new BulkUploadEntryData();

BulkUploadAddMediaBuilder requestBuilder = MediaService.bulkUploadAdd(fileData, bulkUploadData, bulkUploadEntryData)
    .setCompletion(new OnCompletion<Response<BulkUpload>>() {
        @Override
        public void onComplete(Response<BulkUpload> result) {
            System.out.println(result);
        }
    });