curl -X POST https://www.kaltura.com/api_v3/service/assethistory/action/list \
    -d "ks=$KALTURA_SESSION" \
    -d "filter[assetIdIn]=id_in" \
    -d "filter[orderBy]=0" \
    -d "pager[pageIndex]=3" \
    -d "pager[pageSize]=7" \
