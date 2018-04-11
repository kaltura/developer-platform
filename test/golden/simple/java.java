MediaEntryFilter filter = new MediaEntryFilter();
FilterPager pager = new FilterPager();

ListMediaBuilder requestBuilder = MediaService.list(filter, pager)
    .setCompletion(new OnCompletion<Response<ListResponse<MediaEntry>>>() {
        @Override
        public void onComplete(Response<ListResponse<MediaEntry>> result) {
            System.out.println(result);
        }
    });