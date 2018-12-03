
secret = "*******************"
user_id = "YOUR_USER_ID"
k_type = KalturaSessionType.USER
partner_id = 0
expiry = 86400
privileges = ""

result = client.session.start(secret, user_id, k_type, partner_id, expiry, privileges)
print(result)
