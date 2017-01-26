MediaEntryFilter filter = new MediaEntryFilter();
FilterPager pager = new FilterPager();

OnCompletedHandler<ListResponse<MediaEntry>> handler = new OnCompletedHandler<ListResponse<MediaEntry>>(
      (ListResponse<MediaEntry> result, Exception e) => Console.WriteLine(result));
MediaService.List(filter, pager)
   .SetCompletion(handler)
   .Execute(client);