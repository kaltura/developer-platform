
entry_id = ""
caption_asset = KalturaCaptionAsset.new()
caption_asset.tags = "stuff"
caption_asset.language = "Arabic"

results = client.caption_asset_service.add(entry_id, caption_asset)
puts results.inspect
