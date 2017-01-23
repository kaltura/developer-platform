
filter = KalturaMediaEntryFilter()
pager = KalturaFilterPager()

result = client.media.list(filter, pager);
print(result);