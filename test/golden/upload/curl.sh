KALTURA_SESSION=`curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "secret=YOUR_KALTURA_SECRET" \
    -d "userId=YOUR_USER_ID" \
    -d "type=0" \
    -d "partnerId=YOUR_PARTNER_ID" \
    -d "expiry=86400" \
    -d "format=1" | sed 's@"@@g'`
curl -X POST https://www.kaltura.com/api_v3/service/uploadtoken/action/upload \
    -d "ks=$KALTURA_SESSION" \
    -d "uploadTokenId=abcde" \
    -d "fileData=foobar" \
    -d "resume=false" \
    -d "finalChunk=true" \
    -d "resumeAt=-1"
