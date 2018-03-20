String entryId = "";
KalturaCaptionAsset captionAsset = new KalturaCaptionAsset();
captionAsset.tags = "stuff";
captionAsset.language = "Arabic";

Object result = client.getCaptionAssetService().add(entryId, captionAsset);
System.out.println(result);