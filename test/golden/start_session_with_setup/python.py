from KalturaClient import *
from KalturaClient.Plugins.Core import *

config = KalturaConfiguration(123456)
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)

secret = "********************"
user_id = "user@example.com"
k_type = KalturaSessionType.USER
partner_id = 123456
expiry = 86400
privileges = ""

result = client.session.start(secret, user_id, k_type, partner_id, expiry, privileges)
print(result)
