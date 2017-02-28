MediaEntryFilter filter = new MediaEntryFilter();
filter.NameLike = "foobar";
filter.StatusEqual = EntryStatus.READY;
filter.OrderBy = MediaEntryOrderBy.CREATED_AT_ASC;
filter.AdvancedSearch = new AttributeCondition();
filter.AdvancedSearch.Value = "baz";
FilterPager pager = new FilterPager();
pager.PageSize = 3;

OnCompletedHandler<ListResponse<MediaEntry>> handler = new OnCompletedHandler<ListResponse<MediaEntry>>(
      (ListResponse<MediaEntry> result, Exception e) =>
      {
        Console.WriteLine(result);
        done = true;
      });
MediaService.List(filter, pager)
   .SetCompletion(handler)
   .Execute(client);