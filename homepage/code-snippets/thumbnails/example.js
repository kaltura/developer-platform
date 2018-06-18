let entryId = 'xyz_123'
let resource = new kaltura.objects.UrlResource();
resource.url = "https://example.com/catThumbnail.jpeg";

let thumbAsset = new kaltura.objects.ThumbAsset();

kaltura.services.thumbAsset.add(entryId, thumbAsset)
.execute(client)
.then(result => {
    kaltura.services.thumbAsset.setContent(result.id, resource);
});
