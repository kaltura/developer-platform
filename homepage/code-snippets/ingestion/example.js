kaltura.services.media.add(entry)
.execute(client)
.then(result => {
    console.log(result);

	let entryId = result.id;
	let resource = new kaltura.objects.UrlResource();
	resource.url = "https://example.com/catVideo.mp4";

	kaltura.services.media.addContent(entryId, resource)
	.execute(client)
	.then(result => {
	    console.log(result);
	});
});
