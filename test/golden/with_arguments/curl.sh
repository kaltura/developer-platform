curl -X POST https://www.kaltura.com/api_v3/service/media/action/list \
    -d "ks=$KALTURA_SESSION" \
    -d "filter[nameLike]=foobar" \
    -d "filter[statusEqual]=2" \
    -d "filter[orderBy]=%2BcreatedAt" \
    -d "filter[advancedSearch][objectType]=KalturaAttributeCondition" \
    -d "filter[advancedSearch][value]=baz" \
    -d "pager[pageSize]=3"
