KalturaMediaEntryFilter filter = new KalturaMediaEntryFilter();
KalturaFilterPager pager = new KalturaFilterPager();

Object result = client.MediaService.List(filter, pager);
Console.WriteLine(result);