KalturaCaptionAsset captionAsset = new KalturaCaptionAsset();
String entryId = "";

Object result = client.getCaptionAssetService().add(captionAsset, entryId);
System.out.println(result);