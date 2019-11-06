KalturaMediaEntry entry = new KalturaMediaEntry();
entry.mediaType = KalturaMediaType.VIDEO;
entry.name = "Cat";

Object entryResult = client.getMediaService().add(entry);

String entryId = entryResult.id;
KalturaUrlResource resource = new KalturaUrlResource();
resource.url = "https://example.com/catVideo.mp4";

Object result = client.getMediaService().addContent(entryId, resource);
System.out.println(result);
