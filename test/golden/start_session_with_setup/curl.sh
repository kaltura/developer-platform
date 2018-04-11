curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "secret=12341234123412341234" \
    -d "userId=user%40example.com" \
    -d "type=0" \
    -d "partnerId=123456" \
    -d "expiry=86400"
