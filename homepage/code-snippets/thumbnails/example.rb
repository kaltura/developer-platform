entry_id = "xyz_123"
resource = KalturaUrlResource.new()
resource.url = "https://example.com/catThumbnail.jpeg"

thumbAsset = KalturaThumbAsset.new()
result = client.thumb_asset_service.add(entry_id, thumbAsset)
client.thumb_asset_service.set_content(result.id, resource)
