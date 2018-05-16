MediaEntryFilter filter = new MediaEntryFilter();
filter.setNameLike("foobar");
filter.setStatusEqual(EntryStatus.READY.getValue());
filter.setOrderBy(MediaEntryOrderBy.CREATED_AT_ASC.getValue());
filter.setAdvancedSearch(new AttributeCondition());
filter.getAdvancedSearch().setValue("baz");
FilterPager pager = new FilterPager();
pager.setPageSize(3);

ListMediaBuilder requestBuilder = MediaService.list(filter, pager)
    .setCompletion(new OnCompletion<Response<ListResponse<MediaEntry>>>() {
        @Override
        public void onComplete(Response<ListResponse<MediaEntry>> result) {
            System.out.println(result);
        }
    });