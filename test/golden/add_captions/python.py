
entry_id = ""
caption_asset = KalturaCaptionAsset()
caption_asset.tags = "stuff"
caption_asset.language = "Arabic"

result = client.caption.captionAsset.add(entry_id, caption_asset)
print(result)
