secret = "a1b2c3d4e5f6g7h8i9j0"
user_id = "you@email.com"
type = KalturaSessionType::ADMIN
partner_id = 0000000
expiry = 86400
privileges = ""

results = client.session_service.start(secret, user_id, type, partner_id, expiry, privileges)
puts results.inspect
