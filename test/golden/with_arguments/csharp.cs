KalturaMediaEntryFilter filter = new KalturaMediaEntryFilter();
filter.NameLike = "foobar";
filter.StatusEqual = KalturaEntryStatus.READY;
filter.AdvancedSearch = new KalturaAttributeCondition();
filter.AdvancedSearch.Value = "baz";
KalturaFilterPager pager = new KalturaFilterPager();
pager.PageSize = 3;

Object result = client.MediaService.List(filter, pager);
Console.WriteLine(result);