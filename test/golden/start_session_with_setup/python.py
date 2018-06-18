from KalturaClient import *
from KalturaClient.Plugins.Core import *

config = KalturaConfiguration(123456)
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)

secret = "********************"
userId = "user@example.com"
type = KalturaSessionType.USER
partnerId = 123456
expiry = 86400
privileges = ""

result = client.session.start(secret, userId, type, partnerId, expiry, privileges);
print(result);
