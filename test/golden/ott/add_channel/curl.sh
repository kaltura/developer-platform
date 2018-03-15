curl -X POST https://www.kaltura.com/api_v3/service/channel/action/add \
    -d "ks=$KALTURA_SESSION" \
    -d "channel[description]=foo" \
    -d "channel[assetTypes][0][value]=0" \
    -d "channel[assetTypes][0][description]=assetValDesc" \
    -d "channel[assetTypes][1][value]=1" \
    -d "channel[assetTypes][1][description]=assetDesc2" \
    -d "channel[isActive]=true" \
