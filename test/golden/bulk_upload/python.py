
file_data = open('/path/to/file', 'rb')
bulk_upload_data = KalturaBulkUploadJobData()
bulk_upload_entry_data = KalturaBulkUploadEntryData()

result = client.media.bulkUploadAdd(file_data, bulk_upload_data, bulk_upload_entry_data)
print(result)
