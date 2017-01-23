KalturaMediaEntryFilter filter = new KalturaMediaEntryFilter();
KalturaFilterPager pager = new KalturaFilterPager();

Object result = client.getMediaService().list(filter, pager);
System.out.println(result);