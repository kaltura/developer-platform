from KalturaClient import *
from KalturaClient.Plugins.Core import *

config = KalturaConfiguration(2018872)
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)
ks = client.session.start(
      "81b50515b869628777617f454cdca7f5",
      "bobby.brennan@gmail.com",
      KalturaSessionType.USER,
      2018872)
client.setKs(ks)

