AssetHistoryFilter filter = new AssetHistoryFilter();
filter.AssetIdIn = "id_in";
filter.OrderBy = 0;
FilterPager pager = new FilterPager();
pager.PageIndex = 3;
pager.PageSize = 7;

OnCompletedHandler<ListResponse<AssetHistory>> handler = new OnCompletedHandler<ListResponse<AssetHistory>>(
      (ListResponse<AssetHistory> result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
AssetHistoryService.List(filter, pager)
   .SetCompletion(handler)
   .Execute(client);