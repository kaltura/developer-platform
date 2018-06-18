let entryId = "";
let captionAsset = new KalturaCaptionAsset();
captionAsset.tags = "stuff";
captionAsset.language = "Arabic";

client.request(new CaptionAssetAddAction({entryId, captionAsset}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })