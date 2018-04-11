from KalturaClient import *
from KalturaClient.Plugins.Core import *

config = KalturaConfiguration(123456)
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)
ks = client.session.start(
      "12341234123412341234",
      "user@example.com",
      KalturaSessionType.USER,
      123456)
client.setKs(ks)

