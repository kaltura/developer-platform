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


filter = KalturaMetadataProfileFilter.new()
pager = KalturaFilterPager.new()

results = client.metadata_profile_service.list(filter, pager)
puts results.inspect