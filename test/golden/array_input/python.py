from KalturaClient import *
from KalturaClient.Plugins.Core import *

config = KalturaConfiguration()
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)
ks = client.session.start(
      "YOUR_KALTURA_SECRET",
      "YOUR_USER_ID",
      KalturaSessionType.ADMIN,
      YOUR_PARTNER_ID)
client.setKs(ks)

accessControlProfile = KalturaAccessControlProfile()
accessControlProfile.name = "foo"
accessControlProfile.rules = []
accessControlProfile.rules[0] = KalturaRule()
accessControlProfile.rules[0].code = "thiscode"
accessControlProfile.rules[0].contexts = []
accessControlProfile.rules[0].contexts[0] = KalturaContextTypeHolder()
accessControlProfile.rules[0].contexts[0].type = 1
accessControlProfile.rules[0].contexts[1] = KalturaContextTypeHolder()
accessControlProfile.rules[0].conditions = []
accessControlProfile.rules[0].conditions[0] = KalturaDeliveryProfileCondition()
accessControlProfile.rules[0].conditions[0].description = "cond 1"
accessControlProfile.rules[0].conditions[1] = KalturaDeliveryProfileCondition()
accessControlProfile.rules[0].conditions[1].description = "cond 2"
accessControlProfile.rules[1] = KalturaRule()
accessControlProfile.rules[1].code = "second code"

result = client.accessControlProfile.add(accessControlProfile);
print(result);
