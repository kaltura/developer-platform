curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "ks=$KALTURA_SESSION" \
    -d "partnerId=2018872" \
    -d "secret=81b50515b869628777617f454cdca7f5" \
    -d "userId=bobby.brennan%40gmail.com" \
    -d "sessionType=0" \
    -d "type=0" \
    -d "expiry=86400"
