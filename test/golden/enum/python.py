
secret = "YOUR_KALTURA_SECRET"
userId = "YOUR_USER_ID"
type = KalturaSessionType.USER
partnerId = 0
expiry = 86400
privileges = ""

result = client.session.start(secret, userId, type, partnerId, expiry, privileges);
print(result);