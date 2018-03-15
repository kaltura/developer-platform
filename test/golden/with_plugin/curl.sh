KALTURA_SESSION=`curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "secret=YOUR_KALTURA_SECRET" \
    -d "userId=YOUR_USER_ID" \
    -d "type=0" \
    -d "partnerId=YOUR_PARTNER_ID" \
    -d "expiry=86400" \
    -d "format=3"`
KALTURA_SESSION=`echo $KALTURA_SESSION | sed -e "s/^.*\"\(.*\)\".*$/\1/"`
curl -X POST https://www.kaltura.com/api_v3/service/metadata_metadataprofile/action/list \
    -d "ks=$KALTURA_SESSION" \
