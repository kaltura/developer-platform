curl -X POST https://www.kaltura.com/api_v3/service/elasticsearch_esearch/action/searchEntry \
    -d "ks=$KALTURA_SESSION" \
    -d "searchParams[searchOperator][searchItems][0][objectType]=KalturaESearchCaptionItem" \
    -d "searchParams[searchOperator][searchItems][0][searchTerm]=asdf" \
    -d "searchParams[searchOperator][operator]=1" \
    -d "searchParams[searchOperator][objectType]=KalturaESearchEntryOperator" \
    -d "searchParams[objectType]=KalturaESearchEntryParams"
