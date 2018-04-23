require 'kaltura'
include Kaltura

config = KalturaConfiguration.new()
config.service_url = 'https://www.kaltura.com'
client = KalturaClient.new(config);

secret = "********************"
user_id = "user@example.com"
type = KalturaSessionType::USER
partner_id = 123456
expiry = 86400
privileges = ""

results = client.session_service.start(secret, user_id, type, partner_id, expiry, privileges)
puts results.inspect
