curl -X POST https://www.kaltura.com/api_v3/service/cuepoint_cuepoint/action/add \
    -d "ks=$KALTURA_SESSION" \
    -d "cuePoint[objectType]=KalturaQuestionCuePoint" \
    -d "cuePoint[entryId]=0_mej0it92" \
    -d "cuePoint[question]=hello%20world" \
