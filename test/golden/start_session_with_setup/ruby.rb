require 'kaltura'
include Kaltura

config = KalturaConfiguration.new()
config.service_url = 'https://www.kaltura.com'
client = KalturaClient.new(config);
client.ks = client.session_service.start(
    "12341234123412341234",
    "user@example.com",
    Kaltura::KalturaSessionType::USER,
    123456)


