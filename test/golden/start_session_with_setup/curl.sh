KALTURA_SESSION=`curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "secret=81b50515b869628777617f454cdca7f5" \
    -d "userId=bobby.brennan@gmail.com" \
    -d "type=0" \
    -d "partnerId=2018872" \
    -d "expiry=86400" \
    -d "format=3"`
KALTURA_SESSION=`echo $KALTURA_SESSION | sed -e "s/^.*\"\(.*\)\".*$/\1/"`
