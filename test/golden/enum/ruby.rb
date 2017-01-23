
secret = "YOUR_KALTURA_SECRET"
user_id = "YOUR_USER_ID"
type = KalturaSessionType::USER
partner_id = 0
expiry = 86400
privileges = ""

results = client.session_service.start(secret, user_id, type, partner_id, expiry, privileges)
puts results.inspect