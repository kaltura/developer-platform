var fileData = null
var bulkUploadData = BulkUploadJobData()
var bulkUploadEntryData = BulkUploadEntryData()

let requestBuilder = MediaService.bulkUploadAdd(fileData: fileData, bulkUploadData: bulkUploadData, bulkUploadEntryData: bulkUploadEntryData)
requestBuilder.set(completion: {(result: BulkUpload?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))