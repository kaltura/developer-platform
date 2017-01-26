
entry_id = ""
caption_asset = KalturaCaptionAsset.new()

results = client.caption_asset_service.add(entry_id, caption_asset)
puts results.inspect