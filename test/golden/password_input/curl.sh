curl -X POST https://www.kaltura.com/api_v3/service/user/action/loginByLoginId \
    -d "ks=$KALTURA_SESSION" \
    -d "password=********" \
    -d "privileges=*"
