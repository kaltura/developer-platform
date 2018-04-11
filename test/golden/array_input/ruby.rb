require 'kaltura'
include Kaltura

config = KalturaConfiguration.new()
config.service_url = 'https://www.kaltura.com'
client = KalturaClient.new(config);
client.ks = client.session_service.start(
    "YOUR_KALTURA_SECRET",
    "YOUR_USER_ID",
    Kaltura::KalturaSessionType::ADMIN,
    YOUR_PARTNER_ID)


access_control_profile = KalturaAccessControlProfile.new()
access_control_profile.name = "foo"
access_control_profile.rules = []
access_control_profile.rules[0] = KalturaRule.new()
access_control_profile.rules[0].code = "thiscode"
access_control_profile.rules[0].contexts = []
access_control_profile.rules[0].contexts[0] = KalturaContextTypeHolder.new()
access_control_profile.rules[0].contexts[0].type = KalturaContextType::PLAY
access_control_profile.rules[0].contexts[1] = KalturaContextTypeHolder.new()
access_control_profile.rules[0].conditions = []
access_control_profile.rules[0].conditions[0] = KalturaDeliveryProfileCondition.new()
access_control_profile.rules[0].conditions[0].description = "cond 1"
access_control_profile.rules[0].conditions[1] = KalturaDeliveryProfileCondition.new()
access_control_profile.rules[0].conditions[1].description = "cond 2"
access_control_profile.rules[1] = KalturaRule.new()
access_control_profile.rules[1].code = "second code"

results = client.access_control_profile_service.add(access_control_profile)
puts results.inspect
