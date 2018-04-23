from KalturaClient import *
from KalturaClient.Plugins.Core import *

config = KalturaConfiguration()
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)

loginId = "foobar"
password = "*************"
partnerId = 0
expiry = 86400
privileges = "*"
otp = ""

result = client.user.loginByLoginId(loginId, password, partnerId, expiry, privileges, otp);
print(result);
