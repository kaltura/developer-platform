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

access_control_profile = KalturaAccessControlProfile()
access_control_profile.name = "foo"
access_control_profile.rules = []
access_control_profile.rules.append(KalturaRule())
access_control_profile.rules[0].code = "thiscode"
access_control_profile.rules[0].contexts = []
access_control_profile.rules[0].contexts.append(KalturaContextTypeHolder())
access_control_profile.rules[0].contexts[0].type = KalturaContextType.PLAY
access_control_profile.rules[0].contexts.append(KalturaContextTypeHolder())
access_control_profile.rules[0].conditions = []
access_control_profile.rules[0].conditions.append(KalturaDeliveryProfileCondition())
access_control_profile.rules[0].conditions[0].description = "cond 1"
access_control_profile.rules[0].conditions.append(KalturaDeliveryProfileCondition())
access_control_profile.rules[0].conditions[1].description = "cond 2"
access_control_profile.rules.append(KalturaRule())
access_control_profile.rules[1].code = "second code"

result = client.accessControlProfile.add(access_control_profile)
print(result)
