from KalturaClient import *
from KalturaClient.Plugins.Core import *

config = KalturaConfiguration(1234)
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)
ks = client.session.start(
      "secretsauce",
      "YOUR_USER_ID",
      KalturaSessionType.ADMIN,
      1234)
client.setKs(ks)

