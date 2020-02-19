let fileData = '/path/to/file';
let bulkUploadData = new kaltura.objects.BulkUploadJobData();
let bulkUploadEntryData = new kaltura.objects.BulkUploadEntryData();

kaltura.services.media.bulkUploadAdd(fileData, bulkUploadData, bulkUploadEntryData)
.execute(client)
.then(result => {
    console.log(result);
});