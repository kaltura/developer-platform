
caption_asset = KalturaCaptionAsset.new()
entry_id = ""

results = client.caption_asset_service.add(caption_asset, entry_id)
puts results.inspect