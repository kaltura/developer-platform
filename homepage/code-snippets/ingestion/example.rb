entry = KalturaMediaEntry.new()
entry.media_type = KalturaMediaType::VIDEO
entry.name = "Cat"

results = client.media_service.add(entry)
puts results.inspect

entry_id = results.id
resource = KalturaUrlResource.new()
resource.url = "https://example.com/catVideo.mp4"

results = client.media_service.add_content(entry_id, resource)
puts results.inspect
