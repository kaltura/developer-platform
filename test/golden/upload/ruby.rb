
upload_token_id = ""
file_data = null
resume = false
final_chunk = true
resume_at = -1

results = client.upload_token_service.upload(upload_token_id, file_data, resume, final_chunk, resume_at)
puts results.inspect
