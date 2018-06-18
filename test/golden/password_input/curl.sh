curl -X POST https://www.kaltura.com/api_v3/service/user/action/loginByLoginId \
    -d "password=********" \
    -d "expiry=86400" \
    -d "privileges=*"
