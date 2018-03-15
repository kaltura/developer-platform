curl -X POST https://www.kaltura.com/api_v3/service/batch/action/freeExclusiveJob \
    -d "ks=$KALTURA_SESSION" \
    -d "resetExecutionAttempts=false" \
