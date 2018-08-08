let filter = new kaltura.objects.AssetHistoryFilter();
filter.assetIdIn = "id_in";
filter.orderBy = 0;
let pager = new kaltura.objects.FilterPager();
pager.pageIndex = 3;
pager.pageSize = 7;

kaltura.services.assetHistory.listAction(filter, pager)
.execute(client)
.then(result => {
    console.log(result);
});