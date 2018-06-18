curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "type=0" \
    -d "secret=********" \
    -d "userId=YOUR_USER_ID" \
    -d "expiry=86400"
