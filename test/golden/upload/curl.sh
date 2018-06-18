curl -X POST https://www.kaltura.com/api_v3/service/uploadtoken/action/upload \
    -d "ks=$KALTURA_SESSION" \
    -d "uploadTokenId=abcde" \
    -d "fileData=foobar" \
    -d "resume=false" \
    -d "finalChunk=true" \
    -d "resumeAt=-1"
