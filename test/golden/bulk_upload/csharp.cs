file fileData = new FileStream("/path/to/file", FileMode.Open, FileAccess.Read);
BulkUploadJobData bulkUploadData = new BulkUploadJobData();
BulkUploadEntryData bulkUploadEntryData = new BulkUploadEntryData();

OnCompletedHandler<BulkUpload> handler = new OnCompletedHandler<BulkUpload>(
      (BulkUpload result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
MediaService.BulkUploadAdd(fileData, bulkUploadData, bulkUploadEntryData)
   .SetCompletion(handler)
   .Execute(client);