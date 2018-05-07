let filter = new KalturaMediaEntryFilter();
let pager = new KalturaFilterPager();

this.kaltura.request(new MediaListAction({filter, pager}))
    .map(result => {
      console.log(result);
    },
    error => {
      throw error;
    })