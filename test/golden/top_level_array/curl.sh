curl -X POST https://www.kaltura.com/api_v3/service/media/action/convert \
    -d "ks=$KALTURA_SESSION" \
    -d "dynamicConversionAttributes[0][flavorParamsId]=3" \
    -d "dynamicConversionAttributes[0][objectType]=KalturaConversionAttribute"
