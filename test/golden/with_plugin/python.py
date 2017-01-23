from KalturaClient import *
from KalturaClient.Plugins.Core import *
from KalturaClient.Plugins.Metadata import *

config = KalturaConfiguration()
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)
ks = client.session.start(
      "YOUR_KALTURA_SECRET",
      "YOUR_USER_ID",
      KalturaSessionType.ADMIN,
      YOUR_PARTNER_ID)
client.setKs(ks)

filter = KalturaMetadataProfileFilter()
pager = KalturaFilterPager()

result = client.metadata.metadataProfile.list(filter, pager);
print(result);