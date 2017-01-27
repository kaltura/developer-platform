
filter = KalturaMediaEntryFilter()
filter.nameLike = "foobar"
filter.statusEqual = KalturaEntryStatus.READY
filter.orderBy = KalturaMediaEntryOrderBy.CREATED_AT_ASC
filter.advancedSearch = KalturaAttributeCondition()
filter.advancedSearch.value = "baz"
pager = KalturaFilterPager()
pager.pageSize = 3

result = client.media.list(filter, pager);
print(result);