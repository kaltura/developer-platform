curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "partnerId=123456" \
    -d "userId=user%40example.com" \
    -d "secret=********" \
    -d "type=0" \
    -d "expiry=86400"
