curl -X POST https://www.kaltura.com/api_v3/service/caption_captionasset/action/add \
    -d "ks=$KALTURA_SESSION" \
    -d "captionAsset[tags]=stuff" \
    -d "captionAsset[language]=Arabic" \
    -d "captionAsset[objectType]=KalturaCaptionAsset"
