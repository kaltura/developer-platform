String entryId = "";
CaptionAsset captionAsset = new CaptionAsset();
captionAsset.setTags("stuff");
captionAsset.setLanguage("Arabic");

AddCaptionAssetBuilder requestBuilder = CaptionAssetService.add(entryId, captionAsset)
    .setCompletion(new OnCompletion<Response<CaptionAsset>>() {
        @Override
        public void onComplete(Response<CaptionAsset> result) {
            System.out.println(result);
        }
    });