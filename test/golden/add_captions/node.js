let entryId = "";
let captionAsset = new kaltura.objects.CaptionAsset();
captionAsset.tags = "stuff";
captionAsset.language = "Arabic";

kaltura.services.captionAsset.add(entryId, captionAsset)
.execute(client)
.then(result => {
    console.log(result);
});