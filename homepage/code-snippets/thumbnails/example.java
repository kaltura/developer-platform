String entryId = 'xyz_123'; 
KalturaUrlResource resource = new KalturaUrlResource();
resource.url = "https://example.com/catThumbnail.jpeg";

ThumbAsset thumbAsset = new KalturaThumbAsset();
Object result = client.thumbAsset.add(entry_id, thumbAsset); 
client.thumbAsset.setContent(result.id, resource); 
