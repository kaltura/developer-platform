require 'kaltura'
include Kaltura

config = KalturaConfiguration.new()
config.service_url = 'https://www.kaltura.com'
client = KalturaClient.new(config);
client.ks = client.session_service.start(
    "YOUR_KALTURA_SECRET",
    "YOUR_USER_ID",
    Kaltura::KalturaSessionType::ADMIN,
    12345)


id = ""
token_hash = ""
user_id = "YOUR_USER_ID"
type = KalturaSessionType::USER
expiry = 0
session_privileges = ""

results = client.app_token_service.start_session(id, token_hash, user_id, type, expiry, session_privileges)
puts results.inspect
