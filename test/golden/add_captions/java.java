String entryId = "";
KalturaCaptionAsset captionAsset = new KalturaCaptionAsset();

Object result = client.getCaptionAssetService().add(entryId, captionAsset);
System.out.println(result);