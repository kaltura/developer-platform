KALTURA_SESSION=`curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "secret=YOUR_KALTURA_SECRET" \
    -d "userId=YOUR_USER_ID" \
    -d "type=0" \
    -d "partnerId=YOUR_PARTNER_ID" \
    -d "expiry=86400" \
    -d "format=1" | sed -e "s:\"::g"`
curl -X POST https://www.kaltura.com/api_v3/service/media/action/list \
    -d "ks=$KALTURA_SESSION" \
