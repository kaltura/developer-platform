
entryId = ""
captionAsset = KalturaCaptionAsset()
captionAsset.tags = "stuff"
captionAsset.language = "Arabic"

result = client.caption.captionAsset.add(entryId, captionAsset);
print(result);
