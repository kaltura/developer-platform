
entry_id = "abcde"
version = 0

results = client.media_service.get(entry_id, version)
puts results.inspect