from KalturaClient import *
from KalturaClient.Plugins.Core import *

config = KalturaConfiguration(12345)
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)
ks = client.session.start(
      "YOUR_KALTURA_SECRET",
      "YOUR_USER_ID",
      KalturaSessionType.ADMIN,
      12345)
client.setKs(ks)

id = ""
token_hash = ""
user_id = "YOUR_USER_ID"
k_type = KalturaSessionType.USER
expiry = 0
session_privileges = ""

result = client.appToken.startSession(id, token_hash, user_id, k_type, expiry, session_privileges)
print(result)
