curl -X POST https://www.kaltura.com/api_v3/service/livestream/action/add \
    -d "ks=$KALTURA_SESSION" \
    -d "liveStreamEntry[liveStreamConfigurations][0][backupUrl]=abcd" \
    -d "liveStreamEntry[liveStreamConfigurations][0][objectType]=KalturaLiveStreamConfiguration" \
    -d "liveStreamEntry[objectType]=KalturaLiveStreamEntry"
