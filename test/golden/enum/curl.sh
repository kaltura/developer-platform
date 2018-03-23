curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "ks=$KALTURA_SESSION" \
    -d "type=0" \
    -d "secret=YOUR_KALTURA_SECRET" \
    -d "userId=YOUR_USER_ID" \
    -d "expiry=86400"
