
entry_id = "abcde"
version = -1

results = client.media_service.get(entry_id, version)
puts results.inspect
