
file_data = File.open("/path/to/file")
bulk_upload_data = KalturaBulkUploadJobData.new()
bulk_upload_entry_data = KalturaBulkUploadEntryData.new()

results = client.media_service.bulk_upload_add(file_data, bulk_upload_data, bulk_upload_entry_data)
puts results.inspect
