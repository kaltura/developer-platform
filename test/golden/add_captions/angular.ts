let entryId = "";
let captionAsset = new KalturaCaptionAsset();
captionAsset.tags = "stuff";
captionAsset.language = "Arabic";

this.kaltura.request(new CaptionAssetAddAction({entryId, captionAsset}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })