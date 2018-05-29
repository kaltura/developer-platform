entry = KalturaMediaEntry()
entry.mediaType = KalturaMediaType.VIDEO
entry.name = "Cat"
entryResult = client.media.add(entry);

entryId = entryResult.id; 
resource = KalturaUrlResource()
resource.url = "https://example.com/catVideo.mp4"
result = client.media.addContent(entryId, resource);
