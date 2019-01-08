KALTURA_SESSION=`curl -X POST https://www.kaltura.com/api_v3/service/session/action/startWidgetSession \
    -d "widgetId=_12345"`
curl -X POST https://www.kaltura.com/api_v3/service/apptoken/action/startSession \
    -d "ks=$KALTURA_SESSION" \
