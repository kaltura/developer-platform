curl -X POST https://www.kaltura.com/api_v3/service/media/action/get \
    -d "ks=$KALTURA_SESSION" \
    -d "entryId=abcde" \
    -d "version=-1" \
