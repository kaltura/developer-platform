let filter = new KalturaMediaEntryFilter();
let pager = new KalturaFilterPager();

client.request(new MediaListAction({filter, pager}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })