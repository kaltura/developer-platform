curl -X POST https://www.kaltura.com/api_v3/service/channel/action/add \
    -d "ks=$KALTURA_SESSION" \
    -d "channel[description]=foo" \
    -d "channel[isActive]=true" \
    -d "channel[objectType]=KalturaChannel"
