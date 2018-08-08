let filter = new kaltura.objects.MediaEntryFilter();
let pager = new kaltura.objects.FilterPager();

kaltura.services.media.listAction(filter, pager)
.execute(client)
.then(result => {
    console.log(result);
});